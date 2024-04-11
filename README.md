# Katalog kolekcji filmów

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Funkcjonalności](#funkcjonalności)
3. [Instrukcje obsługi](#instrukcje-obsługi)
---


## 1. Opis projektu
Projekt "Katalog kolekcji filmów" to aplikacja webowa stworzona w architekturze MVC, która pozwala użytkownikom na przeglądanie i zarządzanie kolekcją swoich ulubionych filmów. Użytkownicy mogą dodawać nowe filmy, oznaczać je jako obejrzane oraz dodawać recenzje.


## 2. Funkcjonalności
### 2.1. Przeglądanie filmów
- Lista filmów w tablicy
- Wyświetlanie informacji o filmie
### 2.2. Dodawanie nowych filmów
- Formularz dodawania nowego filmu
### 2.3. Edycja i usuwanie filmów
- Edycja informacji o filmie
- Usuwanie filmu z tablicy
### 2.4. Oznaczanie filmów jako obejrzane
- Możliwość oznaczenia filmu jako obejrzany
### 2.5. Dodawanie recenzji
- Formularz dodawania recenzji do filmu
### 2.6. Ocena filmu
- Ocena filmu w skali od 1 do 10 za pomocą gwiazdek


## 3. Instrukcje obsługi
### 3.1. Instalacja i uruchomienie aplikacji
Aby uruchomić aplikację, należy zainstalować dodatkowe paczki:
```bash
npm install express ejs body-parser @fortawesome/fontawesome-free --save
```
Po zainstalowaniu paczek, uruchom aplikację za pomocą polecenia:
```bash
node app.js
```
Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

---

