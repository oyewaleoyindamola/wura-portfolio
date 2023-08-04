import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/stack";
import Experience from "./components/exprience";
import Contact from "./components/contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { FloatButton } from "antd";
import StarsCanvas from "./components/canvas/Stars";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#050816" },
        components: {
          Anchor: {
            fontSize: 17,
            lineType: "",
            padding: 50,
            paddingXXS: 20,
          },
        },
      }}
    >
      <div className=" bg-[#050816] text-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Stack />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <FloatButton.BackTop />
    </ConfigProvider>
  );
};

export default App;
