import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./css/index.css";
import Header from "./shared/Header";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./shared/Footer";
import ChangeLanguage from "./shared/changeLanguage";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  // });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div data-scroll-container>
      <div data-scroll-section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <Header t={t} i18n={i18n} />
          {window.matchMedia("(min-width: 768px)").matches && (
            <ChangeLanguage i18n={i18n} />
          )}
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/portfolio" element={<Portfolio t={t} />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          {location.pathname !== "/contacts" && <Footer />}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
