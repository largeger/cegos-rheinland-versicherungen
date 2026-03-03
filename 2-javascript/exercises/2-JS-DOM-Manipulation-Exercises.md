---
tags:
  - Javascript
  - mini-training
---
# Aufgaben zur DOM-Manipulation

## Aufgabe 1: Zufällige Hintergrundfarbe ⭐
### Beschreibung:
Erstelle eine Webseite mit einem Button. Bei jedem Klick auf den Button soll der Hintergrund der gesamten Seite zufällig geändert werden.

### Anforderungen:
- Nutze `Math.random()`, um eine zufällige Farbe zu generieren.
- Ändere den `style` des `body`-Elements.

---

## Aufgabe 2: To-Do-Liste mit Checkboxen ⭐
### Beschreibung:
Erstelle eine Webseite mit einem Eingabefeld, einem Button und einer Liste. Beim Klick auf den Button soll eine neue Aufgabe mit einer Checkbox zur Liste hinzugefügt werden. Beim Aktivieren der Checkbox soll die Aufgabe durchgestrichen dargestellt werden.

### Anforderungen:
- Nutze `createElement` und `appendChild`, um neue Aufgaben hinzuzufügen.
- Verändere den Stil der Aufgabe basierend auf dem Status der Checkbox.

---

## Aufgabe 3: Live-Zeitanzeige ⭐⭐
### Beschreibung:
Erstelle eine Webseite, die eine Uhrzeit in Echtzeit anzeigt und jede Sekunde aktualisiert.

### Anforderungen:
- Nutze `setInterval`, um die Uhrzeit zu aktualisieren.
- Greife auf ein bestehendes `span`-Element zu und aktualisiere dessen Inhalt.

---

## Aufgabe 4: Drag-and-Drop-Funktion ⭐⭐
### Beschreibung:
Erstelle eine Webseite mit zwei Bereichen. Der erste Bereich enthält mehrere Boxen, die per Drag-and-Drop in den zweiten Bereich verschoben werden können.

### Anforderungen:
- Nutze die Drag-and-Drop-API (`dragstart`, `dragover`, `drop`).
- Ermögliche das Verschieben von Boxen zwischen den Bereichen.

---

## Aufgabe 5: Interaktive Bildergalerie mit Beschriftung ⭐⭐⭐
### Beschreibung:
Erstelle eine Bildergalerie mit Miniaturansichten. Wenn auf eine Miniaturansicht geklickt wird, soll das Bild in einer größeren Ansicht angezeigt werden, zusammen mit einer dynamischen Beschriftung.

### Anforderungen:
- Nutze Event Listener, um Klicks auf Miniaturansichten zu erkennen.
- Ändere das `src`-Attribut eines größeren Bildes basierend auf der Miniatur.
- Passe den Text einer Beschriftung dynamisch an.

---

## Aufgabe 6: Dynamisches Formular mit Validierung ⭐⭐⭐
### Beschreibung:
Erstelle ein Formular, bei dem dynamisch Eingabefelder hinzugefügt werden können. Jedes Feld soll überprüft werden (z. B. ob es leer ist), bevor das Formular abgeschickt werden kann.

### Anforderungen:
- Nutze `addEventListener` für die Validierung beim Abschicken des Formulars.
- Füge neue Eingabefelder mit `createElement` und `appendChild` hinzu.
- Zeige Fehlermeldungen an, falls ein Feld nicht korrekt ausgefüllt ist.
