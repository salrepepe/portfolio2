import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import FirstScreen from "./FirstScreen";
import Portfolio from "./Portfolio";
import "./index.css";

const Home = ({ t }) => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <FirstScreen t={t} />
      <About t={t} />
      <Portfolio />
    </motion.main>
  );
};

export default Home;
