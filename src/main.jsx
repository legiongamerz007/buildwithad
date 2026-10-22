import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProspectsIndex from "./pages/ProspectsIndex.jsx";
import ProspectLandingRoute from "./pages/ProspectLandingRoute.jsx";
import GiltlaneStudio from "./pages/giltlane/Studio.jsx";
import GiltlaneDeck from "./pages/giltlane/Deck.jsx";
import GiltlaneSizzle from "./pages/giltlane/Sizzle.jsx";
import GiltlaneOnePager from "./pages/giltlane/OnePager.jsx";
import GiltlaneWork from "./pages/giltlane/Work.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prospects" element={<ProspectsIndex />} />
        <Route path="/prospects/:slug" element={<ProspectLandingRoute />} />
        <Route path="/giltlane" element={<GiltlaneStudio />} />
        <Route path="/giltlane/" element={<GiltlaneStudio />} />
        <Route path="/giltlane/deck" element={<GiltlaneDeck />} />
        <Route path="/giltlane/deck/" element={<GiltlaneDeck />} />
        <Route path="/giltlane/sizzle" element={<GiltlaneSizzle />} />
        <Route path="/giltlane/sizzle/" element={<GiltlaneSizzle />} />
        <Route path="/giltlane/one-pager" element={<GiltlaneOnePager />} />
        <Route path="/giltlane/one-pager/" element={<GiltlaneOnePager />} />
        <Route path="/giltlane/work/education-crm" element={<GiltlaneWork />} />
        <Route path="/giltlane/work/education-crm/" element={<GiltlaneWork />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
