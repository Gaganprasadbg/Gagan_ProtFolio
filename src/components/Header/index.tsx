import React, { useState } from "react";
import { SuperMolot } from "../../styles/fonts";
import style from "./headerstyle.module.scss";
import Image from "next/image";
import profileImage from "../../../public/PNG/ben-sweet-2LowviVHZ-E-unsplash.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PsychologyIcon from '@mui/icons-material/Psychology';


const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div
        className={`h-[100vh] w-64 ${
          style.glassy_background
        } text-white  md:block ${showSidebar ? "" : "hidden"}`}
      >
        <div className="p-5">
          <div className={`${SuperMolot.className} font-bold text-xl mb-4`}>
            Gagan
          </div>
          <div
            className="border border-10 border-solid mt-12 border-white  object-cover h-200 w-200 flex items-center justify-center md:block hidden "
            style={{ borderRadius: "60%", overflow: "hidden" }}
          >
            <Image
            unoptimized
              className=""
              style={{ borderRadius: "50%", overflow: "hidden" }}
              src={profileImage}
              alt={"profileImage"}
              width={200}
              height={200}
            />
          </div>
          <div className=" flex gap-4 my-6">
            <LinkedInIcon className="cursor-pointer hover:text-[#B8EFF3]"/>
            <GitHubIcon className="cursor-pointer hover:text-[#B8EFF3]"/>
            <InstagramIcon className="cursor-pointer hover:text-[#B8EFF3]"/>
          </div>
          <ul>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center">
              <CottageIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center">
               <InfoIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center">
               <PsychologyIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Skills
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center">
               <AccountBoxIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#B8EFF3] flex items-center">
               <ConnectWithoutContactIcon className="pr-2" sx={{fontSize:"2.3rem"}}/> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      \
      <div
        className={`md:hidden absolute top-5 right-5 cursor-pointer text-white`}
        onClick={toggleSidebar}
      >
        ☰
      </div>
      {/* ------------------------------------------ Mobile device --------------------------------------- */}
    </div>
  );
};

export default Header;
