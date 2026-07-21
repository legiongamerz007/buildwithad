import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProspectsIndex from "./pages/ProspectsIndex.jsx";
import ProspectLandingRoute from "./pages/ProspectLandingRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prospects" element={<ProspectsIndex />} />
        <Route path="/prospects/:slug" element={<ProspectLandingRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
