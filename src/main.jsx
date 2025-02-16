import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use "react-dom/client" instead
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
