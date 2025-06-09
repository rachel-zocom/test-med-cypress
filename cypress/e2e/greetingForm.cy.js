/* eslint-disable no-undef */
/* eslint-env cypress */

describe("GreetingForm", () => {
  it("ska visa hälsning efter att namn skrivits in och formuläret skickats", () => {
    cy.visit("http://localhost:5173");

    // Skriv ett namn i inputfältet
    cy.get('input[placeholder="Skriv ditt namn"]').type("Alice");

    // Klicka på knappen
    cy.get("button").contains("Hälsa").click();

    // Kontrollera att hälsningen visas
    cy.contains("Hej, Alice!").should("be.visible");
  });
});
