import React from "react";
import Title from "../components/Title";
import { GoPlay } from "react-icons/go";
import "../styles/sections/Why.scss";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../Animation";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title
            title="Niektóre właściwości wody"
            color="pink"
            lineCenter={true}
          />
          <div className="subTitle">
            <p>
              Lekko niebieski kolor wody wynika z pochłaniania przez nią
              promieniowania elektromagnetycznego z zakresu światła widzialnego
              odpowiadającego barwie czerwonej (światło czerwone jest
              absorbowane przez wodę ok. 100 razy silniej niż niebieskie)
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            className=""
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <a
              href="//www.youtube.com/watch?v=9-wDBmTlQ8A"
              className="video"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <GoPlay />
            </a>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>
                temperatura topnienia pod ciśnieniem 1 atm: 0 °C = 273,152519 K
              </li>
              <li>
                temperatura wrzenia pod ciśnieniem 1 atm: 99,97 °C = 373,12 K
              </li>
              <li>napięcie powierzchniowe: 72,4·10−3 N/m (18 °C)[17].</li>
              <li>
                barwa: lekko jasnoniebieska (w małych objętościach wydaje się
                bezbarwna)
              </li>
              <li>masa cząsteczkowa: 18,01524 Da</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
