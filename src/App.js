
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>📚 MathTutor</h1>
      <p>Belajar matematika dari dasar sampai kalkulus!</p>
      <p>Mulai dari aritmatika, aljabar, trigonometri, hingga kalkulus.</p>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
