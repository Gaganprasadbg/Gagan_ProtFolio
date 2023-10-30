import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useRouter } from "next/router";
import data from "../../utils/Data/index";
import { SuperMolot, Verdana } from "../../styles/fonts";
import Image from "next/image";

const Expedata = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projectdata, setProjectData]: any = useState();

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id as string, 10);
      const foundProjectData = data.find((project) => project.id === projectId);
      if (foundProjectData) {
        setProjectData(foundProjectData);
      }
    }
  }, [id]);
  
  return (
    <div className={`${style.bg}`}>
      <div className="md:ml-64 mx-auto max-w-[1100px] ">
        <div
          className={`font-bold text-3xl md:pt-4 pt-8 text-center text-white ${SuperMolot.className}`}
        >
          Let's Learn How I Did...
        </div>
        <div
          className={`font-bold text-4xl text-center text-white pt-5 ${SuperMolot.className}`}
        >
          {projectdata?.websitename}
        </div>
        <div className="mx-auto max-w-[1000px] md:p-8 p-7 grid grid-cols-1 md:grid-cols-2">
          <div className={`text-white p-4`}>
            <div
              className={`text-medium mt-4 ${SuperMolot.className} text-[#B8EFF3]`}
            >
              <span
                className={`text-black font-semibold ${Verdana.className} `}
              >
                {" "}
                Overview :
              </span>
              <div className="pt-2">{projectdata?.overview}</div>
            </div>
            <div
              className={`text-medium mt-4 ${SuperMolot.className} text-[#B8EFF3] w-full`}
            >
              <span
                className={`text-black font-semibold ${Verdana.className} `}
              >
                Tech Stack :
              </span>{" "}
              <div className="pt-2">{projectdata?.technologies}</div>
            </div>
            <div
              className={`text-medium mt-4 ${SuperMolot.className} text-[#B8EFF3] w-full`}
            >
              <span
                className={`text-black font-semibold ${Verdana.className} `}
              >
                Project Links :
              </span>
              <div className={`text-[#B8EFF3] mt-2 `}>
                For more details about the Commshell project, please visit the
                project websites below:
              </div>
              <ol className="list-disc pl-5 mt-2 text-black text-lg font-semibold">
                {projectdata?.projectlinks.map(
                  (link: string, index: number) => (
                    <li key={index} className="md:pl-4">
                      <a href={link} target="_blank">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
          <div className="p-5">
            <div className="mt-4 ">
              <span
                className={`text-black font-bold text-xl ${Verdana.className} `}
              >
                Responsibilities :
              </span>
              <div className={`pt-2 pl-3 text-[#B8EFF3] ${SuperMolot.className}`}>
                <ul>
                  {projectdata?.responsibilities.map((item:any, index:any) => (
                    <li className="py-2" key={index}>- - {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-24">
           <div className={` text-2xl text-center font-bold text-white pb-4 ${SuperMolot.className}`}>Gallery</div>
           <div className="p-7 grid grid-cols-2 gap-5">
            {projectdata?.image?.map((items:any,index:number)=>{
              return(
                <Image src={items} alt={"image1"} height={200} width={500} key={index}/>
              )
            })}
                
           </div>
           <div className={`${SuperMolot.className} text-white p-5 `}>
            <span className="text-black ">Note:</span> Due to the sensitive nature of certain project details, specific code or sensitive information cannot be disclosed.
           </div>
        </div>
      </div>
    </div>
  );
};

export default Expedata;
