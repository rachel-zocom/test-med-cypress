## Installera Cypress
```
npm install cypress --save-dev
```
## Kör cypress (för att skapa mapparna)
```
npx cypress open
```
## Mappstruktur
Mappen cypress har undermappar för olika ändamål:

- fixtures – för testdata (t.ex. json).
- support – för gemensam konfiguration eller kommandon.

Skapa en ny mapp - döp den till e2e:
e2e – här skapar vi våra testfiler.

## Skapa en komponent
```
import { useState } from "react";

function ClickedButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <button onClick={() => setClicked(true)}>Klicka mig</button>
      {clicked && <p>Du klickade!</p>}
    </section>
  );
}

export default ClickedButton;
```
Vi har en enkel komponent där ett meddelande visas när användaren klickar på en knapp. Det är det vi ska testa med Cypress.

## Skapa en testfil
```
cypress/e2e/clickedButton.cy.js

describe("Knappinteraktion", () => {
  it("ska visa meddelande när knappen klickas", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").click();
    cy.contains("Du klickade!").should("be.visible");
  });
});
```
Vi använder cy.visit() för att ladda appen, 
cy.get() för att hitta knappen, 
.click() för att klicka, 
och cy.contains() för att kolla att meddelandet visas.

## Kör testet med Cypress 

1. starta dev-servern med 
```
npm run dev
```

2. Se till att Cypress är igång

3. Klicka på clickButton.cy.js i Cypress GUI

Cypress behöver att vår app är igång, så jag startar Vite med npm run dev.
Sedan klickar jag på testfilen i Cypress – och där ser vi testet köras i realtid!
