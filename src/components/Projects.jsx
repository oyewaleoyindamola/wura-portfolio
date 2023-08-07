import React from "react";
// import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import Weather from "../images/weather.png";
// import { BiCodeAlt } from "react-icons/bi";
import RPS from "../images/rock-paper-scissors.png"
import music from "../images/musicplayer.png"

const Projects = () => {
  return (
    <div>
      <div className="mt-20 lg:mt-36" id="projects" data-aos="fade-up">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Projects I Have Worked On
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            My Projects
          </h2>
        </motion.div>
        <div className=" m-10 flex gap-10">
          <img src={Weather} alt="" className=" w-[40rem]" />
          <div>
            <h1 className=" text-6xl">Weather App</h1>
            <p className=" mt-5">
              This is an app that tells users the current weather condition of
              any city inputed. It provides easy access to informations like the
              humidity, description and temperature.
            </p>
          </div>
        </div>
        <div className=" m-10 flex gap-10">
          <img src={RPS} alt="" className=" w-[40rem]" /> 
          <div>
            <h1>Rock-Paper-Scissors</h1>
            <p className=" mt-5">
              This the famous rock paper scissors game 
              against computer
            </p>
          </div>
        </div>
        <div className=" m-10 flex gap-10">
          <img src={music} alt="" className=" w-[40rem]" /> 
          <div>
            <h1>Rock-Paper-Scissors</h1>
            <p className=" mt-5">
              This the famous rock paper scissors game 
              against computer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
