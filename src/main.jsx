import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages";
import "./index.css";
import "./i18n";

// as HTMLElement

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
