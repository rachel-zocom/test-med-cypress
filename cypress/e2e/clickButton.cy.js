/* eslint-disable no-undef */
/* eslint-env cypress */

// Testsvit med beskrivningen "Knappinteraktion"
describe("Knappinteraktion", () => {
  // Enskilt test med beskrivningen "ska visa meddelande när knappen klickas"
  it("ska visa meddelande när knappen klickas", () => {
    // Besök webbsidan som körs lokalt (du måste ha servern igång på port 5173)
    cy.visit("http://localhost:5173");

    // Hitta en knapp på sidan och klicka på den
    cy.get("button").click();

    // Kontrollera att ett element med texten "Du klickade!" visas på sidan
    cy.contains("Du klickade!").should("be.visible");
  });
});
