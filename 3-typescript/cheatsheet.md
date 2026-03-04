# Tag 3: TypeScript & Typensicherheit - Umfassendes Skript

Heute heben wir JavaScript auf das nächste Level. TypeScript ist eine Erweiterung von JavaScript (Superset), die uns hilft, sichereren und fehlerfreieren Code zu schreiben.

## 1. Das Problem mit JavaScript (Dynamische Typisierung)

In JavaScript kannst du einer Variable eine Zahl zuweisen und im nächsten Moment einen Text. Das führt oft zu Fehlern, die man erst merkt, wenn die App beim Benutzer abstürzt.

```javascript
// JavaScript Risiko
let total = 100;
total = "Fehler"; // Kein Problem für JS
console.log(total / 2); // Ergebnis: NaN (Not a Number)
```

TypeScript verhindert das:
```typescript
let total: number = 100;
total = "Fehler"; // ERROR: Type 'string' is not assignable to type 'number'.
```

---

## 2. Kernkonzepte von TypeScript

### 2.1 Typ-Anmerkungen (Type Annotations)
Wir können Variablen, Funktionsparametern und Rückgabewerten explizite Typen geben.

```typescript
const name: string = "Max";
const age: number = 30;
const isTutor: boolean = true;

function greet(userName: string): string {
    return `Hallo ${userName}`;
}
```

### 2.2 Interfaces (Schnittstellen)
Ein Interface ist ein Vertrag. Wenn ein Objekt ein Interface implementiert, *muss* es genau die definierten Felder haben. Das ist perfekt für Datenobjekte (z.B. User, Produkte, To-Dos).

```typescript
interface User {
    id: number;
    username: string;
    email: string;
    isAdmin?: boolean; // Das Fragezeichen markiert ein optionales Feld
}

const admin: User = {
    id: 1,
    username: "Admin1",
    email: "admin@test.com"
};
```

### 2.3 Generics
Generics erlauben es uns, flexiblen Code zu schreiben, der mit verschiedenen Typen funktioniert, aber trotzdem sicher bleibt. Denke an einen Container, der weiß, was in ihm ist.

```typescript
// Eine Funktion, die das erste Element eines Arrays zurückgibt, egal welchen Typs
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstNum = getFirst<number>([1, 2, 3]);
const firstStr = getFirst<string>(["a", "b", "c"]);
```

---

## 3. Einrichten von TypeScript

TypeScript kann vom Browser nicht direkt gelesen werden. Es muss in JavaScript umgewandelt (transpiliert) werden.

1. **Installation**: `npm install -g typescript`
2. **Initialisierung**: `tsc --init` (erstellt eine `tsconfig.json`)
3. **Kompilieren**: `tsc app.ts` erzeugt eine `app.js`

---

## 4. Praxis: To-Do Logik mit TypeScript

Im heutigen Beispiel haben wir die Logik für eine To-Do Liste gebaut.

- Wir nutzen ein `interface Todo`, um die Struktur festzulegen.
- Wir nutzen ein Array von Todos: `let todos: Todo[] = []`.
- Jede Funktion hat klare Typvorgaben, sodass wir nie versehentlich falsche Daten in unsere Liste speichern.

```typescript
interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const todos: Todo[] = [];

const addTodo = (text: string): void => {
    const newTodo: Todo = {
        id: Date.now(),
        task: text,
        completed: false
    };
    todos.push(newTodo);
};
```

---

## 5. Tipps für den Umstieg

- **Vermeide `any`**: Der Typ `any` schaltet TypeScript praktisch aus. Nutze ihn nur im absoluten Notfall.
- **Nutze Type Inference**: TypeScript ist schlau. Wenn du `let x = 5` schreibst, weiß TS automatisch, dass es eine `number` ist. Du musst nicht alles explizit hinschreiben.
- **Strict Mode**: Aktiviere `"strict": true` in deiner `tsconfig.json` für maximale Sicherheit.
