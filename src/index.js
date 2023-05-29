import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./core/App/App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./core/App/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./core/store";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./core/App/GlobalStyle";
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <GlobalStyle />
          <Normalize />
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
