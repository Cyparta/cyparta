import React from 'react'
import { Box, Typography, Grid, TextField } from '@mui/material';
import MainButton from '../commons/MainButton';
import Image from 'next/image';
import MapImage from '../../assets/home/map.png';
import InputControl from '@/components/commons/InputControl'
import messageIcon from '../../assets/icons/message-icon.png'
import phoneIcon from '../../assets/icons/phone-icon.png'
import timeIcon from '../../assets/icons/time-icon.png'
import Client from './client';
const ContactUs = () => {
    return (
        <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "500", textAlign: "center", mb: "24px" }}>Contact Us</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
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
                                <textarea style={{ width: "100%", height: "65px", border: "1px solid #E1E6EF", outline: "none", borderRadius: "10px", padding: "15px" }} placeholder='Write your question here'></textarea>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <MainButton text="Send" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box>
                        <Image src={MapImage} alt="map" width={400} height={400} style={{ width: "100%", height: "323px" }} />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{background: "#FCFBFC", borderRadius: "20px", boxShadow:" 0px 1px 4px rgba(0, 0, 0, 0.16)"}}>
                <Grid container spacing={3} sx={{  mt: "24px", borderRadius: "20px", padding:"0 20px" }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: "flex", gap: "16px", justifyContent: "center", mt: "32px", mb: "32px" }}>
                            <Box sx={{ background: "rgba(63, 60, 61, 1)", borderRadius: "50%", width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #EC232B" }}>
                                <Image src={phoneIcon} alt="test" width={32} height={32} />
                            </Box>
                            <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                                <Typography sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}>Phone</Typography>
                                <div style={{ fontSize: "16px", fontWeight: "400" }}>
                                    +20 0101 720 4584 <br />
                                    +1 (312) 270-0815
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: "flex", gap: "16px", justifyContent: "center", mt: "32px", mb: "32px" }}>
                            <Box sx={{ background: "rgba(63, 60, 61, 1)", borderRadius: "50%", width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #EC232B" }}>
                                <Image src={timeIcon} alt="test" width={32} height={32} />
                            </Box>
                            <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                                <Typography sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}>Working time</Typography>
                                <div style={{ fontSize: "16px", fontWeight: "400" }}>
                                    Sat - Wed : 9:00 AM - 6:00 PM
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: "flex", gap: "16px", justifyContent: "center", mt: "32px", mb: "32px" }}>
                            <Box sx={{ background: "rgba(63, 60, 61, 1)", borderRadius: "50%", width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #EC232B" }}>
                                <Image src={messageIcon} alt="test" width={32} height={32} />
                            </Box>
                            <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                                <Typography sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}>E-mail</Typography>
                                <div style={{ fontSize: "16px", fontWeight: "400" }}>
                                    Support@cyparta.com
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ContactUs