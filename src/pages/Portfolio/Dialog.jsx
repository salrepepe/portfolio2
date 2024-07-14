import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { t } from "i18next";

const Dialog = ({ item, setProject }) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProject("");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
      document.body.classList.remove("scrolled-body");
      setProject("");
    }
  });

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="dialog"
      initial="hidden"
      animate="visible"
      ref={wrapperRef}
      variants={variants}
    >
      <div
        className="close"
        onClick={() => {
          setProject("");
          document.body.classList.remove("scrolled-body");
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </div>
      <img src={item?.img} alt="" />
      <h4 className="h4" style={{ color: item?.color }}>
        {item?.name}
      </h4>
      <h5 className="h5 descr">{item?.descr}</h5>
      <h5 className="h5">
        <span
          className="colored"
          style={{
            color: item?.color ? item?.color : "",
          }}
        >
          {t("created")} -{" "}
        </span>
        {item?.date}
      </h5>
      <h5 className="h5">
        <span
          className="colored"
          style={{
            color: item?.color ? item?.color : "",
          }}
        >
          {t("technologies")} -{" "}
        </span>
        {item?.technologies}
      </h5>
      <h5 className="h5 link">
        <span
          className="colored"
          style={{
            color: item?.color ? item?.color : "",
          }}
        >
          {t("vievOnline")} -{" "}
        </span>
        <a href={item?.link} target="_blank" rel="noreferrer">
          {item?.link}
        </a>
      </h5>
    </motion.div>
  );
};

export default Dialog;
