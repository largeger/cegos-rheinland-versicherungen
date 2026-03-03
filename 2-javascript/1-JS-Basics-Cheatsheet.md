---
tags:
  - Javascript
  - mini-training
---
# Javascript Basics

### 1. **Datentypen**

| Typ          | Beschreibung                          |
| ------------ | ------------------------------------- |
| **Primitiv** |                                       |
| `String`     | Zeichenketten (z. B. `"Hallo"`)       |
| `Number`     | Zahlen (z. B. `42`, `3.14`)           |
| `Boolean`    | Wahrheitswerte (`true`, `false`)      |
| `Undefined`  | Variablen ohne Wert                   |
| `Null`       | Absenz eines Werts                    |
| `Symbol`     | Einzigartige und unveränderbare Werte |
| `BigInt`     | Große Zahlen (z. B. `123n`)           |
| **Objekte**  |                                       |
| Arrays       | `[1, 2, 3]`                           |
| Funktionen   |                                       |
| Objekte      | `{ key: value }`                      |

---
### 2. **Operatoren**

| Kategorie                    | Operator | Beschreibung                       |
| ---------------------------- | -------- | ---------------------------------- |
| **Arithmetische Operatoren** |          |                                    |
| Addition                     | `+`      | Addition von Zahlen                |
| Subtraktion                  | `-`      | Subtraktion von Zahlen             |
| Multiplikation               | `*`      | Multiplikation von Zahlen          |
| Division                     | `/`      | Division von Zahlen                |
| Modulo                       | `%`      | Rest einer Division                |
| Exponentiation               | `**`     | Potenzierung                       |
| **Vergleichsoperatoren**     |          |                                    |
| Gleich                       | `==`     | Vergleich auf Gleichheit           |
| Strikt gleich                | `===`    | Vergleich auf strikte Gleichheit   |
| Ungleich                     | `!=`     | Vergleich auf Ungleichheit         |
| Strikt ungleich              | `!==`    | Vergleich auf strikte Ungleichheit |
| Größer                       | `>`      | Vergleich, ob größer               |
| Kleiner                      | `<`      | Vergleich, ob kleiner              |
| Größer oder gleich           | `>=`     | Vergleich, ob größer oder gleich   |
| Kleiner oder gleich          | `<=`     | Vergleich, ob kleiner oder gleich  |
| **Logische Operatoren**      |          |                                    |
| UND                          | `&&`     | Logisches UND                      |
| ODER                         | `\|\|`   |                                    |
| NICHT                        | `!`      | Logisches NICHT                    |
| **Zuweisungsoperatoren**     |          |                                    |
| Einfach                      | `=`      | Zuweisung                          |
| Addieren und zuweisen        | `+=`     | Addition und Zuweisung             |
| Subtrahieren und zuweisen    | `-=`     | Subtraktion und Zuweisung          |
| Multiplizieren und zuweisen  | `*=`     | Multiplikation und Zuweisung       |
| Dividieren und zuweisen      | `/=`     | Division und Zuweisung             |

---
### 3. **Kontrollstrukturen**

- **Bedingungen**:

    ```javascript
    if (Bedingung) {
      // Code, wenn Bedingung wahr ist
    } else if (andereBedingung) {
      // Code, wenn andere Bedingung wahr ist
    } else {
      // Code, wenn keine Bedingung wahr ist
    }
    ```

- **Switch-Case**:
   
    ```javascript
    switch (Ausdruck) {
      case Wert1:
        // Code
        break;
      case Wert2:
        // Code
        break;
      default:
        // Code
    }
    ```

- **Schleifen**:
    - `for`:

        ```javascript
        for (let i = 0; i < 10; i++) {
          console.log(i);
        }
        ```
        
    - `while`:
        
        ```javascript
        while (Bedingung) {
          // Code
        }
        ```
        
    - `do-while`:
        
        ```javascript
        do {
          // Code
        } while (Bedingung);
        ```
        
    - `for...of` (Iterieren über Arrays):
        
        ```javascript
        for (const element of array) {
          console.log(element);
        }
        ```
        
    - `for...in` (Iterieren über Objekte):
        
        ```javascript
        for (const key in objekt) {
          console.log(key, objekt[key]);
        }
        ```
        

---
### 4. **Input & Output**

- **Konsole**:
    - Ausgabe: `console.log("Text", Variable);`
    - Warnung: `console.warn("Warnung!");`
    - Fehler: `console.error("Fehler!");`
- **Eingabe**:
    - über `prompt` (nicht in allen Browsern empfohlen):
        
        ```javascript
        const name = prompt("Wie heißen Sie?");
        ```
        
    - über HTML-Eingabeelemente (z. B. `<input>`; nicht Teil dieses Cheatsheets)

---
### 5. **Wichtige Elemente & Besonderheiten**

- **Variablendeklaration**:
    - `let`: Block-skopierte, änderbare Variable
    - `const`: Block-skopierte, unveränderbare Variable
    - `var`: Funktion-skopierte, änderbare Variable (veraltet)
- **Funktionen**:
    - Deklaration:
        
        ```javascript
        function addiere(a, b) {
          return a + b;
        }
        ```
        
    - Anonyme Funktion:
        
        ```javascript
        const multiplizieren = function (a, b) {
          return a * b;
        };
        ```
        
    - Arrow Function:
        
        ```javascript
        const subtrahiere = (a, b) => a - b;
        ```
        
- **Template Literals**:
    
    ```javascript
    const name = "Alice";
    console.log(`Hallo, ${name}!`);
    ```
    
- **Truthy und Falsy Werte**:
    - **Truthy**: Werte, die als `true` gelten (z. B. Zahlen ungleich 0, nicht-leere Strings)
    - **Falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- **Spread- und Reduce-Operator**:
    - Spread: Arrays oder Objekte "entpacken":
        
        ```javascript
        const zahlen = [1, 2, 3];
        console.log(...zahlen); // 1 2 3
        ```
        
    - Reduce: Sammeln von Argumenten:
        
        ```javascript
        function summe(...zahlen) {
          return zahlen.reduce((a, b) => a + b);
        }
        ```
        

---

