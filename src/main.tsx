import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <HashRouter>
        <App />
      </HashRouter>
    </StyledEngineProvider>
  </StrictMode>
);
