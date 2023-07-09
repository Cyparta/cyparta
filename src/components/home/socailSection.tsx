import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import faceIcon from '../../assets/icons/facebook.png';
import whatsIcon from '../../assets/icons/whats.png';
import linkIcon from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import meetoor from '../../assets/icons/meetoor.png';
import line from '../../assets/icons/lineSocial.png'
const SocailSection = () => {

    // https://www.facebook.com/CypartaCompany
    return (
        <Box sx={{ position: 'fixed', top: "50%", left: "-93px", display: {xs:"none", md:"flex"}, zIndex: 800, alignItems: "center", transform: "rotate(-90deg)" }}>
            <Box sx={{ mr: "10px" }}>
                <a href="https://twitter.com/CypartaCompany" target='_blank'>
                    <Image src={twitter} width={24} height={24} alt="twitter" />
                </a>
            </Box>
            <Box sx={{ mr: "10px" }}>
                <a href="https://meetoor.com/profile/?p=cyparta7773389" target='_blank'>
                    <Image src={meetoor} width={24} height={24} alt="facebook" />
                </a>
            </Box>
            <Box sx={{ mr: "10px" }}>
                <a href="https://www.linkedin.com/company/cyparta/" target="_blank">
                    <Image src={linkIcon} width={24} height={24} alt="linkedin" />
                </a>
            </Box>
            <Box sx={{ mr: "10px" }}>
                <a href="https://wa.me/+2001017204584/?text=HiCyparta" target="_blank">
                    <Image src={whatsIcon} width={24} height={24} alt="whatsapp" />
                </a>
            </Box>
            <Box sx={{ mr: "10px" }}>
                <a href="https://www.facebook.com/CypartaCompany" target='_blank'>
                    <Image src={faceIcon} width={24} height={24} alt="facebook" />
                </a>
            </Box>

            <Box>
                <Box sx={{ width: "60px", height: "1px", background: "#000" }}></Box>
            </Box>
            <p style={{ padding: "0px", margin: "8px", fontSize: "19px" }}>Social</p>
        </Box>
    )
}

export default SocailSection