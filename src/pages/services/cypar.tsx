import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import services from "@/assets/services/cypar.png";
import Image from "next/image";
import { MainButton } from "@/style/style";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Design = () => {
    const lang = useSelector((state: RootState) => state.lang.value.lang);
    return (
        <div>
            <TopNav />
            <Navbar />
            <Container>
                <Box sx={{ mt: "64px", mb: "70px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}
                            >
                                cybar security
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Information is the oil of this age," this saying reflects an
                                important truth that cannot be ignored. In the time we live in,
                                protecting your information is the top priority when it comes to
                                the world of online commerce. With the increasing use of
                                technology, cyber threats have become more advanced and
                                widespread.
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                {" "}
                                Therefore, it is essential for companies to take this matter
                                seriously and protect their sensitive information to avoid
                                financial losses and trade secrets theft. Cyber-attacks should
                                not disrupt services and lead to a loss of productivity, and in
                                some cases, companies are forced to pay ransom demands to regain
                                access to their data and systems.
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Our team of experienced designers uses the latest design tools
                                and techniques to create engaging user interfaces that enhance
                                the user experience. We focus on creating designs that are
                                simple, clear, and easy to navigate, ensuring that users can
                                quickly and easily find what they need.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{ textAlign: lang === "en" ? "right" : "left" }}
                        >
                            <Image src={services} alt="test" />
                        </Grid>
                    </Grid>

                    <Typography>
                        Therefore, it is necessary for companies to take the necessary
                        measures to protect their data and systems from cyber threats. This
                        includes implementing firewalls, anti-virus and malware programs,
                        maintaining the use of strong and secure passwords, and providing
                        training to employees on cyber security practices. Through this, the
                        company ensures the confidentiality and safety of its data and
                        systems, which is crucial to maintaining its competitiveness in
                        today's digital world.
                    </Typography>
                    <Link href="/#contact">
                        <MainButton sx={{ mt: "32px" }}>Hire Us</MainButton>
                    </Link>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default Design;
