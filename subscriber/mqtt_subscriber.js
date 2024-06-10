const mqtt = require('mqtt');
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const port = 3000;

const client = mqtt.connect('mqtt://localhost:1883');
const mongoUrl = 'mongodb://localhost:27017';
let db;

MongoClient.connect(mongoUrl, (err, client) => {
  if (err) throw err;
  db = client.db('temperatureDB');
  console.log('Connected to MongoDB');
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('home/temperature', (err) => {
    if (!err) {
      console.log('Subscribed to topic home/temperature');
    }
  });
});

client.on('message', (topic, message) => {
  const temperature = parseFloat(message.toString());
  const timestamp = new Date();
  db.collection('temperatures').insertOne({ temperature, timestamp }, (err, res) => {
    if (err) throw err;
    console.log(`Saved temperature: ${temperature} at ${timestamp}`);
  });
});

app.get('/data', (req, res) => {
  db.collection('temperatures').find().sort({ timestamp: -1 }).limit(20).toArray((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
