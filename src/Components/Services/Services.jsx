import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import {motion} from 'framer-motion';

export default function Services() {

  const transition = {duration : 2, type: 'string'};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Lorem maxime sed repudiandae magnam tempore placeat? Natus.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
        initial={{left: '25%'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
         initial={{ left: "-11rem", top: "12rem" }}
         whileInView={{ left: "-4rem" }}
         transition={transition}
        style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/* third card */}
        <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem maxime sed repudiandae magnam tempore placeat? Natus."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}
