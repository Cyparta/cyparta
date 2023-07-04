import Footer from '@/components/layout/Footer'
import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import { Box, Grid, Typography, Container } from "@mui/material";
import services from '@/assets/services/mobile.png';
import Image from 'next/image';
import { MainButton } from '@/style/style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';

const Design = () => {
    const lang = useSelector((state: RootState) => state.lang.value.lang)
    return (
        <div>
            <TopNav />
            <Navbar />
            <Container>
                <Box sx={{mt:"64px", mb:"70px"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}>Mobile development</Typography>
                            <Typography sx={{ mb: "24px" }}>
                            When it comes to Mobile Development services, CYPARTA is one of the top mobile app development companies, has far more in mind than simply providing you with a running mobile app in the store. To us, a mobile app can be a key to success and we would like to make that possible .
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>CYPARTA's team consists of experienced mobile app developers working on different platforms( iOS, Android, and Windows Phone) to build Native platform- specific mobile apps for high performance, high availability and better user experience .</Typography>
                            <Typography sx={{ mb: "24px" }}>CYPARTA successfully delivered many mobile apps on different platforms ; please visit Our Projects page for more information about our published applications .</Typography>

                            <Link href="/#contact">
                                <MainButton>Hire Us</MainButton>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{textAlign: lang === 'en' ? "right" : "left"}}>
                            <Image src={services} alt="test" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default Design