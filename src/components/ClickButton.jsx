// src/App.jsx
// Importerar useState-hooken från React för att kunna hantera komponentens tillstånd
import { useState } from "react";

// Definierar en funktionell komponent som heter ClickButton
function ClickButton() {
  // Skapar ett tillstånd 'clicked' med initialvärdet false.
  // 'setClicked' är funktionen som används för att uppdatera tillståndet.
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      {/* En knapp som, när den klickas, sätter clicked till true */}
      <button onClick={() => setClicked(true)}>Klicka mig</button>

      {/* Om clicked är true, visas meddelandet "Du klickade!" */}
      {clicked && <p>Du klickade!</p>}
    </section>
  );
}

// Exporterar komponenten så att den kan användas i andra filer, t.ex. main.jsx
export default ClickButton;
