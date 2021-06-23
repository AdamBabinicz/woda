import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";

function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="testimonials" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title
            title="Hipotezy powstania wody we Wszechświecie"
            color="blue"
            lineCenter={true}
          />
          <p>
            Przy weryfikowaniu hipotez dotyczących pochodzenia wody uwzględnia
            się skład izotopowy wodoru z różnych źródeł.
          </p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="Wiatr słoneczny niesie za sobą jądra (atomy) wodoru, które wchodzą w reakcję z tlenem, tworząc cząsteczki wody."
            name="Jun Wu, Steven Desch i Peter Buseck"
            designation="Hipoteza solarna"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Ziemia ukształtowała się wewnątrz linii śniegu, teorie zakładają, że lekkie pierwiastki i związki chemiczne, w tym i woda, powinny być wymiecione przez promieniowanie tworzącej się gwiazdy."
            name="Florida State University, John Hopkins University"
            designation="Uderzenia asteroid"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Zakłada powstawanie wody na skutek reakcji chemicznych w płaszczu Ziemi. Dwutlenek krzemu może tam reagować z wodorem, w efekcie czego powstaje ciekła woda i krzemowodór, SiH4."
            name="University of Hawai w Manoa, UH NASA Astrobiology Institute"
            designation="Hipoteza geochemiczna"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
