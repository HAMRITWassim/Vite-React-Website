import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import IndexApp from "./IndexApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexApp />
  </StrictMode>
);
