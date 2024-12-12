import { t } from "i18next";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import vilar from "../../assets/images/portfolio/vilar.kg.png";

const Portfolio = () => {
  const [slide, setSlide] = useState(null);

  const navigate = useNavigate();

  return (
    <section class="portfolio dark" id="portfolio">
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 className="h1 title">{t("portfolio")}</h2>
        <div className="slides">
          {slides.map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              onClick={() => setSlide(item.name)}
              className={slide === item.name ? "slide slide_active" : "slide"}
            >
              <img src={item.img} alt="" />
              <h2
                className="h2"
                style={{ color: item.name === "OPOP" ? "#000" : "#FFF" }}
              >
                {item.name}
              </h2>
            </a>
          ))}
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/portfolio")}
        >
          {t("viewAll")}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

const slides = [
  {
    img: vilar,
    name: "VILAR",
    link: "https://vilar.kg",
  },
];
