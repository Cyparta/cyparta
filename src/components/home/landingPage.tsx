import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
// import line from '../../assets/home/line.png';


import cover from '../../assets/home/cover.gif';
import landingAnimation from '@/assets/data.json'
import { useTheme } from '@mui/material/styles';
// import MainButton from '../commons/MainButton';
import { MainButton } from '@/style/style';


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
        <Box position="relative">
            <Box sx={{ position: "relative", textAlign:"center" }}>

                <Image src={cover} width={100} height={100} alt="line" style={{width:"40%", height:"auto"}}/>
            
                {/* <Container>
                    <Box sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
                        <Typography sx={{ mb: "32px", fontSize: { xs: "22px", sm: "40px", md: "48px" } }}>
                            We Help People To Bring <br />
                            Their <span style={{ color: danger.main, fontWeight: "700" }}>Ideas Alive</span>
                        </Typography>
                        <MainButton text='Hire Us' />
                        <MainButton>Hire Us</MainButton>
                    </Box>
                </Container> */}

            </Box>
        </Box>
    )
}

export default LandingPage