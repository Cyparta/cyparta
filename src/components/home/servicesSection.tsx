import { Box, Typography } from "@mui/material";
import services from "../../assets/home/services.png";
import services2 from "../../assets/home/services-2.jpg";
import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ServicesSection = () => {
    const [serviceImage, setServiceImage] = useState(services);
    const isResb = useMediaQuery("(min-width:900px)");
    return (
        <>
            {isResb &&
                <Box sx={{ position: "relative" }} className="services">
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
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                height: "99%",
                                alignItems: "end",
                            }}
                        >
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        App development
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services2)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        App development
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services2)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        CRM systems
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        Social Media Management
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services2)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        Penetration Testing
                                    </Typography>{" "}
                                    <br />
                                    <Typography sx={{ mt: "14px" }} className="services-hover">
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
            {!isResb && (
                <Box className="">
                    <Swiper className="mySwiper">
                        <SwiperSlide>
                            <Box sx={{ position: "relative" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        App development
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ position: "relative" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        App development
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Box sx={{ position: "relative" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    CRM systems
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    Social Media Management
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box></SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    Penetration Testing
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                            </Box></SwiperSlide>
                    </Swiper>
                </Box>
            )}
        </>
    );
};

export default ServicesSection;
