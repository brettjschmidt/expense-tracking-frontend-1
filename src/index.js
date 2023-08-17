import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BalanceContextProvider } from "./context/BalanceContext";
import { AccountContextProvider } from "./context/AccountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AccountContextProvider>
            <BalanceContextProvider>
                <App />
            </BalanceContextProvider>
        </AccountContextProvider>
    </React.StrictMode>
);
