import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)