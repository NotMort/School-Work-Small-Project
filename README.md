# MQTT Sistem za Spremljanje Temperature

Ta projekt prikazuje preprost sistem za spremljanje temperature, ki uporablja MQTT protokol za komunikacijo med napravami.

## Tehnologije Uporabljene v Projektu

### MQTT Protokol
MQTT (Message Queuing Telemetry Transport) je lahkoten komunikacijski protokol, zasnovan za naprave z omejenimi viri in omrežja z nizko pasovno širino. Deluje po principu naročnika (subscriber) in objavitelja (publisher), kjer posrednik (broker) upravlja sporočila.

### Mosquitto in EMQX Brokerji
**Mosquitto** in **EMQX** sta oba MQTT brokerja, ki upravljata sporočila med napravami:
- **Mosquitto**: Lahek, odprtokoden MQTT broker, primeren za manjše projekte.
- **EMQX**: Zmogljiv in skalabilen odprtokoden MQTT broker, primeren za večje projekte in industrijske rešitve.

### Docker
Docker je platforma za kontejnerizacijo, ki omogoča izolirano izvajanje aplikacij. Uporablja se lahko za enostavno namestitev in upravljanje MQTT brokerjev in klientov.

### Programski Jeziki
- **Python**: Uporabljen za razvoj MQTT objavitelja (publisher).
- **JavaScript in Node.js**: Uporabljena za razvoj MQTT naročnika (subscriber) in spletne aplikacije.


