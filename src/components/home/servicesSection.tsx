import { Box, Typography } from "@mui/material";
import services1 from "@/assets/home/services-1.jpg";
import services2 from "@/assets/home/services-2.jpg";
import services3 from "@/assets/home/services-3.jpg";
import services4 from "@/assets/home/services-4.jpg";
import services5 from "@/assets/home/services-5.jpg";
import services6 from "@/assets/home/services-6.jpg";
import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ServicesSection = () => {
    const [serviceImage, setServiceImage] = useState(services1);
    const isResb = useMediaQuery("(min-width:900px)");

    const lang = useSelector((state: RootState) => state.lang.value.lang);
    const services = useSelector((state: RootState) => state.lang.value.services);

    return (
        <>
            {isResb &&
                <Box sx={{ position: "relative", lineHeight: "0" }} className="services">
                    <Box>
                        <Image
                            src={serviceImage}
                            alt="services"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            top: "0px",
                            height: "100%",
                            lineHeight: 0
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                height: "100%",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services1)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.web.heading[lang]}
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.web.text[lang]}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services2)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.app.heading[lang]}

                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.app.text[lang]}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services3)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.management.heading[lang]}

                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.management.text[lang]}

                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services4)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.technical.heading[lang]}
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.technical.text[lang]}

                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services5)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.ui.heading[lang]}
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.ui.text[lang]}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services6)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        {services.cypar.heading[lang]}
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        {services.cypar.text[lang]}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
            {!isResb && (
                <Box className="">
                    <Swiper className="service-swiper" navigation={true} modules={[Navigation]}>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight: "0" }}>
                                <Image
                                    src={services1}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        {services.web.heading[lang]}
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        {services.web.heading[lang]}
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight: "0" }}>
                                <Image
                                    src={services2}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        {services.app.heading[lang]}

                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        {services.app.heading[lang]}
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight: "0" }}>
                                <Image
                                    src={services3}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        {services.management.heading[lang]}

                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        {services.management.text[lang]}
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative", lineHeight: "0" }}>
                            <Image
                                src={services4}
                                alt="services"
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    {services.technical.heading[lang]}

                                </Typography>{" "}
                                <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                    {services.technical.text[lang]}
                                </Typography>
                            </Box>
                            <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                        </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative", lineHeight: "0" }}>
                            <Image
                                src={services5}
                                alt="services"
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    {services.ui.heading[lang]}

                                </Typography>{" "}
                                <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                    {services.ui.text[lang]}
                                </Typography>
                            </Box>
                            <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                        </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative", lineHeight: "0" }}>
                            <Image
                                src={services6}
                                alt="services"
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", zIndex: "8" }}>
                                <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    {services.cypar.heading[lang]}
                                    
                                </Typography>{" "}
                                <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                    {services.cypar.text[lang]}
                                </Typography>
                            </Box>
                            <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                        </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            )}
        </>
    );
};

export default ServicesSection;
