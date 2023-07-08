import React, { useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import offerLine from '../../assets/offer/1.png'
import qrCode from '../../assets/offer/qrcode.png'
import Image from 'next/image';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const OfferRequest = () => {
    return (
        <Box>
            <Typography component="h1" variant="h3" sx={{ textAlign: "center", mb: "40px" }}>Offer Price request</Typography>

            <Box sx={{ border: "0.5px solid #9D9D9D", borderRadius: "10px", padding: "40px 24px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ fontSize: "14px" }}>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>Name <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>Nada Medhat shalaby</Typography></Typography>
                            </Box>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>phone Number <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>+20 0101 720 4584</Typography></Typography>
                            </Box>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>Email address <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>Nada@gmail.com</Typography></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ justifySelf: "end" }}>
                        <Box sx={{ fontSize: "14px" }}>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>Country <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>Egypt</Typography></Typography>
                            </Box>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>Type of request <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>CRM</Typography></Typography>
                            </Box>
                            <Box sx={{ paddingBottom: "8px" }}>
                                <Typography>Invoice date <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>50/5/2023</Typography></Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* line */}
                <Box sx={{ background: "rgba(157, 157, 157, 1)", height: "0.5px", width: "100%", my: "16px" }}></Box>

                <Box sx={{ paddingBottom: "8px" }}>
                    <Typography>Proposed budget <Typography component="span" sx={{ color: "rgba(157, 157, 157, 1)", ml: "8px" }}>600 $</Typography></Typography>
                </Box>


                {/* line */}
                <Box sx={{ background: "rgba(157, 157, 157, 1)", height: "0.5px", width: "100%", my: "16px" }}></Box>

                <Typography sx={{ fontSize: "16px", color: "#121212", fontWeight: "400", mb: "8px" }}>
                    Write a brief about your services and products required on the site ?
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#9D9D9D", fontWeight: "400", lineHeight: "24px" }}>
                    service description is a form of marketing copy that describes a business's offerings to customers. For example, an online retailer will provide product descriptions on its website about the apparel items it sells. Beyond explaining what the product or service is, these descriptions also typically demonstrate why the products or services are worth buying. Providing specific details, such as the benefits or features, can help differentiate the offerings from others in the market and attract customers' attention.
                </Typography>


                <Box>
                    <Typography sx={{ fontSize: "16px", color: "#121212", fontWeight: "400", mb: "8px", mt: "32px" }}>
                        What are the sites that you like and see fit for your idea of ​​design and programming ?
                    </Typography>
                    <ul style={{ padding: "0 20px", color: "rgba(157, 157, 157, 1)" }}>
                        <li>Colorable</li>
                        <li>Archetype</li>
                    </ul>
                </Box>

                <Box>
                    <Typography sx={{ fontSize: "16px", color: "#121212", fontWeight: "400", mb: "8px", mt: "32px" }}>
                        Other notes and additions ?
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#9D9D9D", fontWeight: "400", lineHeight: "24px" }}>
                        No answer
                    </Typography>
                </Box>
            </Box>


            <Box sx={{ position: "relative", mt: "46px" }}>
                <Image src={offerLine} alt="test" style={{ width: "100%" }} />
                <Box sx={{ paddingLeft: "150px", position: "absolute", top: "5px" }}>
                    <Image src={qrCode} alt="test" style={{ width: "100%", height: "100%" }} />
                </Box>
            </Box>

            <Grid container sx={{ mt: "60px" }}>
                <Grid item xs={12} sm={6} sx={{ alignSelf: "end" }}>
                    <Box sx={{ alignSelf: "end" }}>
                        <Box sx={{ display: "flex", gap: "16px" }}>
                            <a href="https://meetoor.com/profile/?p=cyparta7773389">
                                <Box sx={{ width: "40px", height: "40px", border: "1px solid rgba(204, 204, 204, 1)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                    <FacebookOutlinedIcon sx={{ color: "rgba(59, 89, 152, 1)" }} />
                                </Box>
                            </a>
                            <a href="https://wa.me/+2001017204584/?text=HiCyparta">
                                <Box sx={{ width: "40px", height: "40px", border: "1px solid rgba(204, 204, 204, 1)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                    <WhatsAppIcon sx={{ color: "rgba(37, 211, 102, 1)" }} />
                                </Box>
                            </a>
                            <a href="https://www.linkedin.com/company/cyparta/">
                                <Box sx={{ width: "40px", height: "40px", border: "1px solid rgba(204, 204, 204, 1)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                    <LinkedInIcon sx={{ color: "rgba(0, 119, 181, 1)" }} />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <LocalPhoneIcon />
                            <Box>
                                <Typography>
                                    <a href="tel:+20 0101 720 4584">+20 0101 720 4584</a>
                                </Typography>

                                <Typography>
                                    <a href="tel:+1 (312) 270-0815">+1 (312) 270-0815</a>
                                </Typography>
                            </Box>

                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <LocationOnIcon />
                            <Typography>
                                Mehwar markazi , 6 th of october , giza
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <MailOutlineIcon />
                            <Typography>
                                Support@cyparta.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default OfferRequest