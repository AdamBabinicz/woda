import React, { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "../styles/components/Navbar.scss";
import BrandName from "./BrandName";
import { motion } from "framer-motion";
import { navbarAnimation } from "../Animation";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <a href="#about">O&nbsp;wodzie</a>
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
              <Button content="Kontakt" />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
