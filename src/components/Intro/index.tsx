import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import profileImage from '../../../public/PNG/ben-sweet-2LowviVHZ-E-unsplash.jpg'

const Introduction = () => {
  return (
    <div className={`${style.bg} `}>
      <div className="flex flex-col justify-center items-center  h-full">
      <div className="border border-10 border-solid  border-white  object-cover h-200 w-200 flex items-center justify-center md:hidden " style={{borderRadius:"60%" ,overflow:"hidden"}}>
  <Image className="" style={{borderRadius:"50%",overflow:"hidden"}} src={profileImage} alt={"profileImage"} width={200} height={200} />
</div>
<div>

</div>
        <div className={`${style.content_bg}`}>
          <p className="text-2xl text-white font-semibold my-2">Hello There! </p>
          <p className="text-4xl text-white font-bold my-2"> I'am Gagan Prasad </p>
          <p className="text-white font-medium text-basic text-center">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
