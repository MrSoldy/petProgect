import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./css/style.css";
import { App } from "./finalProject";
import { BrowserRouter } from "react-router-dom";

const app = ReactDOMClient.createRoot(document.querySelector("#app"));

app.render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
);

