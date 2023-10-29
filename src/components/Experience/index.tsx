import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SuperMolot, Verdana } from "../../styles/fonts";
import expData from '../../utils/Expedata/index'
import ExperienceSvg from "../SVG/experencesvg";

const Experience = () => {
 const [data,setData]:any[]=useState([])

useEffect(()=>{
   setData(expData);
},[])
console.log(data)
  return (
    <div className={style.bg}>
      <div className="md:ml-64 p-12">
        <div className={`font-bold text-white text-4xl text-center p-4 ${SuperMolot.className}`}>Let's Know Where I Used My Brain...</div>
        <div className="mx-auto max-w-[1100px] grid md:grid-cols-2 grid-cols-1">
          <div className=" flex flex-col gap-5">
            {data?.map((item:any,index:any)=>{
              return(
                <Card sx={{ minWidth: 250,maxWidth:480,background:"black" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="white"
                    gutterBottom
                  >
                    Work For :
                  </Typography>
                  <Typography className={SuperMolot.className} variant="h5" component="div" sx={{color:'#B8EFF3'}}>
                    {item?.companyname}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="White">
                    Role : <span className={SuperMolot.className} style={{color:'#B8EFF3'}}>{item.role}</span> 
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="White">
                    Duration :
                  </Typography>
                  <Typography className={SuperMolot.className} variant="body2" sx={{color:'#B8EFF3'}}>
                  {item?.startdate} - To - {item?.enddate}
                  </Typography>
                </CardContent>
              </Card>
              )
            })}
           
          </div>
          <div className="flex flex-wrap">
            <ExperienceSvg/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
