# MQTT Sistem za Spremljanje Temperature

Ta projekt prikazuje preprost sistem za spremljanje temperature, ki uporablja MQTT protokol za komunikacijo med napravami.

## Tehnologije Uporabljene v Projektu

### MQTT Protokol
MQTT (Message Queuing Telemetry Transport) je lahkoten komunikacijski protokol, zasnovan za naprave z omejenimi viri in omrežja z nizko pasovno širino. Deluje po principu naročnika (subscriber) in objavitelja (publisher), kjer posrednik (broker) upravlja sporočila.

### Docker
Docker je platforma za kontejnerizacijo, ki omogoča izolirano izvajanje aplikacij. Uporablja se lahko za enostavno namestitev in upravljanje MQTT brokerjev in klientov.

### Programski Jeziki
- **Python**: Uporabljen za razvoj MQTT objavitelja (publisher).
- **JavaScript in Node.js**: Uporabljena za razvoj MQTT naročnika (subscriber) in spletne aplikacije.


Seveda, tukaj je celotna dokumentacija v slovenščini, oblikovana kot README datoteka:

---

# MQTT Protokol in Razlika med Mosquitto in EMQX Brokerji

## Tehnologije Uporabljene v Projektu

### MQTT Protokol
MQTT je lahkoten komunikacijski protokol, zasnovan za naprave z omejenimi viri in omrežja z nizko pasovno širino. Deluje po principu naročnika in objavitelja, kjer posrednik upravlja sporočila.

### Mosquitto
Mosquitto je odprtokodni MQTT broker, ki je enostaven za uporabo in konfiguracijo. Primeren je za manjše sisteme in razvojne namene.

- **Prednosti:**
  - Enostavna namestitev in konfiguracija
  - Majhna poraba virov
  - Primerno za manjše projekte

- **Slabosti:**
  - Omejene funkcionalnosti v primerjavi z EMQX
  - Manjša zmogljivost za velike sisteme

### EMQX
EMQX je zmogljiv odprtokodni MQTT broker, ki podpira visoko razširljivost in napredne funkcije. Primeren je za industrijske in komercialne namene.

- **Prednosti:**
  - Visoka zmogljivost in razširljivost
  - Napredne funkcionalnosti
  - Robustno upravljanje naročnin in sporočil

- **Slabosti:**
  - Večja kompleksnost in zahtevnejša konfiguracija
  - Večja poraba virov

## Odzivnost

Odzivnost MQTT brokerjev je ključna za učinkovitost sistema. Mosquitto je običajno bolj odziven v manjših sistemih z manj naročniki in objavami, medtem ko EMQX bolje obvladuje večje obremenitve in ponuja stabilno odzivnost tudi pri večjem številu naročnikov in objav.

## Kako kot naročnik dobiti seznam vseh tem

V MQTT ni standardizirane metode za pridobivanje seznama vseh tem. Vendar pa lahko to dosežete na naslednje načine:

1. **Beležite teme v brokerju**: Broker lahko konfigurirate tako, da beleži vse uporabljene teme.
2. **Sistem za beleženje**: Uporabite zunanji sistem za beleženje vseh tem, ki jih uporabniki uporabljajo.

### Pridobivanje tem brez poznavanja imen

Če ne poznate imen tem, lahko uporabite splošno naročanje na vse teme z uporabo nadomestnih znakov:

- **# (hash)**: Naroči se na vse teme na določeni ravni.
  - Primer: `home/#` naroči se na vse podteme znotraj `home`.
  
- **+ (plus)**: Nadomesti eno raven v imenu teme.
  - Primer: `home/+/temperature` naroči se na vse teme, ki imajo `temperature` na koncu z eno ravnjo pred tem (npr. `home/livingroom/temperature`).

