import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '@/components/layout/Footer'
import fikhadmetkImge from '../../assets/projects/fikhadmetk.png'
import playImage from '../../assets/icons/playStore-project.png'
import adobeImage from '../../assets/icons/adobe-project.png'
import flagIcon from '../../assets/icons/flag-icons.png'
import linkProject from '../../assets/icons/link-project.png'
import bagIcon from '../../assets/icons/bag-icon.png'
import projectTest from '../../assets/projects/project-test-1.png'
import projectTest2 from '../../assets/projects/project-test-2.png'
import tools1 from '../../assets/projects/tools1.png'
import tools2 from '../../assets/projects/tools2.png'
import tools3 from '../../assets/projects/tools3.png'
import tools4 from '../../assets/projects/tools4.png'
import tools5 from '../../assets/projects/tools5.png'
import morescreen1 from '../../assets/projects/morescreen-1.png'
import morescreen2 from '../../assets/projects/morescreen-2.png'
import morescreen3 from '../../assets/projects/morescreen-3.png'
import morescreen4 from '../../assets/projects/morescreen-4.png'
import morescreen5 from '../../assets/projects/morescreen-5.png'
import morescreen6 from '../../assets/projects/morescreen-6.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from './project.module.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const ProjectDetails = () => {
    return (
        <Box>
            <TopNav />
            <Navbar />

            <Box sx={{ width: "100%", mt: "100px", position: "relative" }}>
                <Container>
                    {/* top section */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <Box>
                                    <Image src={fikhadmetkImge} alt="fikhdmtak" width="321" height="99" />
                                    <Box sx={{ width: "321px", height: "1px", background: "rgba(204, 204, 204, 1)" }}></Box>

                                    <Box sx={{ display: "flex", gap: "32px", mt: "32px", flexWrap: "wrap" }}>
                                        <Box sx={{ display: "flex", gap: "8px" }}>
                                            <Image src={flagIcon} alt="flag" width="24" height="24" />
                                            <Typography>Egypt</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Image src={bagIcon} alt="flag" width="24" height="24" />
                                            <Typography>20/5/2023</Typography>
                                        </Box>
                                    </Box>

                                    <Typography sx={{ mt: "16px", width: {sm:"393px"}, fontWeight: "500", lineHeight: "32px", color: " #7B7B7B" }}>
                                        thinking you make a better decision more than choosing us !! thinking you make a better decision more than choosing us !!thinking you make a better decision more than choosing us !!
                                    </Typography>

                                    <Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
                                        <Link href="/">
                                            <Image src={playImage} alt="test" width="32" height="32" />
                                        </Link>
                                        <Link href="/">
                                            <Image src={adobeImage} alt="test" width="32" height="32" />
                                        </Link>
                                        <Link href="/">
                                            <Image src={linkProject} alt="test" width="32" height="32" />
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <Grid container sx={{ justifyContent: "center" }} spacing={2}>
                                    <Grid item>
                                        <Box>
                                            <Image src={projectTest} alt="project-test" width="146" height="314" />
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{mt:{md:"15px"}}}>
                                            <Image src={projectTest2} alt="project-test" width="146" height="314" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Tools Used */}
                    <Box sx={{ textAlign: "center", mt: "150px" }}>
                        <Typography sx={{ fontSize: "32px" }}>Tools Used</Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.8)", mb: "22px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: "32px", mt: "22px", flexWrap:"wrap" }}>
                            <Box sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tools1} alt="tool 1" width="72" height="32" style={{width:"100%", height:"100%"}}/></Box>
                            <Box sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tools2} alt="tool 2" width="72" height="32" style={{width:"100%", height:"100%"}}/></Box>
                            <Box sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tools3} alt="tool 3" width="72" height="32" style={{width:"100%", height:"100%"}}/></Box>
                            <Box sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tools4} alt="tool 4" width="72" height="32" style={{width:"100%", height:"100%"}}/></Box>
                            <Box sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tools5} alt="tool 5" width="72" height="32" style={{width:"100%", height:"100%"}} /></Box>
                        </Box>
                    </Box>

                    {/* Tools Used */}
                    <Box sx={{ textAlign: "center", mt: "70px" }} className="tool-swiper">
                        <Typography sx={{ fontSize: "32px", mb: "15px", fontWeight: "400" }}>More Screens</Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.8)", mb: "32px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Typography>

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={6}
                            spaceBetween={10}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1:{
                                    width: 1,
                                    slidesPerView: 1
                                },
                                300: {
                                    width: 300,
                                    slidesPerView: 2
                                },
                                575: {
                                    width: 575,
                                    slidesPerView: 3,
                                },
                                991: {
                                    width: 991,
                                    slidesPerView: 6,
                                },
                            }}
                        >
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen1} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen2} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen2} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen3} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen4} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen5} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide style={{ color: "#000" }}>
                                <Box>
                                    <Image src={morescreen6} alt="test" width="151" height="326" />
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                    </Box>

                </Container>
                <Box className="curve-line"></Box>

            </Box>
            <Footer />

        </Box>
    )
}

export default ProjectDetails