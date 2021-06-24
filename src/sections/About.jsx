import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Card from "../components/Card";
import { GiWaterRecycling } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { GiWaterfall } from "react-icons/gi";
import "../styles/sections/About.scss";
import "../sections/About";
import { reveal } from "../Animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import Popup from "../components/Popup";

function About() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Cicha woda brzegi ..." color="blue" />
          <p>
            Woda jest jedną z&nbsp;najpospolitszych substancji
            we&nbsp;Wszechświecie. Cząsteczka wody jest&nbsp;
            <b>
              trzecią najbardziej rozpowszechnioną molekułą w&nbsp;ośrodku
              międzygwiazdowym
            </b>
            , po cząsteczkowym wodorze i&nbsp;tlenku węgla. Jest również szeroko
            rozpowszechniona w&nbsp;Układzie Słonecznym: stanowi istotny element
            budowy Ceres i&nbsp;księżyców lodowych krążących wokół planet -
            olbrzymów, jako domieszka występuje w&nbsp;ich atmosferach,
            a&nbsp;przypuszcza się, że&nbsp;duże jej ilości znajdują się
            we&nbsp;wnętrzach tych planet. Jako lód występuje także na części
            planetoid, a&nbsp;zapewne również na obiektach transneptunowych.
            Woda jest bardzo rozpowszechniona także na powierzchni Ziemi.
            Występuje głównie w&nbsp;oceanach, które pokrywają&nbsp;
            <b>70,8%</b>
            &nbsp;powierzchni globu, ale także w&nbsp;rzekach, jeziorach
            i&nbsp;w&nbsp;postaci stałej w&nbsp;lodowcach. Część wody znajduje
            się w&nbsp;atmosferze (chmury, para wodna). Niektóre związki
            chemiczne zawierają cząsteczki wody w&nbsp;swojej budowie (hydraty –
            określa się ją wówczas mianem <b>wody krystalizacyjnej</b>).
            Zawartość wody włączonej w&nbsp;
            <b>strukturę minerałów w&nbsp;płaszczu Ziemi</b> może przekraczać
            łączną zawartość wody w&nbsp;oceanach i&nbsp;innych zbiornikach
            powierzchniowych nawet <b>dziesięciokrotnie</b>.
          </p>
          <p>
            Woda występująca w przyrodzie jest&nbsp;
            <b>roztworem soli i&nbsp;gazów</b>. Najwięcej soli mineralnych
            zawiera woda morska i&nbsp;wody mineralne; najmniej woda
            z&nbsp;opadów atmosferycznych. Wodę o małej zawartości składników
            mineralnych nazywamy wodą miękką, natomiast zawierającą znaczne
            ilości soli wapnia i&nbsp;magnezu – wodą twardą. Oprócz tego wody
            naturalne zawierają rozpuszczone substancje pochodzenia
            organicznego, na przykład <b>mocznik, kwasy humusowe</b>.
          </p>
          <button onClick={() => setButtonPopup(true)}>więcej</button>
        </motion.div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Ile wody zużywamy podczas codziennych czynności?</h3>
          <p>
            Według danych statystycznych, przeciętny Polak zużywa około &nbsp;
            <b>150</b>&nbsp;litrów wody dziennie. Przykładowo zużywamy:
            <br /> &nbsp;<b>20-40</b> litrów do spłukiwania toalety
            <br /> <b>4-7</b> litrów do mycia naczyń
            <br /> <b>40-100</b> litrów podczas jednego cyklu płukania pralki.
            <br />
            Gdyby wyrazić dzienne zużycie wody w procentach, okazałoby się, że:
            <br /> około 97% wody zużywamy na cele higieniczne, mycie i
            sprzątanie, ale tylko 3% na picie i przygotowywanie jedzenia
            <br /> 36% przeznaczamy na cele higieniczne
            <br /> 30% zużywają urządzenia sanitarne
            <br /> 15% przeznaczamy na pranie
            <br /> 10% na mycie naczyń
            <br /> 6% na sprzątanie
            <br /> 3% na gotowanie i picie
          </p>
          <em>
            https://www.eden.pl/blog/9-ciekawostek-o-wodzie-o-ktorych-warto-wiedziec
          </em>
        </Popup>
        <div className="cards" ref={element}>
          <Card title="Woda" logo={<GiWaterfall />} animateCustom={controls} />
          <Card
            title="Tlenek wodoru"
            logo={<BiWater />}
            animateCustom={controls}
          />
          <Card title="Oksydan" logo={<FaWater />} animateCustom={controls} />
          <Card
            title="Monotlenek diwodoru"
            logo={<GiWaterRecycling />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
