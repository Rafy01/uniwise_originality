// main.tsx eller main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Originality from "./Pages/Originality/Originality";
import BlogPost from "./Pages/Blog/BlogPost";
import "./index.css";
import NotFound from "./Pages/NotFound/NotFound";

// Inject Klaviyo script
(function loadKlaviyoScript() {
  const script = document.createElement("script");
  script.src =
    "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=R6MMxy";
  script.async = true;
  document.head.appendChild(script);
})();



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/originality" element={<Originality />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
