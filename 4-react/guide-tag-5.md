# Tag 5: Projektentwicklung & Integration - Umfassendes Skript

Am letzten Tag führen wir alles zusammen. Wir bauen nicht nur isolierte Komponenten, sondern eine strukturierte Anwendung und bereiten sie für die Veröffentlichung vor.

## 1. Professionelle Projektstruktur

In echten Projekten reicht es nicht, alle Dateien in den `src`-Ordner zu legen. Eine klare Struktur hilft bei der Skalierbarkeit.

### Empfohlener Aufbau:
- `src/components/`: Wiederverwendbare UI-Elemente (Button, Card, Navbar).
- `src/features/`: Spezifische Anwendungsbereiche (z.B. `TodoApp/`, `UserProfile/`).
- `src/hooks/`: Eigene Custom-Hooks (für Logik-Kapselung).
- `src/types/`: Zentrale Definition von TypeScript-Interfaces.
- `src/services/`: Logik für API-Abfragen (z.B. axios-Instanzen).
- `src/assets/`: Statische Dateien wie Bilder, SVGs oder globale CSS-Variablen.

---

## 2. Fortgeschrittenes State Management

Wenn die Anwendung wächst, wird das Weiterreichen von Props ("Prop Drilling") mühsam.

### 2.1 Der `useContext` Hook
Mit Context können wir Daten global zur Verfügung stellen, ohne sie durch jede Zwischenkomponente reichen zu müssen. Typische Anwendungsfälle:
- Authentifizierungs-Status (Logged In User)
- Theme (Dark/Light Mode)
- Spracheinstellungen (i18n)

```tsx
// Beispiel für ThemeContext
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MainComponent />
    </ThemeContext.Provider>
  );
}
```

### 2.2 Wann braucht man Redux/Zustand?
Für sehr komplexe, hochfrequente Zustandsänderungen oder wenn viele verschiedene Teile der App denselben State manipulieren müssen. In kleinen bis mittleren Projekten reicht `useContext` oft völlig aus.

---

## 3. Best Practices & Performance

- **Memoization**: Nutze `useMemo` und `useCallback`, um unnötige Berechnungen oder Re-Renders zu vermeiden.
- **Code Splitting**: Lade Teile deiner App erst dann, wenn sie wirklich gebraucht werden (mit `React.lazy` und `Suspense`).
- **Custom Hooks**: Wenn du merkst, dass du dieselbe Logik (z.B. ein Formular-Handling) in zwei Komponenten schreibst -> Extrahiere sie in einen Custom Hook!

```tsx
// Beispiel Custom Hook
function useLocalStorage(key: string) {
  const [value, setValue] = useState(localStorage.getItem(key));
  // ... Logik zum Speichern ...
  return [value, setValue];
}
```

---

## 4. Deployment (Die App live bringen)

Deine React-App muss vor dem Deployment "gebaut" werden.

1. **Build-Prozess**: `npm run build`
   Vite erstellt einen `dist/`-Ordner. Dieser enthält hochgradig optimiertes JavaScript, CSS und HTML.
2. **Hosting-Anbieter**:
   - **Vercel / Netlify**: Ideal für React-Apps. Einfach mit GitHub verknüpfen, der Rest passiert automatisch.
   - **Statische Server**: Da eine React-App im Browser läuft, reicht jeder einfache Webserver (Apache, Nginx).

---

## 5. Ressourcen zum Weiterlernen

Die Webentwicklung steht nie still. Hier sind die besten Anlaufstellen:
- **[React.dev](https://react.dev/)**: Die neue, exzellente offizielle Dokumentation.
- **[TypeScript Handbuch](https://www.typescriptlang.org/docs/)**: Tiefere Einblicke in Typ-Magie.
- **[Testing Library](https://testing-library.com/)**: Lerne, wie man Komponenten richtig testet.
