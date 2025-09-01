import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import MangaApp from "./MangaApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MangaApp />
  </StrictMode>
);
