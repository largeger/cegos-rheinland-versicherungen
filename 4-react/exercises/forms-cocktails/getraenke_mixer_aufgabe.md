# 🍹 Getränke-Mixer mit Cocktailkarte

## 🔍 Ziel der Übung
Du entwickelst eine interaktive React-Anwendung, mit der Benutzer:innen Zutaten auswählen und ihre eigenen Cocktails zusammenstellen können. 
Die App zeigt eine Vorschau des aktuellen Cocktails und eine bunte Cocktailkarte mit gespeicherten Mischungen.

## 🏋️ Aufgabenbeschreibung

### ✅ 1. Komponentenstruktur
Erstelle folgende React-Komponenten:

- **App**: Elternkomponente, verwaltet zentral den Zustand
- **IngredientSelector**: Zeigt Buttons für verfügbare Zutaten
- **CocktailPreview**: Zeigt aktuelle Zutaten als "Cocktailvorschau"
- **CocktailList**: Zeigt alle gespeicherten Cocktails

### 🔄 2. Datenfluss und Zustandsverwaltung
- Der Zustand `selectedIngredients` liegt in der `App`-Komponente
- Kinderkomponenten dürfen Zutaten hinzufügen (z. B. durch Button-Klicks)
- Die `App` verwaltet außerdem eine Liste gespeicherter Cocktails (`cocktails`)

### 💪 3. Funktionalitäten
- Zutaten durch Klick auswählen (z. B. Cola, Rum, Eis, Limette, Orangensaft)
- Die Vorschau zeigt eine visuelle Darstellung der aktuellen Mischung
- Button "Cocktail speichern" fügt aktuelle Mischung zur Cocktailkarte hinzu
- Jede gespeicherte Mischung erscheint in der Cocktailkarte mit Namen und Vorschau

### 🎭 4. Gestaltungsidee (CSS)
- Jede Zutat erhält eine eigene Farbe (z. B. Cola = braun, Eis = blau)
- Die Vorschau kann gestapelte bunte Layer darstellen ("geschichteter Cocktail")
- Bonus: einfache Animationen, Hovern, interaktive Karten

### 🌟 5. Bonus (optional)
- Entfernen von Zutaten
- Eingabefeld zum Benennen eigener Cocktails
- "Zufallsmix"-Button
- Speicherung im `localStorage`
- Filter oder Suche innerhalb der Cocktailkarte

## ✉️ Hinweise
- Nutze `useState` und Props zur Kommunikation
- Achte auf Wiederverwendbarkeit deiner Komponenten
- Style kreativ, damit jede Mischung optisch einzigartig wirkt

---
**Viel Spaß beim Mixen!**

