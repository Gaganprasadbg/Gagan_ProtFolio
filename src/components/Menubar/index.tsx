import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Arrow from "../../../public/SVG/greenArrow.svg";
import { SuperMolot } from "../../styles/fonts";

interface Props {
  toggle: Boolean;
  handleToggle: (e: any) => void;
}

const MenuBar = ({ toggle, handleToggle }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    handleToggle(isOpen);
  };

  const MenuObj = [
    {
      id: 0,
      title: "Home",
      tagline: "Why choose us?",
      path: "",
    },
    { id: 1, title: "Welcome", tagline: "Our Vision & Mission", path: "welcome" },
    {
      id: 2,
      title: "Services",
      tagline: `We provide services for 5+`,
      path: "services",
    },
    { id: 0, title: "Audience Engagement Features", tagline: "", path: "aef" },
    { id: 0, title: "Support", tagline: "", path: "support" },
    { id: 0, title: "Join The Virtual Revolution", tagline: "", path: "jtr" },
    { id: 0, title: "Contact Us", tagline: "", path: "contactus" },
  ];

  const MenuCard = (data: any) => {
    console.log(data);
    return (
       <a onClick={toggleSidebar} style={{background:"red"}} href={`#${data?.data?.path}`} >
      <div className={` ${styles.menuCard_container} ${SuperMolot.className} `}>
          <div className="flex flex-col justify-center items-center px-4 py-2  w-full h-full">
            <div className="flex justify-between items-center px-4 py-2 w-full h-full">
              <div style={{ fontSize: "2.2rem", color: "#338956" }}>
                {data?.data?.title}
                <p style={{ fontSize: "1.5rem", color: "#000" }}>
                  {" "}

                </p>
              </div>
              
                <Image  style={{transform:'90deg'}}  unoptimized width={30} height={30} alt="icon" src={Arrow} />
              
            </div>
          </div>
      </div>
          </a>
    );
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Open Menu</button>
      <div className={`${styles.sidebar} ${toggle ? styles.open : ""} `}>
        <div className={styles.content}>
          <div onClick={toggleSidebar} className={styles.close}>
            <button onClick={toggleSidebar} className={styles.close_btn}>
              close
            </button>
          </div>
          <div className={`${styles.menu_cont}`}>
            {MenuObj.map((item) => {
              return (
                <div key={item?.id}>
                  <MenuCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
