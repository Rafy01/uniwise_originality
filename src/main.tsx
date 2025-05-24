// import React from "react";
// import ReactDOM from "react-dom/client";
// import Originality from "./Pages/Originality/Originality";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Originality />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Originality from "./Pages/Originality/Originality";
import BlogPost from "./Pages/Blog/BlogPost"; // 👈 vigtigt!
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/originality" element={<Originality />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
