import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EditContexProvider } from "./Contex/Editcontex.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <EditContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EditContexProvider>
);
