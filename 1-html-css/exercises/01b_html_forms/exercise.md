# 📝 Übung: Formulare in HTML

Formulare sind das Herzstück der Interaktion im Web. Ob Login, Newsletter oder Kontaktformular – ohne Formulare gäbe es kein interaktives Internet.

## Aufgabe: Das Anmeldeformular

Erstellen Sie ein neues HTML-Dokument `formular.html` (oder erweitern Sie Ihre Landingpage) um ein Registrierungsformular für Ihr Produkt.

### Anforderungen

- Verwenden Sie das `<form>`-Tag als Container.
- Erstellen Sie Eingabefelder für:
    - **Name** (Typ `text`)
    - **E-Mail** (Typ `email`)
    - **Passwort** (Typ `password`)
    - **Newsletter-Abo** (Typ `checkbox`)
    - **Geschlecht** (Typ `radio`)
    - **Lieblingsfarbe** (Typ `color` - zum Experimentieren!)
- Nutzen Sie das `<label>`-Tag für jedes Eingabefeld (wichtig für Barrierefreiheit!).
- Fügen Sie einen Absende-Button (`<button type="submit">`) hinzu.

### Für Neugierige

- **Validierung:** Nutzen Sie Attribute wie `required`, `minlength` oder `maxlength`, um das Formular direkt im Browser zu validieren.
- **Platzhalter:** Verwenden Sie das `placeholder`-Attribut, um Hinweise in den Textfeldern anzuzeigen.
- **Dropdown:** Erstellen Sie ein `<select>`-Menü mit verschiedenen `<option>`-Einträgen.

---

**Hinweis:** Ein Formular sendet normalerweise Daten an einen Server. Da wir noch kein Backend haben, wird nach dem Klick auf "Senden" die Seite einfach neu geladen (oder eine Fehlermeldung erscheinen, wenn kein `action`-Attribut gesetzt ist). Das ist für diese Übung völlig okay!
