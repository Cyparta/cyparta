import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '@/components/layout/Footer'
import playImage from '../../assets/icons/playStore-project.png'
import adobeImage from '../../assets/icons/adobe-project.png'
import linkProject from '../../assets/icons/link-project.png'
import bagIcon from '../../assets/icons/bag-icon.png'

import Image from 'next/image'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RequestGetColDetails } from '@/store/collections/collectionsSlice'
import { RequestGetProduct } from '@/store/products/productsSlice'
import axios from 'axios'
import { AppDispatch, RootState } from '@/store/store'

interface ProductState {
    title_logo?: string;
    title?: string;
    description?: string;
    type?: string;
    tools_description?: string;
    country_logo?: string;
    images?: any;
    play_store?: string;
    app_store?: string;
    web?: string;
    launched_at?: string;
    tech_tools?: any;
    country_image?: string;
    more_description?: string;
    product_image?: string;
    product_image2?: string;
    main_image?: string;
}
const ProjectDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const col: ProductState = useSelector((state: RootState) => state.products.col)

    useEffect(() => {
        dispatch(RequestGetProduct(router.query.id))
    }, [router.query.id])
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
                                    {col?.title_logo && <img src={col.title_logo} alt="fikhdmtak" style={{ width: "20%", height: "100%" }} />}
                                    <Box sx={{ width: "321px", height: "1px", background: "rgba(204, 204, 204, 1)" }}></Box>

                                    <Box sx={{ display: "flex", gap: "32px", mt: "32px", flexWrap: "wrap" }}>
                                        <Box sx={{ display: "flex", gap: "8px" }}>
                                            {col?.country_image && <Image src={col.country_image} alt="flag" width="24" height="24" />}
                                            <Typography>{col?.country_logo}</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Image src={bagIcon} alt="flag" width="24" height="24" />
                                            <Typography>{col?.launched_at}</Typography>
                                        </Box>
                                    </Box>

                                    <Typography sx={{ mt: "16px", fontWeight: "500", lineHeight: "32px", color: " #7B7B7B" }}>
                                        {col?.description}
                                    </Typography>

                                    <Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
                                        {col?.play_store && <a href={`${col?.play_store}`} target='_blank'>
                                            <Image src={playImage} alt="test" width="32" height="32" />
                                        </a>}
                                        {col?.app_store && <a href={`${col?.app_store}`} target='_blank'>
                                            <Image src={adobeImage} alt="test" width="32" height="32" />
                                        </a>}
                                        {col?.web && <a href={`${col?.web}`} target='_blank'>
                                            <Image src={linkProject} alt="test" width="32" height="32" />
                                        </a>}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <Grid container sx={{ justifyContent: "center" }} spacing={2}>
                                    <Grid item>
                                        {col?.main_image && <img src={col?.main_image} alt="project-name" style={{ width: "100%", height: "100%", borderRadius: "6px" }} />}
                                        {/* <Box>
                                            {col?.main_image && <Image src={col?.main_image} alt="project-test" width="146" height="314" />}
                                        </Box> */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Tools Used */}
                    <Box sx={{ textAlign: "center", mt: "150px" }}>
                        <Typography sx={{ fontSize: "32px" }}>Tools Used</Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.8)", mb: "22px" }}>{col?.tools_description}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: "32px", mt: "22px", flexWrap: "wrap" }}>
                            {col?.tech_tools?.map((tech: { id: number; image: string }) => {
                                return <Box key={tech.id} sx={{ background: "rgba(37, 35, 36, 1)", padding: "20px", border: "2px solid rgba(236, 35, 43, 1)", borderRadius: "10px" }}><Image src={tech?.image} alt="tool 1" width="72" height="32" style={{ width: "100%", height: "100%" }} /></Box>
                            })}
                        </Box>
                    </Box>

                    {/* moreScreen */}
                    {col?.more_description && <Box sx={{ textAlign: "center", mt: "70px" }} className="tool-swiper">
                        <Typography sx={{ fontSize: "32px", mb: "15px", fontWeight: "400" }}>More Screens</Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.8)", mb: "32px" }}>{col?.more_description}</Typography>

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
                                1: {
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
                            {col?.images?.map((item: { id: number; image: string }) => {
                                return <SwiperSlide key={item.id} style={{ color: "#000" }}>
                                    <Box>
                                        <Image src={item?.image} alt="test" width="151" height="326" />
                                    </Box>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Box>}


                </Container>
                {/* <Box className="curve-line"></Box> */}

            </Box>
            <Footer />

        </Box>
    )
}




// export async function getInitialProps({ query }: any) {
//     try {
//         const {  id } = query;
//         const response = await axios.get(`https://cyparta-backend-gf7qm.ondigitalocean.app/apis/products/${id}/`);
//         const col = response.data;

//         return {
//             props: {
//                 col,
//             },
//         };
//     } catch (error) {
//         // Handle error case, such as redirecting to an error page
//         console.error('Error fetching product data:', error);
//         return {
//             props: {
//                 col: {},
//             },
//         };
//     }
// }



export default ProjectDetails