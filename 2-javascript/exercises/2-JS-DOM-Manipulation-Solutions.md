---
tags:
  - Javascript
  - mini-training
---

# Lösungen zu den Aufgaben zur DOM-Manipulation

## Aufgabe 1: Zufällige Hintergrundfarbe ⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zufällige Hintergrundfarbe</title>
</head>
<body>
  <button id="colorButton">Farbe ändern</button>

  <script>
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
    });
  </script>
</body>
</html>
```

---

## Aufgabe 2: To-Do-Liste mit Checkboxen ⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do-Liste</title>
</head>
<body>
  <input id="taskInput" type="text" placeholder="Neue Aufgabe">
  <button id="addTaskButton">Hinzufügen</button>
  <ul id="taskList"></ul>

  <script>
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(document.createTextNode(taskText));
      taskList.appendChild(listItem);

      taskInput.value = '';
    });
  </script>
</body>
</html>
```

---

## Aufgabe 3: Live-Zeitanzeige ⭐⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live-Zeitanzeige</title>
</head>
<body>
  <p>Aktuelle Uhrzeit: <span id="clock"></span></p>

  <script>
    const clock = document.getElementById('clock');

    function updateClock() {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();
  </script>
</body>
</html>
```

---

## Aufgabe 4: Drag-and-Drop-Funktion ⭐⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag-and-Drop</title>
  <style>
    .box { width: 100px; height: 100px; margin: 10px; background-color: lightblue; display: inline-block; }
    .dropzone { width: 300px; height: 300px; border: 2px dashed gray; display: inline-block; vertical-align: top; }
  </style>
</head>
<body>
  <div id="source">
    <div class="box" draggable="true">Box 1</div>
    <div class="box" draggable="true">Box 2</div>
  </div>
  <div id="target" class="dropzone"></div>

  <script>
    const boxes = document.querySelectorAll('.box');
    const dropzone = document.getElementById('target');

    boxes.forEach(box => {
      box.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
        event.dataTransfer.effectAllowed = 'move';
      });
    });

    dropzone.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    });

    dropzone.addEventListener('drop', (event) => {
      event.preventDefault();
      const draggedBox = document.querySelector(`#${event.dataTransfer.getData('text')}`);
      dropzone.appendChild(draggedBox);
    });
  </script>
</body>
</html>
```

---

## Aufgabe 5: Interaktive Bildergalerie mit Beschriftung ⭐⭐⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bildergalerie</title>
</head>
<body>
  <div>
    <img id="mainImage" src="" alt="Hauptbild" style="width: 300px; height: auto;">
    <p id="caption">Bildbeschreibung</p>
  </div>
  <div>
    <img src="image1.jpg" alt="Bild 1" class="thumbnail" style="width: 100px;">
    <img src="image2.jpg" alt="Bild 2" class="thumbnail" style="width: 100px;">
  </div>

  <script>
    const mainImage = document.getElementById('mainImage');
    const caption = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        caption.textContent = thumbnail.alt;
      });
    });
  </script>
</body>
</html>
```

---

## Aufgabe 6: Dynamisches Formular mit Validierung ⭐⭐⭐
### Lösung:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamisches Formular</title>
</head>
<body>
  <form id="dynamicForm">
    <button type="button" id="addField">Feld hinzufügen</button>
    <button type="submit">Abschicken</button>
    <div id="fields"></div>
  </form>
  <p id="error" style="color: red;"></p>

  <script>
    const form = document.getElementById('dynamicForm');
    const fields = document.getElementById('fields');
    const error = document.getElementById('error');
    const addFieldButton = document.getElementById('addField');

    addFieldButton.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'text';
      fields.appendChild(input);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      error.textContent = '';
      const inputs = fields.querySelectorAll('input');

      for (const input of inputs) {
        if (input.value.trim() === '') {
          error.textContent = 'Alle Felder müssen ausgefüllt sein!';
          return;
        }
      }

      alert('Formular erfolgreich abgeschickt!');
    });
  </script>
</body>
</html>
