import React, { useState } from "react";
import WorkImage from "../assets/2.png";
import "../styles/sections/Starter.scss";
import Button from "../components/Button";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { headerAnimation, imageAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
import Popup from "../components/Popup";

export default function Starter() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>Woda na Ziemi jest starsza niż nasza planeta?</h1>
          <p>
            Jak postuluje jedna z hipotez naukowych woda w naszych kranach jest
            starsza niż Ziemia! Jak doszło do powstania wody we Wszechświecie i
            na planetach, dowiecie się z tego serwisu.
          </p>
          <div className="button-container">
            <a
              href="//www.youtube.com/watch?v=TQ4mUO5IwZI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <Button content="Zobacz Video" icon={<GoPlay />} />
            </a>
            <button
              onClick={() => setButtonPopup(true)}
              className="but"
              content="Czytaj więcej"
              icon={<HiOutlineArrowNarrowRight />}
              color="blue"
            >
              Czytaj więcej
            </button>
          </div>
        </motion.div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>
            Naukowcy stworzyli nową teorię na temat pochodzenia ziemskiej wody.
            Według nich pochodzi zarówno z asteroid, jak i gazu pozostałego po
            formowaniu się słońca
          </h3>
          <p>
            Na każde 100 cząsteczek wody ziemskiej przypada jedna lub dwie
            cząsteczki wody pochodzącej z mgławicy słonecznej" - powiedział Jun
            Wu, adiunkt w Szkole Nauk Molekularnych oraz Szkole Badań Ziemi i
            Przestrzeni Kosmicznej na Uniwersytecie Stanu Arizona i główny autor
            badania.
          </p>
          <em>
            https://www.rp.pl/Kosmos/181109382-Skad-pochodzi-ziemska-woda.html
          </em>
        </Popup>
        <motion.div
          className="image content"
          variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <img src={WorkImage} alt="Earth" />
        </motion.div>
      </div>
    </div>
  );
}
