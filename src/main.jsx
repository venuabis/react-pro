import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Default import - rename
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

// Bootstrap (Start) React App
// Root Component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
