import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
import AllProviders from "./context/AllProviders.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AllProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllProviders>
  </StrictMode>
);
