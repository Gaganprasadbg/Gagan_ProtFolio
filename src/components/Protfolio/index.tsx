import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import style from "./style.module.scss";
import Image from "next/image";
import image1 from "../../../public/PNG/ben-sweet-2LowviVHZ-E-unsplash (1).jpg";
import data from "../../utils/Data/index";
import { useEffect, useState } from "react";
import { SuperMolot, Verdana } from "../../styles/fonts";
import { useRouter } from "next/router";

export default function Protfolio() {
  const [carddata, setdata]: any[] = useState([]);
  const router =useRouter()

  useEffect(() => {
    setdata(data);
  }, []);

  console.log(carddata, ">>>");
const handellearnmore=(id:number)=>{
  router.push(`projectdata/${id}`)
}
  return (
    <div className={style.bg}>
      <div className="md:ml-64 ">
        <div className="text-center font-bold text-4xl  text-white pt-14 px-12">
          Let's Learn What I Did ...
        </div>

        <div className="mx-auto max-w-[1100px] flex flex-wrap gap-5 md:py-4 p-12 justify-center">
          {carddata?.map((item: any, index: any) => {
            return (
              <Card sx={{ maxWidth: 480 }}>
                <CardActionArea>
                  <CardMedia key={item?.id} component="text" height="100" />
                  <Image src={item?.image[0]} alt={"image1"} />
                  <CardContent
                    sx={{ backgroundColor: "#000000", color: "#B8EFF3" }}
                  >
                    <div className="h-[250px] md:h-[200px]" style={{ overflow: "hidden" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <b className={`${Verdana.className} text-white`}>
                          Site:
                        </b>{" "}
                        <span className={SuperMolot.className}>
                          {item?.websitename}
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        <b className={`${Verdana.className} text-white`}>
                          Company:
                        </b>
                        <span className={SuperMolot.className}>
                          {item?.companyname}
                        </span>
                      </Typography>
                      <Typography
                        className={SuperMolot.className}
                        variant="body2"
                        color="#B8EFF3"
                      >
                        <b className={`${Verdana.className} text-white`}>
                          Description:
                        </b>{" "}
                        {item?.briefdescription}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ background: "#0D0D25" }}>
                  <Button size="small" className="text-white" onClick={()=>handellearnmore(item.id)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
