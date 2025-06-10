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

Skapa en testfil som döps till clickedButton.cy.js i mappen e2e.
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

## Vanliga Cypress kommandon

Här är en lista med användbara Cypress-kommandon som du kan använda när du skriver dina E2E-tester.

#### 🏁 Start och navigation
```
cy.visit('http://localhost:5173')       // Besök en webbsida
```
```
cy.reload()                             // Ladda om sidan
```

#### 🔍 Hämta element
```
cy.get('button')                        // Hitta ett element med CSS-selektor
```
```
cy.get('[data-testid="todo-input"]')   // Hitta element med test-id
```
```
cy.contains('Köp mjölk')               // Hitta element som innehåller text
```

#### 👆 Interaktion
```
cy.get('input').type('Hej')            // Skriv text i ett inputfält
```
```
cy.get('button').click()               // Klicka på ett element
```
```
cy.get('input').clear()                // Töm ett inputfält
```
```
cy.get('select').select('Option')      // Välj ett alternativ i dropdown
```

#### ✅ Assertions (förväntningar)
```
cy.contains('Hej').should('exist')                   // Kontrollera att texten finns
```
```
cy.get('input').should('have.value', 'Hej')          // Kontrollera värde i input
```
```
cy.get('button').should('be.visible')                // Kontrollera att ett element är synligt
```
```
cy.get('.todo').should('have.length', 3)             // Kontrollera antal element
```
```
cy.get('.todo').first().should('contain', 'Kaffe')   // Kontrollera text i första item
```

#### 🔄 Hooks och struktur
```
beforeEach(() => {
  cy.visit('http://localhost:5173')    // Körs före varje test
})
```
```
describe('Todo-app', () => {
  it('ska lägga till en ny todo', () => {
    // testkod här
  })
})
```

#### 🛠️ Övrigt
```
cy.wait(1000)                          // Vänta 1 sekund (undvik om möjligt)
```
```
cy.viewport(375, 667)                 // Sätt fönsterstorlek (exempel: mobil)
```

