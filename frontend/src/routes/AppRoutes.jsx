import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PerformanceMarketing from "../pages/PerformanceMarketing";
import Ecommerce from "../pages/Ecommerce";
import AllInOneMarketing from "../pages/AllInOneMarketing";
import WebsiteAutomation from "../pages/WebsiteAutomation";
import Contact from "../pages/Contact";
import About from "../pages/About";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/performance-marketing"
          element={<PerformanceMarketing />}
        />

        <Route
          path="/ecommerce"
          element={<Ecommerce />}
        />

        <Route
          path="/all-in-one-marketing"
          element={<AllInOneMarketing />}
        />

        <Route
          path="/website-automation"
          element={<WebsiteAutomation />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;