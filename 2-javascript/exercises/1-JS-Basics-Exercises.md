---
tags:
  - Javascript
  - exercises
  - mini-training
---

## Aufgabe 1: Variablen deklarieren und verwenden ⭐
Deklariere drei Variablen mit `let`, `const` und `var`. Weise ihnen unterschiedliche Werte zu und gebe sie in der Konsole aus.

**Erwartete Ausgabe:**
```
Variable1: ...
Variable2: ...
Variable3: ...
```

---

## Aufgabe 2: Bedingungen und Vergleichsoperatoren ⭐
Schreibe eine Funktion `istGroesser(a, b)`, die zwei Zahlen vergleicht und:
- "a ist größer" zurückgibt, wenn `a > b` ist.
- "b ist größer" zurückgibt, wenn `b > a` ist.
- "a und b sind gleich" zurückgibt, wenn beide gleich sind.

**Beispiel:**
```javascript
console.log(istGroesser(5, 3)); // "5 ist größer"
console.log(istGroesser(2, 8)); // "8 ist größer"
console.log(istGroesser(4, 4)); // "4 und 4 sind gleich"
```

---

## Aufgabe 3: Schleifen verwenden ⭐⭐
Schreibe ein Programm, das die Zahlen von 1 bis 10 mit einer `for`-Schleife ausgibt. Ergänze das Programm so, dass alle geraden Zahlen durch "gerade" und alle ungeraden Zahlen durch "ungerade" ersetzt werden.

**Erwartete Ausgabe:**
```
1: ungerade
2: gerade
3: ungerade
...
```

---

## Aufgabe 4: Wahrheitswerte (Truthy/Falsy) überprüfen ⭐
Schreibe eine Funktion `checkTruthy(value)`, die prüft, ob ein Wert "truthy" oder "falsy" ist, und die entsprechende Nachricht in der Konsole ausgibt.

**Beispiel:**
```javascript
checkTruthy(0); // "Falsy"
checkTruthy("Hello"); // "Truthy"
checkTruthy(null); // "Falsy"
```

---

## Aufgabe 5: Spread-Operator verwenden ⭐⭐
Schreibe eine Funktion `kombiniereArrays(arr1, arr2)`, die zwei Arrays kombiniert und zurückgibt. Verwende dazu den Spread-Operator.

**Beispiel:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(kombiniereArrays(arr1, arr2));
// [1, 2, 3, 4, 5, 6]
```

---

## Aufgabe 6: Template Literals und Funktionen ⭐⭐
Schreibe eine Funktion `begruesse(name, alter)`, die den Namen und das Alter einer Person akzeptiert und eine Begrüßung mit Template Literals zurückgibt.

**Beispiel:**
```javascript
console.log(begruesse("Alice", 30));
// "Hallo Alice, du bist 30 Jahre alt!"
```

---

## Aufgabe 7: Häufigster Buchstabe in einem String ⭐⭐⭐
Schreibe eine Funktion `findeHaeufigstenBuchstaben(text)`, die den häufigsten Buchstaben in einem String findet und zurückgibt. Ignoriere dabei Leerzeichen.

**Beispiel:**
```javascript
console.log(findeHaeufigstenBuchstaben("Das ist ein Test"));
// "t"
```

---

## Aufgabe 8: Anagramme überprüfen ⭐⭐⭐
Schreibe eine Funktion `sindAnagramme(str1, str2)`, die überprüft, ob zwei Strings Anagramme voneinander sind. Zwei Strings sind Anagramme, wenn sie dieselben Buchstaben in beliebiger Reihenfolge enthalten.

**Beispiel:**
```javascript
console.log(sindAnagramme("listen", "silent"));
// true
console.log(sindAnagramme("hello", "world"));
// false
console.log(sindAnagramme("rat", "tar"));
// true
```

