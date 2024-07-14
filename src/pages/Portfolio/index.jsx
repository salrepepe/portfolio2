import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
// import itStudio from "../../assets/images/portfolio/itStudio.webp";
// import runSmart from "../../assets/images/portfolio/runSmart.webp";
// import HouseVOP from "../../assets/images/portfolio/houseVop.webp";
// import crypto from "../../assets/images/portfolio/crypto.webp";
// import domket from "../../assets/images/portfolio/domket.webp";
import nft from "../../assets/images/portfolio/nft.webp";
import artDeco from "../../assets/images/portfolio/art-deco.webp";
import netex from "../../assets/images/portfolio/netex.webp";
import opop from "../../assets/images/portfolio/opop.png";
import vilar from "../../assets/images/portfolio/vilar.kg.png";
// import oracleDigital from "../../assets/images/portfolio/oracle-digital.webp";
// import doce from "../../assets/images/portfolio/doce.png";
// import contacts from "../../assets/images/portfolio/contacts.png";
import { t } from "i18next";
import Dialog from "./Dialog";

const Portfolio = () => {
  const [project, setProject] = useState({ open: false });

  const currentProject = slides.find((item) => item.name === project.name);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <section className="portfolioM">
        <div className="container">
          <h1 className="h1 title">{t("myWorks")}</h1>
          <div className="row slides">
            {slides.map((item, idx) => (
              <div
                className="col col-12 col-md-6 col-lg-4"
                ket={idx}
                onClick={() => {
                  document.body.classList.add("scrolled-body");
                  setProject({ ...project, name: item.name, open: true });
                }}
              >
                <div className="slide">
                  <img src={item.img} alt="" />
                  <h5 className="h5">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={project.open ? "overlay overlay_visible" : "overlay"}>
        {project.open && (
          <Dialog item={currentProject} setProject={setProject} />
        )}
      </div>
    </motion.main>
  );
};

export default Portfolio;

const slides = [
  {
    img: vilar,
    name: "VILAR",
    link: "https://vilar.kg",
    color: "#cc8f58",
    descr:
      "Orci nec interdum facilisis. Lorem ipsum dolor sit amet, consectetur",
    date: "2024",
    technologies: "React",
  },
  // {
  //   img: opop,
  //   name: "OPOP",
  //   link: "https://opop.asia",
  //   color: "#fce34c",
  //   descr:
  //     "Orci nec interdum facilisis. Lorem ipsum dolor sit amet, consectetur",
  //   date: "2022",
  //   technologies: "React",
  // },
  {
    img: artDeco,
    color: "#fce34c",
    name: "Art-Deco",
    descr:
      "Orci nec interdum facilisis. Lorem ipsum dolor sit amet, consectetur",
    date: "April - May 2022",
    technologies: "React",
    link: "https://art-deco.kg/",
  },
  {
    img: nft,
    color: "#fce34c",
    name: "Netex NFT",
    descr: "Открывайте, собирайте и продавайте необычные NFT.",
    date: "February - March 2022",
    technologies: "React",
    link: "https://nft.netex.kg/",
  },

  // {
  //   img: doce,
  //   color: "#FFB951",
  //   name: "DOCExpress",
  //   descr: "DOCExpress - быстро и надежно доставят все что можно.",
  //   date: "January - February 2022",
  //   technologies: "React, Redux, Yandex Maps, Material UI",
  //   link: "https://doce.kg/",
  // },
  // {
  //   // img: contacts,
  //   color: "#4985ff",
  //   name: "Контакты",
  //   descr:
  //     "Учебный проект - страница контактов, возможность удаления и редактирования контактов ",
  //   date: "February 2022",
  //   technologies: "React, Redux",
  //   link: "https://salrepepe-contacts.vercel.app",
  // },
  {
    img: netex,
    color: "#fce34c",
    name: "Netex",
    descr:
      "Netex - Ваш персональный обменный сервис. Netex позволяет совершать обмены электронных валют в огромное количество направлений. Совершать обмены с Netex можно с любого устройства: мобильный телефон, планшет или компьютер.",
    date: "November - December 2021",
    technologies: "React, Redux, APEXCHARTS.JS",
    link: "https://netex.kg",
  },
  // {
  //   img: domket,
  //   color: "#00bb29",
  //   name: "Domket",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "June - September 2021",
  //   technologies: "React, Redux, 2Gis",
  //   link: "https://domket.kg",
  // },
  // {
  //   img: oracleDigital,
  //   color: "#4b81c2",
  //   name: "Oracle Digital",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "May 2021",
  //   technologies: "HTML, CSS, Javascript, React, Redux, React-Slick",
  //   link: "https://oracle-digital.herokuapp.com/",
  // },
  // {
  //   img: crypto,
  //   color: "#f8b91a",
  //   name: "Crypto",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "May 2021",
  //   technologies: "HTML, CSS, Javascript, React, React-Slick, Redux",
  //   link: "https://cryptokeke.herokuapp.com/",
  // },

  // {
  //   img: "",
  //   color: "",
  //   name: "ToDo App",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "April 2021",
  //   technologies: "HTML, CSS, Javascript, React, Redux",
  //   link: "https://app-tod1.herokuapp.com/",
  // },

  // {
  //   img: plantShop,
  //   color: "#355342",
  //   name: "Plant Shop",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "February 2021",
  //   technologies: "HTML, CSS, Javascript",
  //   link: "https://salrepepe.github.io/plant-shop/",
  // },

  // {
  //   img: HouseVOP,
  //   color: "#d4c17e",
  //   name: "HouseVOP",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "February 2021",
  //   technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
  //   link: "https://salrepepe.github.io/HouseVop/",
  // },

  // {
  //   img: runSmart,
  //   name: "RunSmart",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "January 2021",
  //   technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
  //   link: "https://salrepepe.github.io/RunSmart/",
  //   color: "#00bb29",
  // },

  // {
  //   img: itStudio,
  //   color: "#4985ff",
  //   name: "IT - Studio",
  //   descr:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
  //   date: "December 2020",
  //   technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
  //   link: "https://salrepepe.github.io/IT-studio/",
  // },
];
