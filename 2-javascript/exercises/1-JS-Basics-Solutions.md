---
tags:
  - Javascript
  - exercises
  - mini-training
---

## Lösung 1: Variablen deklarieren und verwenden
```javascript
let variable1 = "Hallo";
const variable2 = 42;
var variable3 = true;

console.log("Variable1:", variable1);
console.log("Variable2:", variable2);
console.log("Variable3:", variable3);
```

---

## Lösung 2: Bedingungen und Vergleichsoperatoren
```javascript
function istGroesser(a, b) {
  if (a > b) {
    return "a ist größer";
  } else if (b > a) {
    return "b ist größer";
  } else {
    return "a und b sind gleich";
  }
}

console.log(istGroesser(5, 3)); // "a ist größer"
console.log(istGroesser(2, 8)); // "b ist größer"
console.log(istGroesser(4, 4)); // "a und b sind gleich"
```

---

## Lösung 3: Schleifen verwenden
```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i}: gerade`);
  } else {
    console.log(`${i}: ungerade`);
  }
}
```

---

## Lösung 4: Wahrheitswerte (Truthy/Falsy) überprüfen
```javascript
function checkTruthy(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checkTruthy(0); // "Falsy"
checkTruthy("Hello"); // "Truthy"
checkTruthy(null); // "Falsy"
```

---

## Lösung 5: Spread-Operator verwenden
```javascript
function kombiniereArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(kombiniereArrays(arr1, arr2));
// [1, 2, 3, 4, 5, 6]
```

---

## Lösung 6: Template Literals und Funktionen
```javascript
function begruesse(name, alter) {
  return `Hallo ${name}, du bist ${alter} Jahre alt!`;
}

console.log(begruesse("Alice", 30));
// "Hallo Alice, du bist 30 Jahre alt!"
```

---

## Lösung 7: Häufigster Buchstabe in einem String finden
```javascript
function findeHaeufigstenBuchstaben(text) {
  const buchstabenZaehler = {};
  for (const buchstabe of text) {
    if (buchstabe !== ' ') {
      buchstabenZaehler[buchstabe] = (buchstabenZaehler[buchstabe] || 0) + 1;
    }
  }

  let haeufigsterBuchstabe = null;
  let maxAnzahl = 0;

  for (const [buchstabe, anzahl] of Object.entries(buchstabenZaehler)) {
    if (anzahl > maxAnzahl) {
      haeufigsterBuchstabe = buchstabe;
      maxAnzahl = anzahl;
    }
  }

  return haeufigsterBuchstabe;
}

console.log(findeHaeufigstenBuchstaben("Das ist ein Test"));
// "t"
```

---

## Lösung 8: Anagramme überprüfen
```javascript
function sindAnagramme(str1, str2) {
  const sortiereString = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return sortiereString(str1) === sortiereString(str2);
}

console.log(sindAnagramme("listen", "silent"));
// true
console.log(sindAnagramme("hello", "world"));
// false
console.log(sindAnagramme("rat", "tar"));
// true
```

---
