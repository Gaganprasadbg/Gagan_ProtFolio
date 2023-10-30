import React, { useState } from "react";
import { SuperMolot } from "../../styles/fonts";
import style from "./headerstyle.module.scss";
import Image from "next/image";
import profileImage from "../../../public/PNG/ben-sweet-2LowviVHZ-E-unsplash (1).jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MailIcon from '@mui/icons-material/Mail';
import BiotechIcon from '@mui/icons-material/Biotech';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div
        className={`h-[100vh] w-64 z-[100] ${
          style.glassy_background
        } text-white  md:block ${showSidebar ? "" : "hidden"}`}
      >
        <div className="p-5">
          <div className={`${SuperMolot.className} font-bold text-xl mb-4`}>
            Gagan
          </div>
          <div
            className="border border-[5px] border-solid mt-12 border-white  object-cover h-200 w-200 flex items-center justify-center md:block hidden "
           style={{borderRadius:"50px",overflow: 'hidden',}}
          >
            <Image
            unoptimized
              className=""
              
              src={profileImage}
              alt={"profileImage"}
              width={200}
              height={200}
            />
          </div>
          <div className=" flex gap-4 my-6">
            <a href="https://www.linkedin.com/in/gagan-prasad-b-g-819a54267/" target="_blank"><LinkedInIcon className="cursor-pointer hover:text-[#B8EFF3]"/></a>
            <a href="https://github.com/Gaganprasadbg" target="_blank"><GitHubIcon className="cursor-pointer hover:text-[#B8EFF3]"/></a>
           <a href=""><InstagramIcon className="cursor-pointer hover:text-[#B8EFF3]"/></a>
            <a href="mailto:gaganprasadbg@gmail.com" target="_blank"><MailIcon className="cursor-pointer hover:text-[#B8EFF3]"/></a>
            
          </div>
          <ul>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
              <CottageIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Home
              </a>
            </li>
            <li>
              <a href="/#about" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
               <InfoIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> About
              </a>
            </li>
            <li>
              <a href="/#skills" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
               <PsychologyIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Skills
              </a>
            </li>
            <li>
              <a href="/#experience" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
               <BiotechIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Experience
              </a>
            </li>
            <li>
              <a href="/#protfolio" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
               <AccountBoxIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" className="block py-2 hover:text-[#B8EFF3] flex items-center" onClick={toggleSidebar}>
               <ConnectWithoutContactIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Contact
              </a>
            </li>
           
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-5 right-5 cursor-pointer text-white flex`}
        onClick={toggleSidebar}
      >
       <p>Gagan</p> <MenuOpenIcon className="hover:text-[#B8EFF3]" sx={{fontSize:"3rem"}}/>
      </div>
    </div>
  );
};

export default Header;
