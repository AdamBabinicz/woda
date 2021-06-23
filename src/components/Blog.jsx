import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../styles/components/Blog.scss";
import { motion } from "framer-motion";
import Popup from "../components/Popup";

function Blog({ image, title, subTitle, variants, animate, desc, par }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <button
          onClick={() => setButtonPopup(true)}
          content=""
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        >
          Czytaj więcej
        </button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>{par}</h3>
        <p>{desc}</p>
      </Popup>
    </motion.div>
  );
}

export default Blog;
