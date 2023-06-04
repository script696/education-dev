import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "./theme/ThemeProvider";

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
