import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { SuperMolot, Verdana } from "../../styles/fonts";
import persondta from '../../utils/PersonalDetails/index'
import ContactSvgComponent from '../SVG/ContactSvg';

type initialPersonalData = {
    name: string
    ph: string,
    mail: string,
    giturl: string,
    linkedin: string
  };

const Contact = () => {
 const [data,setData] = useState<initialPersonalData | any>()

 useEffect(()=>{
    setData(persondta)
 },[])
  return (
    <div className={style.bg}>
      <div className={`md:ml-64`}>
        <div className={`${SuperMolot.className} font-bold text-3xl text-white text-center pt-10`}>Contact Me Through ...</div>
        <div className='text-white mx-auto max-w-[1100px] px-12 grid md:grid-cols-2 grid-cols-1 '>
            <div className={`p-2 pt-6`}>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl `}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Name: </span> {data?.name}
              </div>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl  py-4`}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Call Me!: </span> <a href={`tel:${data?.ph}`}>{data?.ph}</a>
              </div>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl  py-4`}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Whatsapp Me: </span><a href={`https://wa.me/${data?.ph}`} target="_blank">{data?.ph}</a>
              </div>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl  py-4`}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Email Me: </span><a href={`mailto:${data?.mail}`} target="_blank">{data?.mail}</a>

              </div>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl  py-4`}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Git Hub: </span><a href={data?.giturl} target="_blank">{data?.giturl}</a>
              </div>
              <div className={`${SuperMolot.className} text-[#B8EFF3] text-xl  py-4`}>
                <span className={`${Verdana.className} text-black  font-semibold`}>Linkedin: </span><a href={data?.linkedin} target="_blank">Gagan</a>
              </div>
              
            </div>
            <div className={`md:p-2 flex flex-wrap order-1 md:order-1`}>
               <ContactSvgComponent/>
            </div> 
        </div>
        <div className={`${SuperMolot.className} font-bold text-3xl text-white text-center `}>Thank You....!!!</div>
        <div className={`${SuperMolot.className} font-bold text-3xl text-white text-center py-2`}>Waiting....</div>
      </div>
    </div>
  )
}

export default Contact
