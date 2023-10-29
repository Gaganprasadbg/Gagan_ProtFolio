import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import javascript from '../../../public/PNG/java-script-logo.png'
import css from '../../../public/PNG/css.png'
import html from '../../../public/PNG/html-5-logo.png'
import  react from '../../../public/PNG/structure.png'
import nextjs from '../../../public/PNG/nextjs-icon-dark-background.png'
import npm from '../../../public/PNG/npm.png'
import tslogo from '../../../public/PNG/tslogo.png'
import java from '../../../public/PNG/java.png'
import sass from '../../../public/PNG/sass.png'
import github from '../../../public/PNG/github.png'
import tailwindcss from '../../../public/PNG/tailwind.png'
import bootstrap from '../../../public/PNG/bootst.png'
import selenium from '../../../public/PNG/selenium-logo.png'
import SkillSvg from "../SVG/skill";

const Skills = () => {
  return (
    <div className={`${style.bg} `}>
      <div className="mx-auto mx-12 md:ml-64 text-white">
        <div className="mx-auto w-full md:max-w-[1100px] ">
            <p className="font-bold text-2xl text-white text-center pt-6">Let's Learn What ?.. I Know</p>
          <div className="grid grid-cols-1 md:grid-cols-2 my-12">
            <div className="flex gap-4 md:gap-8 p-5 flex-wrap transform transition duration-300 hover:scale-110">
                <Image className="transform transition duration-300 hover:scale-110" src={javascript} alt={"javascript"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={css} alt={"css"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={html} alt={"html"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={react} alt={"react"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={nextjs} alt={"nextjs"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={npm} alt={"npm"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={tslogo} alt={"tslogo"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={sass} alt={"sass"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={java} alt={"java"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={github} alt={"github"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={tailwindcss} alt={"tailwindcss"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={bootstrap} alt={"bootstrap"} height={100} width={100}/>
                <Image className="transform transition duration-300 hover:scale-110"   src={selenium} alt={"selenium"} height={100} width={100}/>

            </div>
               <div className="flex  pl-6" style={{mixBlendMode:"difference"}}>
                <SkillSvg/>
                </div>    
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
