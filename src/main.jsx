import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Initialize EmailJS
import emailjs from "@emailjs/browser";
emailjs.init("Ymm-HpQyACrzE_piL");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
