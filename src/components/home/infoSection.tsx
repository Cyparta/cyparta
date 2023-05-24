import { Box, Grid, Typography, Stack, Container } from '@mui/material'
import React from 'react'
import employImage from '../../assets/icons/home-employs.png'
import Image from 'next/image';

const infoData = [{ image: employImage, text: "clients", number: "+10" }, { image: employImage, text: "Employees", number: "+20" }, { image: employImage, text: "Employees", number: "+20" }, { image: employImage, text: "Employees", number: "+20" }, { image: employImage, text: "Employees", number: "+20" }]
const InfoSection = () => {
    return (
        // display: "grid", gridTemplateColumns: {xs:"auto", sm:"1fr 1fr", md:'1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr"}, gap:"20px", justifyContent:"center"
        <Box sx={{ display: "grid", gridTemplateColumns: {xs:"auto", sm:"1fr 1fr", md:'1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr"}, gap:"20px", justifyContent:"center", mt:"24px"  }}>
            {infoData.map(info => {
                return <Box sx={{ background: "rgba(252, 251, 252, 1)", borderRadius: "16px", display: "inline-block", padding: "28px 64px", filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.16))", textAlign: "center" }}>
                    <Image src={info.image} alt="test" width={35} height={35} />
                    <Typography sx={{ pt: "20px", pb: "4px", color: "rgba(114, 112, 113, 1)" }}>{info.text}</Typography>
                    <Typography sx={{ fontWeight: "700", color: "#252324", fontSize: "36px" }}>{info.number}</Typography>
                </Box>
            })}
        </Box>
    )
}

export default InfoSection