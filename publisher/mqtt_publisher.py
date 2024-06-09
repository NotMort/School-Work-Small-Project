import paho.mqtt.client as mqtt
import time
import random

broker = "localhost"
port = 1883
topic = "home/temperature"

client = mqtt.Client()
client.connect(broker, port)

while True:
    temperature = random.uniform(20.0, 25.0)
    client.publish(topic, temperature)
    print(f"Published: {temperature} to topic {topic}")
    time.sleep(5)
