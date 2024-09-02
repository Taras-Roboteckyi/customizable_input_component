import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App";

import { Constants } from "./constans/Constans";
import { GlobalStyles } from "./GlobalStyle.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Constants}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
