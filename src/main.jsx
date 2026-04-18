import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./i18n/index.js";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/layout.css";
import "./styles/utilities.css";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
