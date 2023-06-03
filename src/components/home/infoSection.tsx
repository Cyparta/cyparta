import { Box, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import employImage from '../../assets/icons/home-employs.png'
import employImage2 from '../../assets/icons/home-employs-2.png'
import employImage3 from '../../assets/icons/home-employs-3.png'
import employImage4 from '../../assets/icons/home-employs-4.png'
import employImage5 from '../../assets/icons/home-employs-5.png'
import Image from 'next/image';
// import CountUp from 'react-countup';
import { CountUp } from 'use-count-up';
import ScrollTrigger from 'react-scroll-trigger';
import dynamic from "next/dynamic";
import useMediaQuery from '@mui/material/useMediaQuery';
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
const infoData = [{ image: employImage, text: "Employees", number: 10 }, { image: employImage2, text: "clients", number: 50 }, { image: employImage3, text: "Partners", number: 2 }, { image: employImage4, text: "Projects", number: 70 }, { image: employImage5, text: "experience", number: 60 }]
const InfoSection = () => {
    const [counterOn, setCounterOn] = useState(false)
    const [test, setTest] = useState(1000)
    const [serv, setServ] = useState(10)
    const isXl = useMediaQuery('(min-width:1536px)');

    console.log(isXl)

    return (

        <>
            {!isXl && <Box sx={{ display: "grid", gridTemplateColumns: { xs: "auto", sm: "1fr 1fr", md: '1fr 1fr 1fr', lg: "1fr 1fr 1fr 1fr 1fr" }, gap: "20px", justifyContent: "center", mt: "24px" }} id='serivers'>
                {infoData.map((info, index) => {
                    return <Box sx={{ background: "rgba(252, 251, 252, 1)", borderRadius: "16px", display: "inline-block", padding: "28px 70px", filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16))", textAlign: "center" }} key={index}>
                        <Image src={info.image} alt="test" width={35} height={35} />
                        <Typography sx={{ pt: "20px", pb: "4px", color: "rgba(114, 112, 113, 1)" }}>{info.text}</Typography>
                        <Box sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }} className="fill">
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
                })}

            </Box>}



            {isXl &&
                <Box className="row-info" sx={{mt:"20px"}}>
                    {infoData.map((info, index) => {
                        return <div className="col-info" key={index}>
                        <Image src={info.image} alt="test" width={35} height={35} />
                        <Typography sx={{ pt: "20px", pb: "4px", color: "rgba(114, 112, 113, 1)" }}>{info.text}</Typography>
                        <Box sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }} className="fill">
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
                    })}
                </Box>}

        </>

    )
}

export default InfoSection