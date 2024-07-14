import React from "react";
import { useLocation } from "react-router";
import "./index.css";

const ChangeLanguage = ({ i18n }) => {
  const location = useLocation();
  return (
    <div className="changeLanguage">
      <span
        className={i18n.language === "ru" ? "lang_active" : ""}
        onClick={() => {
          i18n.changeLanguage("ru");
          document.documentElement.lang = "ru";
          localStorage.setItem("i18nextLng", "ru");
          window.location.pathname = `ru${location.pathname}`;
        }}
      >
        RU
      </span>
      <span
        className={i18n.language === "en" ? "lang_active" : ""}
        onClick={() => {
          i18n.changeLanguage("en");
          document.documentElement.lang = "en";
          window.location.pathname = `en${location.pathname}`;
          localStorage.setItem("i18nextLng", "en");
        }}
      >
        ENG
      </span>
    </div>
  );
};

export default ChangeLanguage;
