import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import employImage from "../../assets/icons/home-employs.png";
import employImage2 from "../../assets/icons/home-employs-2.png";
import employImage3 from "../../assets/icons/home-employs-3.png";
import employImage4 from "../../assets/icons/home-employs-4.png";
import employImage5 from "../../assets/icons/home-employs-5.png";
import Image from "next/image";
// import CountUp from 'react-countup';
import { CountUp } from "use-count-up";

import dynamic from "next/dynamic";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const InfoSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [test, setTest] = useState(1000);
  const [serv, setServ] = useState(10);
  const isXl = useMediaQuery("(min-width:1536px)");

  
  const lang = useSelector((state: RootState) => state.lang.value.lang)
  const { card1, card2, card3, card4 } = useSelector((state: RootState) => state.lang.value.ourClients)
  
  const infoData = [
    { image: employImage, text: card1[lang], number: 15 },
    { image: employImage3, text: card2[lang], number: 20 },
    { image: employImage4, text: card3[lang], number: 40 },
    { image: employImage5, text: card4[lang], number: 6 },
  ];
  
  return (
    <>
      {!isXl && (
        <Box
          sx={{
            // display: "grid",
            // gridTemplateColumns: {
            //   xs: "1fr 1fr",
            //   sm: "1fr 1fr",
            //   md: "1fr 1fr 1fr",
            //   lg: "1fr 1fr 1fr 1fr",
            // },
            // gap: "20px",
            // justifyContent: "center",
            // mt: "24px",
          }}
          id="serivers"
          className="rows-info"
        >
          {infoData.map((info, index) => {
            return (
              <Box
                sx={{
                  background: "rgba(252, 251, 252, 1)",
                  borderRadius: "16px",
                  display: "inline-block",
                  padding: "28px 70px",
                  filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16))",
                  textAlign: "center",
                }}
                key={index}
                className="col-info"
              >
                <Image src={info.image} alt="test" width={35} height={35} />
                <Typography
                  sx={{
                    pt: "20px",
                    pb: "4px",
                    color: "rgba(114, 112, 113, 1)",
                  }}
                >
                  {info.text}
                </Typography>
                <Box
                  sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }}
                  className="fill"
                >
                  <AnimatedNumbers
                    animateToNumber={info.number}
                    fontStyle={{ fontSize: "2rem", fontWeight: "800" }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {isXl && (
        <Box className="row-info" sx={{ mt: "20px" }}>
          {infoData.map((info, index) => {
            return (
              <div className="col-info" key={index}>
                <Image src={info.image} alt="test" width={35} height={35} />
                <Typography
                  sx={{
                    pt: "20px",
                    pb: "4px",
                    color: "rgba(114, 112, 113, 1)",
                  }}
                >
                  {info.text}
                </Typography>
                <Box
                  sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }}
                  className="fill"
                >
                  <AnimatedNumbers
                    animateToNumber={info.number}
                    fontStyle={{ fontSize: "2rem", fontWeight: "800" }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers>
                </Box>
              </div>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default InfoSection;
