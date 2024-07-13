import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const app = document.getElementById("app")
const root = createRoot(app)
root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>

)