import React from "react";
import ReactDOMClient from "react-dom/client";
import { Overview } from "./screens/Overview";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Overview />);
