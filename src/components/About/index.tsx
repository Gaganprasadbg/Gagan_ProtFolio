import React from "react";
import style from "./style.module.scss";
import AboutSvg from "../SVG/AboutSvg";
import { SuperMolot } from "../../styles/fonts";

const About = () => {
  return (
    <div className={`${style.bg} text-white `}>
      <div className=" mx-auto max-w-[1000px] p-12">
        <div>
          <p className="text-white text-center font-medium text-2xl">
            About ME!!!
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <AboutSvg className="w-full md:w-[65%] " />
          <div>
            <div className="text-white font-bold text-xl ">
              Let's <br />
              <span className="font-bold text-4xl ">Read</span> <br />
              <span className="font-bold text-3xl ">About ME!!!...</span>
            </div>
            <div className="w-full">
              <ul className={`${SuperMolot.className} mt-4`}>
                <li className="py-2">
                  A passionate Front-end Developer with a creative approach.
                </li>
                <li className="py-2">
                  Enjoys crafting digital experiences akin to navigating the
                  vast sea of technology.
                </li>
                <li className="py-2">
                  Driven by the spirit of creation, transforming ideas into
                  tangible digital realities.
                </li>
                <li className="py-2">
                  Sees each project as a unique fish in the vast ocean of
                  technology.
                </li>
                <li className="py-2">
                  Believes in the power of coding to bring life and innovation
                  to the digital landscape.
                </li>
                <li className="py-2">
                  Aligns the essence of creation with the realms of innovation
                  and technology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
