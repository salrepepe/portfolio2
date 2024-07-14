import React, { useState } from "react";
import { motion } from "framer-motion";

const About = ({ t }) => {
  const [tab, setTab] = useState("education");

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const education = [
    {
      date: "2012 - 2021",
      place: t("school"),
      descr: t("schoolDescr"),
    },
    {
      date: "24.11.2020 - 25.05.2021",
      place: "IT - Academy 'IT-RUN'",
      descr: t("itAcademy"),
    },
  ];

  const expirience = [
    {
      date: `05.2021 - 12.2021`,
      place: "Oracle Digital",
      descr: t("od"),
    },
    {
      date: `12.2021 - 09.2022`,
      place: "Freelance",
      descr: t("fr"),
    },
    {
      date: `09.2022 - 08.2023`,
      place: "NETEX",
      descr: t("nt"),
    },
  ];

  return (
    <section className="about dark" id="about">
      <div className="container">
        <h2 className="h1 title">{t("aboutMe")}</h2>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center"></div>
          <div className="col-12 col-lg-6">
            <h3 className="h4">{t("data")}</h3>
            <h4 className="h6">{t("info")}</h4>
            <h3 className="h4">{t("skills")}</h3>
            <ul className="skills">
              {skills.map((item) => (
                <li className="h6">{item}</li>
              ))}
            </ul>
            <div className="tabs">
              <span
                className={tab === "education" ? "tab h5 tab_active" : "tab h5"}
                onClick={() => setTab("education")}
              >
                {t("education")}
              </span>
              <span
                className={
                  tab === "expirience" ? "tab h5 tab_active" : "tab h5"
                }
                onClick={() => setTab("expirience")}
              >
                {t("expirience")}
              </span>
            </div>
            <ul className="roadmap">
              {tab === "education"
                ? education.map((item) => (
                    <li className="timeline">
                      <span className="date h5">{item.date}</span>
                      <span className="place h6">{item.place}</span>
                      {/* <span className="descr h6">{item.descr}</span> */}
                    </li>
                  ))
                : expirience.map((item) => (
                    <li className="timeline">
                      <span className="date h5">{item.date}</span>
                      <span className="place h6">{item.place}</span>
                      <span className="descr h6">{item.descr}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <motion.svg
        style={{
          position: "absolute",
          top: -5,
          left: 0,
          transform: "rotate(180deg)",
          zIndex: 0,
        }}
        width="699px"
        height="935px"
        viewBox="0 0 699 935"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M1.5 121H1V121.5V560V560.5H1.5H520.5V933V933.535L521.034 933.499C572.196 929.999 649.987 925.8 717.084 924.575C750.634 923.963 781.501 924.094 805.025 925.427C816.788 926.094 826.703 927.061 834.193 928.382C837.939 929.043 841.066 929.79 843.51 930.628C845.967 931.47 847.679 932.386 848.646 933.354C848.971 933.678 849.388 933.903 849.866 933.807C850.311 933.718 850.651 933.378 850.914 932.984C851.444 932.19 851.908 930.794 852.333 928.905C853.191 925.094 853.946 918.994 854.609 910.861C855.936 894.585 856.905 870.069 857.572 839.2C858.906 777.457 859.037 690.254 858.425 592.609C857.2 397.318 853 160.24 849.5 1.48898L849.489 1H849H579.5H579V1.5V121H1.5Z"
          stroke="#027C33"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </section>
  );
};

export default About;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Sass, Less, Stylus",
  "Bootstrap",
  "Material UI",
  "Chakra UI ",
  "BEM - Metodology",
  "Node JS",
  "Mongo DB",
  "Git",
  "Ctrl + C / Ctrl + V",
];
