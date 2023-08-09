import React from "react";
// import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import Weather from "../images/weather.png";
// import { BiCodeAlt } from "react-icons/bi";
import calculator from "../images/Cal.png"
import RPS from "../images/rock-paper-scissors.png";
import music from "../images/musicplayer.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";

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
        <div className=" m-10 flex-col md:flex-row flex gap-10">
          <img src={Weather} alt="" className=" w-[40rem]" />
          <div>
            <h1 className=" text-6xl">Weather App</h1>
            <p className=" mt-5">
              This is an app that tells users the current weather condition of
              any city inputed. It provides easy access to informations like the
              humidity, description and temperature.
            </p>
            <div className="flex gap-4">
              <span className="flex gap-2 mt-4 border w-max p-3 rounded-2xl cursor-pointer">
                <Link
                  target="_blank"
                  to={"https://oyewaleoyindamola.github.io/weatherApi/"}
                >
                  View Project
                </Link>
                <GoLink className="text-white text-2xl" />
              </span>
              <span className="flex gap-2 mt-4 border w-max p-3 rounded-2xl cursor-pointer">
                <Link
                  target="_blank"
                  to={"https://github.com/oyewaleoyindamola/weatherApi"}
                >
                  View Code
                </Link>
                <FaGithub className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </div>
        <div className=" m-10 flex gap-10">
          <img src={RPS} alt="" className=" w-[40rem]" />
          <div>
            <h1>Rock-Paper-Scissors</h1>
            <p className=" mt-5">
              This the famous rock paper scissors game against computer
            </p>
          </div>
        </div>
        <div className=" m-10 flex gap-10">
          <img src={music} alt="" className=" w-[40rem]" />
          <div>
            <h1>Rock-Paper-Scissors</h1>
            <p className=" mt-5">
             
            </p>
          </div>
        </div>
        <div className=" m-10 flex gap-10">
          <img src={calculator} alt="" />
          <div>
            <h1> Calculator</h1>
            <p className=" mt-5"> This is a simple calculator application that can perform basic arithmetic operations like addition, subtraction, multiplication, and division. </p>
          </div>
        </div>
        <div>
          <div>
            <img src={calculator} alt="" />
            <h1>To-Do-App</h1>
            <p className=" mt-5">
            This is a basic to-do list application where users can add, edit, and delete tasks. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
