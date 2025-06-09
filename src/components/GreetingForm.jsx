import { useState } from "react";

function GreetingForm() {
  const [name, setName] = useState("");
  const [greeted, setGreeted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeted(true);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Hälsa</button>
      </form>

      {greeted && <p>Hej, {name}!</p>}
    </section>
  );
}

export default GreetingForm;
