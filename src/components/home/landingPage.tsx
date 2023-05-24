import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import line from '../../assets/home/line.png';

import faceIcon from '../../assets/icons/facebook.png';
import whatsIcon from '../../assets/icons/whats.png';
import linkIcon from '../../assets/icons/linkedin.png';
import cover from '../../assets/home/cover.gif';
import Lottie from 'react-lottie';
import landingAnimation from '@/assets/data.json'
import { useTheme } from '@mui/material/styles';
import MainButton from '../commons/MainButton'
const LandingPage = () => {
    const theme = useTheme();
    const { primary } = theme.palette
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: landingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Box position="relative" sx={{}}>
            <Box sx={{ position: 'absolute', top: "50%", left: "-8px", transform: "rotate(-90deg)", display: "flex" }}>
                <Box sx={{ mr: "10px" }}>
                    <Image src={linkIcon} width={10} height={10} alt="whatsapp" />
                </Box>
                <Box sx={{ mr: "10px" }}>
                    <Image src={whatsIcon} width={10} height={10} alt="whatsapp" />
                </Box>
                <Box sx={{ mr: "10px" }}>
                    <Image src={faceIcon} width={10} height={10} alt="facebook" />
                </Box>
                <div style={{ transform: "rotate(-90deg)", margin: "0 10px" }}>
                    <Image src={line} width="1" height="20" alt="line" />
                </div>
                <p style={{ padding: "0px", margin: "0px" }}>Social</p>
            </Box>
            <Box sx={{ position: "relative" }}>
                {/* <Lottie options={defaultOptions} style={{ height: "100vh" }} /> */}
                {/* <Lottie options={defaultOptions} style={{ transform: 'rotate(180deg)' }} />
                <Lottie options={defaultOptions} /> */}
                <Image src={cover} width={100} height={100} alt="line" style={{width:"100%", height:"700px"}}/>
            
                {/* <Container>
                    <Box sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
                        <Typography sx={{ mb: "32px", fontSize: { xs: "22px", sm: "40px", md: "48px" } }}>
                            We Help People To Bring <br />
                            Their <span style={{ color: danger.main, fontWeight: "700" }}>Ideas Alive</span>
                        </Typography>
                        <MainButton text='Hire Us' />
                    </Box>
                </Container> */}

            </Box>
        </Box>
    )
}

export default LandingPage