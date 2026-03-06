# Tag 4: React-Grundlagen & Komponenten - Umfassendes Skript

Willkommen in der Welt von React! Heute lernen wir, wie wir moderne, komponentenbasierte Webanwendungen bauen. Wir nutzen React in Kombination mit TypeScript für maximale Sicherheit.

## 1. Was ist React?

React ist eine Bibliothek zum Bauen von Benutzeroberflächen. Im Gegensatz zum klassischen JS-Ansatz (DOM manuell manipulieren) sagen wir React in einem "deklarativen" Stil, wie die UI aussehen soll. React kümmert sich effizient um die Aktualisierung des DOMs (über den **Virtual DOM**).

### 1.1 Projekt-Setup mit Vite
Wir nutzen Vite als modernen Nachfolger der alten `create-react-app`. Es ist blitzschnell und bietet eine tolle Entwicklererfahrung.

- **Starten**: `npm run dev`
- **Build**: `npm run build`

---

## 2. Komponenten und JSX

Komponenten sind die Bausteine einer React-App. Eine Komponente ist eine Funktion, die **JSX** (JavaScript XML) zurückgibt.

### 2.1 JSX-Regeln
- Komponenten-Namen müssen groß geschrieben werden (z.B. `App`, `Header`).
- Es darf nur *ein* Wurzelelement zurückgegeben werden (oder ein Fragment: `<> ... </>`).
- JavaScript-Ausdrücke werden in geschweiften Klammern `{}` geschrieben.

```tsx
function Welcome() {
    const name = "Schüler";
    return (
        <div>
            <h1>Hallo, {name}!</h1>
            <p>Willkommen bei React.</p>
        </div>
    );
}
```

### 2.2 Props (Properties)
Props sind Argumente, die man einer Komponente von außen übergibt. Sie sind "read-only".

```tsx
interface ButtonProps {
    label: string;
    color: string;
}

const MyButton: React.FC<ButtonProps> = ({ label, color }) => {
    return <button style={{ backgroundColor: color }}>{label}</button>;
};
```

---

## 3. State-Management mit Hooks

Hooks sind spezielle Funktionen, mit denen man sich in die React-Features "einhaken" kann.

### 3.1 `useState`
State ist das "Gedächtnis" einer Komponente. Wenn sich der State ändert, rendert React die Komponente neu.

```tsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>Du hast {count} Mal geklickt</p>
            <button onClick={() => setCount(count + 1)}>Klick mich</button>
        </div>
    );
}
```

### 3.2 `useEffect`
Mit `useEffect` führen wir Seiteneffekte aus (z.B. API-Aufrufe, Timer).

- **Ohne Dependency Array**: Läuft bei *jedem* Rendern.
- **Leeres Array `[]`**: Läuft nur *einmal* beim Laden (Mounting).
- **Mit Werten `[count]`**: Läuft jedes Mal, wenn sich `count` ändert.

```tsx
useEffect(() => {
    console.log("Die Komponente wurde geladen.");
}, []);
```

---

## 4. Listen und Keys

Wenn wir Listen rendern (z.B. aus einem Array), müssen wir jedem Element einen eindeutigen `key` geben, damit React weiß, welches Element sich geändert hat.

```tsx
const items = ["Brot", "Milch", "Eier"];

return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);
```

---

## 5. Tipps für heute

- **Komponenten klein halten**: Eine Komponente sollte idealerweise nur eine Sache tun.
- **Vermeide direkten DOM-Zugriff**: Nutze State statt `document.getElementById`.
- **Typen für Props**: Nutze immer Interfaces für deine Props, um Fehler zu vermeiden.
