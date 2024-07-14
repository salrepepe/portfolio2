import React from "react";
import { t } from "i18next";
import "./index.css";
import { motion } from "framer-motion";
import akio from "../../assets/images/akio.webp";

const Contacts = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <section className="contacts">
        <div className="container">
          <h1 className="title h1">{t("contactMe")}</h1>
          <div className="flex-md-row flex-column-reverse d-flex">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <h3 className="h3">{t("social")}</h3>
                  <h4 className="h4">
                    <a
                      href="https://www.instagram.com/salrepepe/"
                      target="_blank"
                      rel=" noreferrer"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
                          fill="#fff"
                        />
                        <path
                          d="M15 7.27014C10.7375 7.27014 7.26978 10.7379 7.26978 15.0004C7.26978 19.2627 10.7375 22.7303 15 22.7303C19.2625 22.7303 22.7303 19.2627 22.7303 15.0004C22.7303 10.7379 19.2625 7.27014 15 7.27014ZM15 20.0683C12.2054 20.0683 9.93152 17.7949 9.93152 15.0002C9.93152 12.2054 12.2052 9.93171 15 9.93171C17.7948 9.93171 20.0685 12.2054 20.0685 15.0002C20.0685 17.7949 17.7947 20.0683 15 20.0683Z"
                          fill="#fff"
                        />
                        <path
                          d="M23.0545 5.01318C22.5417 5.01318 22.0379 5.2208 21.6757 5.58457C21.3118 5.94657 21.1025 6.45053 21.1025 6.96513C21.1025 7.47814 21.3119 7.98192 21.6757 8.34569C22.0377 8.70769 22.5417 8.91708 23.0545 8.91708C23.5691 8.91708 24.0713 8.70769 24.435 8.34569C24.7988 7.98192 25.0064 7.47796 25.0064 6.96513C25.0064 6.45053 24.7988 5.94657 24.435 5.58457C24.073 5.2208 23.5691 5.01318 23.0545 5.01318Z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://t.me/salrepepe"
                      target="_blank"
                      rel=" noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="telegram-plane"
                        class="svg-inline--fa fa-telegram-plane fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/salrepepeo/"
                      target="_blank"
                      rel=" noreferrer"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891H7.08984V11.4844H10.6055V23.7891ZM10.6055 9.72656H7.08984V6.21094H10.6055V9.72656ZM22.9102 23.7891H19.3945V16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578V23.7891H12.3633V11.4844H15.8789V12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536V23.7891Z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/salrepepe"
                      target="_blank"
                      rel=" noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <path
                          fill="#fff"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  </h4>
                </li>
                <li>
                  <h3 className="h3">{t("email")}</h3>
                  <a href="mailto:salrepepe@icloud.com" className="h4">
                    salrepepe@icloud.com
                  </a>
                </li>
                <li>
                  <h3 className="h3">{t("phone")}</h3>
                  <a href="tel:+996502766662" className="h4">
                    +996 (502)-76-66-62
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center">
              <img src={akio} alt="" />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contacts;
