import React from "react";
import me from "../../assets/images/me.jpeg";
import CVRU from "../../assets/images/cv-ru.pdf";
import CVEN from "../../assets/images/cv-en.pdf";
import { useTranslation } from "react-i18next";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import splines from "../../assets/images/splines.png";
import splines1 from "../../assets/images/splines1.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

const FirstScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <MouseParallaxContainer>
      <section className="firstScreen">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="flex-md-row flex-column-reverse d-flex">
            <div
              className="col-md-6 col-12"
              style={{
                zIndex: 10,
              }}
            >
              <h1 className="h1">{t("title")}</h1>
              <h5 className="h5">{t("subtitle")}</h5>
              <a
                className="btn btn-secondary"
                href={i18n.language === "ru" ? CVRU : CVEN}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                {t("download")}
              </a>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <MouseParallaxChild factorX={0.1} factorY={0.1}>
                <div className="img">
                  <img src={me} style={{ objectPosition: "center" }} alt="" />
                </div>
              </MouseParallaxChild>
            </div>
          </div>
          <motion.svg
            viewBox="0 0 200 200"
            className="blob"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <path
              fill="var(--color-secondary)"
              d="M48.8,-59.5C61.7,-47.3,69.6,-30.5,70.1,-14.4C70.5,1.7,63.4,17.1,54.7,30.8C45.9,44.5,35.4,56.5,23,59.2C10.7,62,-3.6,55.5,-18.5,50.3C-33.4,45.1,-49.1,41.2,-53.6,31.7C-58.1,22.2,-51.6,7.2,-48.2,-7.9C-44.9,-23,-44.7,-38.1,-37.2,-51.2C-29.7,-64.3,-14.9,-75.4,1.5,-77.3C17.9,-79.1,35.9,-71.6,48.8,-59.5Z"
              transform="translate(100 100)"
            />
          </motion.svg>
        </div>
        <svg
          component="svg"
          style={{
            position: "absolute",
            left: 0,
            top: 10,
            zIndex: -1,
          }}
          width="100%!important"
          height="775px!important"
          viewBox="0 0 1266 775"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M742.5 1H-59.5C-108 329.5 -208.4 989.9 -222 1003.5C-235.6 1017.1 763.667 1009.17 1265 1003.5V474H742.5V1Z"
            stroke="var(--color-secondary)"
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            top: -5,
            right: 0,
            zIndex: -1,
          }}
          width="699px"
          height="935px"
          viewBox="0 0 699 935"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 121H1V121.5V560V560.5H1.5H520.5V933V933.535L521.034 933.499C572.196 929.999 649.987 925.8 717.084 924.575C750.634 923.963 781.501 924.094 805.025 925.427C816.788 926.094 826.703 927.061 834.193 928.382C837.939 929.043 841.066 929.79 843.51 930.628C845.967 931.47 847.679 932.386 848.646 933.354C848.971 933.678 849.388 933.903 849.866 933.807C850.311 933.718 850.651 933.378 850.914 932.984C851.444 932.19 851.908 930.794 852.333 928.905C853.191 925.094 853.946 918.994 854.609 910.861C855.936 894.585 856.905 870.069 857.572 839.2C858.906 777.457 859.037 690.254 858.425 592.609C857.2 397.318 853 160.24 849.5 1.48898L849.489 1H849H579.5H579V1.5V121H1.5Z"
            stroke="var(--color-secondary)"
          />
        </svg>
      </section>
    </MouseParallaxContainer>
  );
};

export default FirstScreen;
