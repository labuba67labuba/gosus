import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SmsVerification from "./SmsVerification.tsx";
import { closeDriver } from "./utils/api";

// Закрытие драйвера при уходе со страницы
window.addEventListener("pagehide", closeDriver);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sms" element={<SmsVerification />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
