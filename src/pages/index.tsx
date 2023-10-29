import About from "@/components/About";
import Introduction from "@/components/Intro";
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
    </div>
  );
}
