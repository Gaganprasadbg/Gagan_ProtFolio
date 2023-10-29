import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Intro";
import Protfolio from "@/components/Protfolio";
import Skills from "@/components/Skills";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Introduction />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="protfolio">
        <Protfolio/>
      </div>
    </div>
  );
}
