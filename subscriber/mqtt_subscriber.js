const mqtt = require('mqtt');
const express = require('express');
const app = express();
const port = 3000;

const client = mqtt.connect('mqtt://localhost:1883');
let temperature = 0;

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('home/temperature', (err) => {
    if (!err) {
      console.log('Subscribed to topic home/temperature');
    }
  });
});

client.on('message', (topic, message) => {
  temperature = message.toString();
  console.log(`Received message: ${temperature} on topic: ${topic}`);
});

app.get('/', (req, res) => {
  res.send(`<h1>Current Temperature: ${temperature}°C</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
