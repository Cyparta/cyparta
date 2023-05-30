import HeroPage from '@/components/commons/heroPage'
import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import coverImage from "../../assets/cover/careers-cover.png";
import Image from 'next/image'
import bagIcon from "../../assets/icons/bag-icon.png";
import fullTimeIcon from "../../assets/icons/baag-icon.png";
import siteIcon from "../../assets/icons/lap-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";
import arrowIconsCareers from "../../assets/icons/arrow-icon-careers.png";
import uploadIcon from '../../assets/icons/upload-icon.png';
import MainButton from '@/components/commons/MainButton'
import Footer from '@/components/layout/Footer'
import InputControl from '@/components/commons/InputControl'
const CareerDetails = () => {
    return (
        <Box>
            <TopNav />
            <Navbar />
            <HeroPage
                text="thinking you make a better decision more than choosing us !!"
                heading="Backend develop (Django)"
                imageCover={coverImage}
            />
            <Container>
                {/* top section  */}
                <Box
                    sx={{
                        background: "#FCFBFC",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                        mb: "24px",
                        mt:"24px"
                    }}
                >
                    <Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image
                                    src={fullTimeIcon}
                                    alt="bag"
                                    width={15}
                                    height={15}
                                />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    Full Time
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={bagIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    On Site
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={siteIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    Posted 4 months ago
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={locationIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    6th of October , mehwar markazi ,building 435
                                </p>
                            </Box>

                            <Box sx={{ width: "100%", background: "rgba(223, 223, 223, 1)", height: "1px", mt: "32px", mb: "24px" }}></Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap", gap:"10px" }}>
                                <Box sx={{ display: "flex", gap: "13px", }}>
                                    <MainButton text="Apply now" />
                                    <Box sx={{}}>
                                        <Box sx={{ border: "1px solid rgba(236, 35, 43, 1)", padding: "10px 15px", cursor: "pointer", borderRadius: "15px" }}>
                                            <Image src={uploadIcon} alt="upload" width="24" height="24" />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography sx={{ color: "rgba(114, 112, 113, 1)" }}>
                                    122 Applied
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                {/* seconad section  */}
                <Box sx={{
                    background: "#FCFBFC",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                    mb: "24px"
                }}>
                    <Typography sx={{ fontSize: "16px", mb: "16px", color: "#252324" }}>Job Description</Typography>
                    <Typography sx={{ color: "rgba(114, 112, 113, 1)" }}>
                        Responsible for developing, and maintaining the server-side components of our web applications or software systems and ensuring the functionality, performance, and security of our backend infrastructure, including databases, APIs, and data processing. Backend developers are required to work in a team alongside front end developers to ensure all elements of web creation are consistent.
                    </Typography>
                    <ul style={{ padding: "12px 30px", color: "rgba(114, 112, 113, 1)" }}>
                        <li>
                            Designing and building web applications using Laravel.
                        </li>
                        <li>
                            Troubleshooting issues in the implementation and debug builds.
                        </li>
                        <li>
                            Working with front-end and back-end developers on projects.
                        </li>
                        <li>
                            Testing functionality for users and the backend.
                        </li>
                        <li>
                            Ensuring that integrations run smoothly.
                        </li>
                        <li>
                            Scaling projects based on client feedback.
                        </li>
                        <li>
                            Maintaining web-based applications.
                        </li>
                        <li>
                            Presenting work in meetings with clients and management.
                        </li>
                    </ul>
                </Box>
                {/* Third section */}
                <Box mb="24px">
                    <Box sx={{ background: "rgba(252, 251, 252, 1)", borderRadius: "20px", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)", padding: "24px" }}>
                        <Typography sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "12px", fontWeight: "500" }}>Get In Touch With Us</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <Box sx={{ display: "flex", gap: "20px", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                                <Box sx={{ width: "100%" }}>
                                    <InputControl type='text' placeholder='name' />
                                </Box>
                                <Box sx={{ width: "100%" }}>
                                    <InputControl type="text" placeholder="Email Address" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", gap: "20px", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                                <Box sx={{ width: "100%" }}>
                                    <InputControl type='text' placeholder='Development' />
                                </Box>
                                <Box sx={{ width: "100%" }}>
                                    <InputControl type='text' placeholder='Phone number' />
                                </Box>
                            </Box>
                            <Box>
                                <textarea style={{ width: "100%", height: "65px", border: "1px solid #E1E6EF", outline: "none", borderRadius: "10px", padding: "15px" }} placeholder='Summary about you'></textarea>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <MainButton text="Send" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}

export default CareerDetails