import React from "react";
import location from "../images/location.svg";
import office from "../images/office.svg";
import calendar from "../images/calendar.svg";
import { motion } from "framer-motion";
import { staggeredChildren, staggeredListMotion } from "../utils/motion";
import { education } from "../utils/constants";

const About = () => {
  return (
    <div
      className="lg:w-[60%] mt-10 px-2 xl:px-36 3xl:ml-36"
      id="about"
      // data-aos="fade-up"
      data-aos-anchor="#about"
    >
      <div>
        <h1 className="text-[#42446E] text-[2.5rem] font-bold font-[poppins-extrabold]">
          About me
        </h1>
        <p className="text-justify leading-loose text-[#c4c4c4]">
          Oyindamola is a Frontend Developer with an academic background in
          History and International Studies. I have a solid interest in creating
          engaging and user-friendly web interfaces. My passion is to create
          solutions that meet market demands, grow businesses and improve
          lifestyles for consumers. I specialize in the use of HTML, CSS,
          JavaScript, and React to bring designs to life and create interactive
          and responsive websites. I possess some practical knowledge of
          Backend(Node.js) development and database(MongoDB) concepts with
          interface designing and implementation. As an avid leaner, I willing
          to learn more languages.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-[#42446E] text-[2.5rem] font-bold mb-7 font-[poppins-extrabold]">
          Education
        </h1>
        <motion.div
          className="grid gap-5"
          variants={staggeredListMotion()}
          initial="hidden"
          animate="visible"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="text-[#c4c4c4] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              variants={staggeredChildren}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              whileHover={{ scale: 1.05 }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-start gap-2">
                <h1 className="md:text-[1.2rem] tracking-widest break-words">
                  {item.course}
                </h1>
                <section className=" text-[0.6rem] md:text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.school}
                    </p>
                  </span>
                  <span className="md:flex items-center gap-1 hidden">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3 w-max">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-2 md:px-5 text-[0.6rem] md:text-[0.8rem] py-1 w-fit">
                  {item.type}
                </p>
                <p className="flex items-center w-max gap-1 text-[0.6rem] md:text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
