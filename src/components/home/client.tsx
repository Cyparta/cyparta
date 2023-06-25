import React, { useRef, useState } from "react";
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography } from "@mui/material";
import client1 from '../../assets/clients/client-1.png'
import client2 from '../../assets/clients/client-2.png'
import client3 from '../../assets/clients/client-3.png'
import client4 from '../../assets/clients/client-4.png'
import client5 from '../../assets/clients/client-5.png'
import client6 from '../../assets/clients/client-6.png'
import client7 from '../../assets/clients/client-7.png'
import client8 from '../../assets/clients/client-8.png'
import client9 from '../../assets/clients/client-9.png'
import client10 from '../../assets/clients/client-10.png'
import client11 from '../../assets/clients/client-11.png'
import client12 from '../../assets/clients/client-12.png'

import client1hover from '../../assets/clients/client-1-hover.png'
import client2hover from '../../assets/clients/client-2-hover.png'
import client3hover from '../../assets/clients/client-3-hover.png'
import client4hover from '../../assets/clients/client-4-hover.png'
import client5hover from '../../assets/clients/client-5-hover.png'
import client6hover from '../../assets/clients/client-6-hover.png'
import client7hover from '../../assets/clients/client-7-hover.png'
import client8hover from '../../assets/clients/client-8-hover.png'
import client9hover from '../../assets/clients/client-9-hover.png'
import client10hover from '../../assets/clients/client-10-hover.png'
import client11hover from '../../assets/clients/client-11-hover.png'
import client12hover from '../../assets/clients/client-12-hover.png'



import ClientContainer from "./clientContainer";
// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";
import { Autoplay } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const Client = () => {
    const [image, setImage] = useState(client1);
    
    const lang = useSelector((state: RootState) => state.lang.value.lang)
    const partner = useSelector((state: RootState) => state.lang.value.partner)

    return (
        <div>
            <Typography sx={{ color: "rgba(37, 35, 36, 1)", mt: "80px", mb: "30px", textAlign: "center", fontWeight: "500", fontSize: "24px" }}>{partner[lang]}</Typography>
            <Swiper
                // install Swiper modules
                modules={[A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={6}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1: {
                        width: 300,
                        slidesPerView: 2
                    },
                    575: {
                        width: 575,
                        slidesPerView: 3,
                    },
                    991: {
                        width: 991,
                        slidesPerView: 5,
                    },
                }}
                centeredSlides={true}
            >

                <SwiperSlide>
                    <Box sx={{ textAlign: "center" }}>
                        <ClientContainer client={client1hover} clientHover={client1} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ textAlign: "center" }}>
                        <ClientContainer client={client2hover} clientHover={client2} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box >
                        <ClientContainer client={client3hover} clientHover={client3} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client4hover} clientHover={client4} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        
                        <ClientContainer client={client5hover} widthImg="200px !important" heightImg="80px !important" clientHover={client5} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client6hover} clientHover={client6} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client7hover} clientHover={client7} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client8hover} clientHover={client8} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client9hover} clientHover={client9} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client10hover} clientHover={client10} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client11hover} clientHover={client11} />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box>
                        <ClientContainer client={client12hover} clientHover={client12} />
                    </Box>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Client