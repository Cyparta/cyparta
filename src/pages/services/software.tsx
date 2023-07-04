import Footer from '@/components/layout/Footer'
import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import { Box, Grid, Typography, Container } from "@mui/material";
import services from '@/assets/services/software.png';
import Image from 'next/image';
import { MainButton } from '@/style/style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';

const Design = () => {
    const lang = useSelector((state: RootState) => state.lang.value.lang)
    return (
        <div>
            <TopNav />
            <Navbar />
            <Container>
                <Box sx={{ mt: "64px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}>Software management system</Typography>
                            <Typography sx={{ mb: "24px" }}>
                                The utilization of software management tools is crucial for companies aiming to enhance their performance and streamline their operations. These tools can assist companies in optimizing and automating various business processes, leading to increased effectiveness, productivity, and profitability.
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Software management tools provide companies with real-time visibility into their operations, enabling them to make informed decisions and respond quickly to changing market conditions. These tools can help companies manage their resources, such as personnel, time, and funds, more effectively, reducing waste and maximizing their utilization.

                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Moreover, software management tools can help companies improve collaboration and communication among employees, teams, and departments. They provide a centralized platform for sharing information, tracking progress, and managing tasks, which can enhance coordination, reduce errors, and save time.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: lang === 'en' ? "right" : "left" }}>
                            <Image src={services} alt="test" />
                        </Grid>
                    </Grid>
                </Box>

                <Typography>
                    Examples of software management tools include project management software, collaboration software, time tracking software, and task management software. These tools can be tailored to meet the specific needs of a company, and they can be integrated with other systems, such as CRM and ERP, for even greater efficiency and effectiveness.
                    In conclusion, incorporating software management tools is essential for companies seeking to improve their performance and achieve their business objectives. These tools can help companies automate and optimize their operations, enhance collaboration and communication, and maximize their resources. Companies should invest in these tools to stay competitive in today's market and achieve long-term success.
                </Typography>

                <Link href="/contact">
                    <MainButton sx={{ mt: "32px" }}>Hire Us</MainButton>
                </Link>

            </Container>
            <Footer />
        </div>
    )
}

export default Design