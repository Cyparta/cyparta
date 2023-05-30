import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from '../../assets/projects/project-1.png';
import project2 from '../../assets/projects/project-2.png';
import arrowNext from '../../assets/home/arrow-next.png';
import arrowPrev from '../../assets/home/arrow-prev.png';
import { FreeMode, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import MainButton from '../commons/MainButton';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Autoplay } from "swiper";

const ProjectSection = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <Box className="project-section">
            <Typography sx={{ color: "rgba(37, 35, 36, 1)", mt: "32px", mb: "30px", textAlign: "center", fontWeight: "500", fontSize: "24px" }}>Latest Projects</Typography>
            <Swiper
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                onSlideChange={(e) => console.log('slide change')}
                onSwiper={(swiper:any) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current

                        // Re-init navigation
                        swiper.navigation.destroy()
                        swiper.navigation.init()
                        swiper.navigation.update()
                    })
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation]}
                breakpoints={{
                    1: {
                        width: 300,
                        slidesPerView: 1
                    },
                    575: {
                        width: 575,
                        slidesPerView: 2,
                    },
                    991: {
                        width: 991,
                        slidesPerView: 5,
                    },
                }}
            >
                <SwiperSlide>
                    <Box>
                        <Image src={project1} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Image src={project2} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Image src={project1} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Image src={project1} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Image src={project1} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                        <Image src={project1} alt="project Name"  style={{width:"100%"}}/>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <Image src={project2} alt="project Name"  style={{width:"100%"}}/>
                    </Box>
                    <Box className="swiper-info">
                        Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.
                    </Box>
                </SwiperSlide>

                <Box sx={{display:"flex", justifyContent:"center", gap:"10px", mt:"20px"}}>
                    <div ref={navigationPrevRef} className='swiper-next'>
                        <NavigateBeforeIcon />
                    </div>
                    <div ref={navigationNextRef} className='swiper-prev'>
                        <NavigateNextIcon />
                    </div>
                </Box>
            </Swiper>

            <Box sx={{ display: "flex", justifyContent: "center", mt: "38px", mb: "92px" }}>
                <Link href="/projects">
                    <MainButton text='View all Projects' />
                </Link>
            </Box>
        </Box >
    )
}

export default ProjectSection





