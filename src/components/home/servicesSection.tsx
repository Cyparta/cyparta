import { Box, Typography } from "@mui/material";
import services from "../../assets/home/services.png";
import services2 from "../../assets/home/services-2.jpg";
import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper";

const ServicesSection = () => {
    const [serviceImage, setServiceImage] = useState(services);
    const isResb = useMediaQuery("(min-width:900px)");
    return (
        <>
            {isResb &&
                <Box sx={{ position: "relative", lineHeight:"0" }} className="services">
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
                                alignItems: "end",
                            }}
                        >
                            <Box
                                className="service-box"
                                onMouseEnter={() => setServiceImage(services)}
                                onMouseLeave={() => console.log("no")}
                            >
                                <Box sx={{ fontSize: "16px", padding:"10px" }}>
                                    <Typography sx={{ fontSize: "28px", margin: "0" }}>
                                        Web development
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
                                <Box sx={{ fontSize: "16px",  padding:"10px" }}>
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
                                <Box sx={{ fontSize: "16px",  padding:"10px"  }}>
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
                                <Box sx={{ fontSize: "16px",  padding:"10px"  }}>
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
                                <Box sx={{ fontSize: "16px",  padding:"10px"  }}>
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
                    <Swiper className="service-swiper" navigation={true} modules={[Navigation]}>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight:"0" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        App development
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight:"0" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        App development
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ position: "relative", lineHeight:"0" }}>
                                <Image
                                    src={serviceImage}
                                    alt="services"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end", zIndex: "8" }}>
                                    <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                        CRM systems
                                    </Typography>{" "}
                                    <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                        cyparta is one of the top mobile app development companies
                                    </Typography>
                                </Box>
                                <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative", lineHeight:"0" }}>
                            <Image
                                src={serviceImage}
                                alt="services"
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end", zIndex: "8" }}>
                                <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    Social Media Management
                                </Typography>{" "}
                                <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                    cyparta is one of the top mobile app development companies
                                </Typography>
                            </Box>
                            <Box sx={{ background: "#0000003b", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "" }}></Box>
                        </Box>
                        </SwiperSlide>
                        <SwiperSlide><Box sx={{ position: "relative", lineHeight:"0" }}>
                            <Image
                                src={serviceImage}
                                alt="services"
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Box sx={{ fontSize: "16px", position: "absolute", width: "100%", color: "#000", top: "0", height: "100%", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "end", zIndex: "8" }}>
                                <Typography sx={{ fontSize: "20px", margin: "0", color: "#fff" }}>
                                    Penetration Testing
                                </Typography>{" "}
                                <Typography sx={{ mt: "16px", paddingBottom: "40px", color: "#fff" }}>
                                    cyparta is one of the top mobile app development companies
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
