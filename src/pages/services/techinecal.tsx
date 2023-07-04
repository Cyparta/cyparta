// Technical consulting

import Footer from '@/components/layout/Footer'
import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import { Box, Grid, Typography, Container } from "@mui/material";
import services from '@/assets/services/techinecal.png';
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
                <Box sx={{ mt: "64px", mb: "70px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}>Technical consulting</Typography>
                            <Typography sx={{ mb: "24px" }}>
                                One of the most crucial aspects of technical consultation is its role in safeguarding a company's data. With the increasing use of technology, cyber threats have become more sophisticated and frequent. Technical consultation can help companies identify potential vulnerabilities in their systems and provide solutions to mitigate these risks. By implementing the recommendations provided by technical consultants, companies can significantly reduce the risk of data breaches and cyber-attacks.
                            </Typography>
                            <Typography sx={{ mb: "24px" }}>
                                Another benefit of technical consultation is that it can help companies stay up-to-date with the latest trends and developments in technology. As technology continues to evolve rapidly, it can be challenging for companies to keep up with the latest advancements. Technical consultants can provide valuable insights into emerging technologies and help companies leverage these technologies to gain a competitive edge in the market.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: lang === 'en' ? "right" : "left" }}>
                            <Image src={services} alt="test" />
                        </Grid>
                    </Grid>
                    <Typography>
                        In addition to providing guidance on data security and technology trends, technical consultation can also help companies manage their software and applications more effectively. Technical consultants can identify areas where software and applications can be optimized to improve performance, reduce downtime, and enhance the user experience.
                        In summary, technical consultation is an essential service that can help companies optimize their operations, safeguard their data, and stay up-to-date with the latest technology trends. By investing in technical consultation, companies can ensure that they are well-positioned to compete in today's digital landscape.</Typography>
                    <Link href="/contact">
                        <MainButton sx={{ mt: "32px" }}>Hire Us</MainButton>
                    </Link>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}

export default Design