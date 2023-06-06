import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import MainButton from "../commons/MainButton";
import {MainButton} from '../../style/style';
import AboutImage from "../../assets/home/about-1.png";
import AboutImage2 from "../../assets/home/about-2.png";
import curvedImage from "../../assets/home/curved-arrow-.png";
import Image from "next/image";
// import Lottie from 'react-lottie';
// import aboutAnimation from "../../assets/home/about-animation.json";

const AboutSection = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: aboutAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };
    return (
        <Box className="spad">
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {md:"column", xs:"row"},
                            flexWrap: "wrap",
                            justifyContent:"center",
                            gap: "0px 40px",
                            position: "relative",
                            mt: "24px",
                        }}
                    >
                        <Box alignSelf={"end"} sx={{mt: {md:"24px"}}}>
                            <Image
                                src={AboutImage}
                                alt="about"
                                width={200}
                                height={200}
                                style={{
                                    borderRadius: "16px",
                                    zIndex: "8",
                                    position: "relative",
                                }}
                            />
                        </Box>
                        <Box>
                            <Image
                                src={AboutImage2}
                                alt="about"
                                width={200}
                                height={200}
                                style={{
                                    borderRadius: "16px",
                                    zIndex: "8",
                                    position: "relative",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <Image src={curvedImage} alt="curved" width={100} height={100} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} sx={{position:"relative"}}>
                    <Box >
                        <Typography
                            sx={{
                                color: "rgba(37, 35, 36, 1)",
                                fontSize: "24px",
                                fontWeight: "500",
                                marginBottom: "24px",
                                textAlign:{xs:"center", md:"left"}
                            }}
                        >
                            About us
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                textAlign: "center",
                                marginBottom: "32px",
                                lineHeight: "24px",
                                letterSpacing: "-0.5px",
                                marginTop: {md:"105px"}
                            }}
                        >
                            Since our inception, We have been striving to create your own
                            story in the world of digital Marketing, by providing all the
                            digital services and solutions you need to create and establish
                            your base and build your reputation and close relationships with
                            customers to reach the highest sales rate,through a team of
                            specialists in their field.
                        </Typography>

                        {/* <Box sx={{position:"absolute", top:"0"}}>
                            <Lottie options={defaultOptions} />
                        </Box>
                         */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <MainButton>Download PDF</MainButton>
                    </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;
