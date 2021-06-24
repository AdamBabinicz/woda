import React from "react";
import BrandName from "../components/BrandName";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import "../styles/sections/Footer.scss";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { fromUp, fromDown } from "../Animation";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element} id="footer">
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>Woda na Ziemi i w Kosmosie</p>
            <div className="mail">
              <input type="email" placeholder="Wpisz wiadomość" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Szybkie linki</h3>
            <ul>
              <li>
                <a href="#about">O wodzie</a>
              </li>
              <li>
                <a href="#services">Właściwości</a>
              </li>
              <li>
                <a href="#testimonials">Hipotezy</a>
              </li>
              <li>
                <a href="#blog">Fazy</a>
              </li>
              <li>
                <a href="#footer">Kontakt</a>
              </li>
              {/* <li>
                <a href="#">Blog</a>
              </li> */}
              {/* <li>
                <a href="#">Zasady i warunki</a>
              </li>
              <li>
                <a href="#">Polityka prywatności</a>
              </li> */}
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Filmy</h3>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=VpxbbQCCHvM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Skąd na Ziemi wzięła się WODA?
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=dkvMMoZCWYQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Skąd woda na Ziemi?
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=31bsduG0B3k"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Woda - Wielka tajemnica
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=_Ve2kXpXTNE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Czy zabraknie nam wody?
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=NKEYlT7iFAY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Co robi woda we Wszechświecie?
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=nNBLfOedqTw&t=49s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  Kosmiczna podróż wody
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Skontaktuj się z nami</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">puaro@vp.pl</a>
                </div>
              </div>
            </div>
            {/* <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Telefon</div>
                <div className="detail-content">
                  <a href="#">+91 123123123</a>
                </div>
              </div>
            </div> */}
            {/* <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Lokalizacja</div>
                <div className="detail-content">
                  <a href="#">32 StreetOne Boards, GJ 560123</a>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>2021 - {new Date().getFullYear()}.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a
                href="https://www.facebook.com/technologiewody"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
            {/* <div className="icon">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div> */}
            <div className="icon">
              <a
                href="https://twitter.com/SekretyNauki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
