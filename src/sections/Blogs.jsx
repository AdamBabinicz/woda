import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Blog from "../components/Blog";
import BlogImage1 from "../assets/7.jpg";
import BlogImage2 from "../assets/9.jpg";
import BlogImage3 from "../assets/6.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../Animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import Popup from "../components/Popup";
import img1 from "../assets/10.jpg";

function Blogs() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          // variants={textAnimation}
          // animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Fazy" color="blue" lineCenter={true} />
          <p>
            Jedyna występująca w przyrodzie we wszystkich trzech stanach
            skupienia materia
          </p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            variants={cardAnimation}
            animate={controls}
            title="Para wodna"
            subTitle="Cząsteczki pary wodnej są oddalone od siebie na znaczne odległości, co umożliwia im poruszanie się we wszystkich kierunkach."
            par="Gazowa postać wody"
            desc="Para wodna powstaje w wyniku parowania wody lub sublimacji lodu. Podczas tego procesu cząsteczka wody odrywa się od cieczy lub ciała stałego i przechodzi do gazu. Takie przejście wymaga dostarczenia energii. Energia ta jest zwykle pobierana z cieczy w postaci ciepła, przez co następuje oziębianie cieczy. Na granicy ciecz-gaz zachodzi też przechodzenie cząsteczek od gazu do cieczy (skraplanie). Dla danej temperatury ustala się równowaga zależna od ciśnienia wywoływanego przez cząstki pary wodnej, tzw. ciśnienie parcjalne, a nie zależy ono od ciśnienia wywieranego przez inne gazy na wodę. Gdy cząstek pary jest mniej, to przeważa parowanie, natomiast gdy cząstek jest zbyt dużo, przeważa skraplanie."
          />
          <Blog
            image={BlogImage2}
            variants={cardAnimation}
            animate={controls}
            title="Ciecz"
            subTitle="W cząsteczce wody następuje przesunięcie elektronów w stronę atomu tlenu. Powoduje to, że atom tlenu ma pewien ładunek ujemny, a atomy wodoru odpowiadający mu ładunek dodatni."
            par="Ciekła postać wody"
            desc="W takiej postaci w przyrodzie występuje jako deszcz, zbiornik wodny, a także buduje organizmy żywe. Powstaje w procesie topnienia lodu, szczególnie na wiosnę, kiedy na rzekach tworzą się roztopy, a także w czasie skraplania się pary wodnej. Takie zjawisko możecie zaobserwować wieczorną porą, kiedy na trawie pojawiają się drobne kropelki wody, tzw. rosa wieczorna. Występowanie wody w postaci ciekłej w przyrodzie ma podstawowe znaczenie dla życia wielu organizmów wodnych. W zimie przy temperaturze poniżej 0̊ C woda zaczyna zamarzać. Jak to się dzieję, że życie w zbiornikach wodnych nie zamiera? Abyśmy mogli odpowiedzieć na to pytanie musimy poznać niezwykłą właściwość wody, jaką jest gęstość. Zbadano, że woda osiąga maksymalną gęstość (jest najcięższa) w temperaturze 4̊ C. Gdy temperatura wody osiągnie wartość ( 4̊ C) wówczas opada na dno zbiornika, a woda chłodniejsza utrzymuje się na powierzchni. To właśnie powierzchniowe warstwy wody zamarzają w zimie, a pod nimi woda nadal jest w stanie ciekłym. Wiele organizmów wodnych może przetrwać okres zimy w stanie hibernacji na dnie zbiornika, gdzie woda jest cieplejsza."
          />
          <Blog
            image={BlogImage3}
            variants={cardAnimation}
            animate={controls}
            title="Lód"
            subTitle="W lodzie każdy atom tlenu tworzy jakby cztery wiązania z atomami wodoru, przy czym dwa atomy wodoru są własne, a dwa pożyczone z innych cząstek."
            par="Stała postać wody"
            desc="Woda w postaci stałej znajduje się w lądolodach i lodowcach górskich, stałej pokrywie śnieżnej lub wiecznej zmarzlinie. Stałą postać mają również kryształki lodu w chmurach. W przyrodzie lód tworzy się w dwóch procesach: krzepnięcia (zmiana cieczy w ciało stałe) i resublimacji (zmiana gazu w ciało stałe). Gdy przyjrzymy się im bliżej to zauważymy, że zachodzą one pod wpływem zmian temperatury powietrza. Ciecz w temperaturze poniżej 0̊ C zamarza, wtedy zaczyna przyjmować strukturę krystaliczną. Niezwykłą cechą wody jest to, że lód ma mniejszą gęstość (jest lżejszy) niż ciecz. Na ziemi nie istnieje inna substancja zachowująca się w podobny sposób,
            ponieważ w trakcie zamarzania zwiększają one swój ciężar. W takiej postaci ma ona określony kształt, np. płatka śniegu. Barwa lodu zależy od: szybkości powstania, ilości zawartego w nim powietrza i grubości. Krople wody załamują światło tworząc tęczę. Podobnie zachowuje się lód, który przy udziale światła odbitego zmienia kolor, np. niebieski lód lodowcowy na Grenlandii. Jak już wiecie, woda ma niezwykłe właściwości rzeźbiarskie. W Norwegii na archipelagu Svalbard powstają prawdziwe cuda przyrody-wodospady lodowe. Tworzą się one w wyniku topnienia śniegu i lodu, a woda ściekająca po stromej ścianie lodowca tworzy nowe krajobrazy."
          />
        </div>
        <div className="button-container">
          <button onClick={() => setButtonPopup(true)} content="">
            Zobacz
          </button>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Stany skupienia wody</h3>
          <img src={img1} alt="..." />
        </Popup>
      </div>
    </div>
  );
}

export default Blogs;
