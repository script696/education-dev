import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { App } from "@app/App";
import "@shared/config/i18n/i18n";

render(
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
