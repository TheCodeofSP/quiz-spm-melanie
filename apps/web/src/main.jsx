import React from "react";
import ReactDOM from "react-dom/client";

import { QuizProvider } from "./contexts/QuizContext.jsx";
import AppRouter from "./router/AppRouter.jsx";

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <AppRouter />
    </QuizProvider>
  </React.StrictMode>
);