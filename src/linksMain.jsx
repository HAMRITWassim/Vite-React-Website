import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import LinksApp from "./LinksApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LinksApp />
  </StrictMode>
);
