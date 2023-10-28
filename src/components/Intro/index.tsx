import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import profileImage from "../../../public/PNG/ben-sweet-2LowviVHZ-E-unsplash (1).jpg";

const Introduction = () => {
  return (
    <div className={`${style.bg} `}>
      <div className="flex flex-col justify-center items-center  h-full">
        <div
          className="border border-[5px] border-solid mt-12  border-white  object-cover h-200 w-200 flex items-center justify-center md:hidden "
          style={{ borderRadius: "50px", overflow: "hidden" }}
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

        <div className={`${style.content_bg} p-5`}>
          <p className="text-2xl text-white font-semibold my-2">
            Hello There!{" "}
          </p>
          <p className="text-4xl text-white font-bold my-2">
            {" "}
            I'am Gagan Prasad{" "}
          </p>
          <p className=" font-medium text-basic text-center text-[#B8EFF3] hover:text-white cursor:pointer">
            Professional Web Developer / Front End Developer
          </p>
          <div className="flex justify-between mt-6 ">
          <a className="" href="/Gagan_B_G.pdf" download={"Gagan_CV.pdf"}><button className="cursor-pointer border-2 border-solid text-white p-2 rounded-md border-[#B8EFF3] mr-40 bg-black"> Download CV </button></a>
          <a href="/Gagan_B_G.pdf" target="_blank" title="Gagan_CV"><button className="border-2 border-solid text-white py-2 px-4 rounded-md border-[#B8EFF3] bg-black"> view CV </button></a>

        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Introduction;
