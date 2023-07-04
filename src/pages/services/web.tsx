import Footer from '@/components/layout/Footer'
import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import { Box, Grid, Typography, Container } from "@mui/material";
import services from '@/assets/services/web.png';
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
                <Box sx={{ mt: "64px", mb: "70px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}>Web development</Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Web development plays a vital role in your Business Website& Web Application success, Web Development is the core( back- end) coding of your application or your business website .
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>As a Web Development company CYPARTA provides Web Development services, to deliver complete professional Business Web Applications that you can rely on .</Typography>
                            <Typography sx={{ mb: "24px" }}>CYPARTA successfully delivered many web applications on different scales ; please visit our Projects page for more information about our delivered projects and apps .</Typography>

                            <Link href="/#contact">
                                <MainButton sx={{ mt: "32px" }}>Hire Us</MainButton>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: lang === 'en' ? "right" : "left" }}>
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