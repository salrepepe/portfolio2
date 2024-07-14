import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import "./index.css";
import ChangeLanguage from "../changeLanguage";

const Header = ({ t, i18n }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const makeSticky = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", makeSticky);

  return (
    <header className={sticky && "header_sticky"}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="logo">
          Mukhammed-<span>Saeed</span>
        </Link>
        <nav
          className={
            open ? "nav d-flex nav_active" : "nav d-flex justify-content-end"
          }
        >
          {location.pathname === "/" ? (
            <a
              href="#about"
              onClick={() => setOpen(!open)}
              className="nav-item h5 link"
            >
              {t("about")}
            </a>
          ) : (
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className="nav-item h5 link"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-primary)" : "#fff",
              })}
            >
              {t("about")}
            </NavLink>
          )}
          <NavLink
            onClick={() => setOpen(false)}
            to="/portfolio"
            className="nav-item h5 link"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-primary)" : "#fff",
            })}
          >
            {t("portfolio")}
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contacts"
            className="nav-item h5 link"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-primary)" : "#fff",
            })}
          >
            {t("contacts")}
          </NavLink>
          {window.matchMedia("(max-width: 992px)").matches && (
            <ChangeLanguage i18n={i18n} />
          )}
        </nav>
        {window.matchMedia("(max-width: 992px)").matches && (
          <svg
            className="burger"
            width="40"
            style={{
              transition: "all 0.2s linear",
              transform: open && "rotate(-90deg)",
            }}
            onClick={() => setOpen(!open)}
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 11.6667H35"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M5 20H35"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M5 28.3333H35"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
