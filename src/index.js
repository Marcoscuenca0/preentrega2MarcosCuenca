import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootRender = root?.hasChildNodes() ? createRoot(root, { hydrate: true }) : createRoot(root);
rootRender.render(rootElement);
reportWebVitals();