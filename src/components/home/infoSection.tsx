import { Box, Typography } from '@mui/material'
import React from 'react'
import employImage from '../../assets/icons/home-employs.png'
import employImage2 from '../../assets/icons/home-employs-2.png'
import employImage3 from '../../assets/icons/home-employs-3.png'
import employImage4 from '../../assets/icons/home-employs-4.png'
import employImage5 from '../../assets/icons/home-employs-5.png'
import Image from 'next/image';
// import CountUp from 'react-countup';
const infoData = [{ image: employImage, text: "Employees", number: 10 }, { image: employImage2, text: "clients", number: 20 }, { image: employImage3, text: "Partners", number: 20 }, { image: employImage4, text: "Projects", number: 20 }, { image: employImage5, text: "Years of experience", number: 20 }]
const InfoSection = () => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "auto", sm: "1fr 1fr", md: '1fr 1fr 1fr', lg: "1fr 1fr 1fr 1fr 1fr" }, gap: "20px", justifyContent: "center", mt: "24px" }}>
            {infoData.map((info, index) => {
                return <Box sx={{ background: "rgba(252, 251, 252, 1)", borderRadius: "16px", display: "inline-block", padding: "28px 64px", filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16))", textAlign: "center" }} key={index}>
                    <Image src={info.image} alt="test" width={35} height={35} />
                    <Typography sx={{ pt: "20px", pb: "4px", color: "rgba(114, 112, 113, 1)" }}>{info.text}</Typography>
                    <Typography sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }}>
                        + {info.number}
                    </Typography>
                </Box>
            })}
        </Box>
    )
}

export default InfoSection