import dynamic from 'next/dynamic';
import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import TopNav from '@/components/layout/topNav';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/Footer';
import BlogImg from '@/assets/blogs/blogId.png';
import person from '@/assets/blogs/person1.png';
import Image from 'next/image';
import MainCategory from '@/components/blogs/mainCategory';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import blogImage from '@/assets/blogs/blog1.png';
import blogID1 from '@/assets/blogs/blogId-1.png';
import blogID2 from '@/assets/blogs/blogId-2.png';
import personImage from '@/assets/blogs/person1.png'


const Test = () => {
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Box sx={{ padding: { xs: "20px", lg: "20px 100px" } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "24px", marginTop: "10px" }}>
          <Typography sx={{ fontWeight: "600", color: "rgba(37, 35, 36, 1)", fontSize: "40px" }}>Today blog about patience</Typography>
          <Box>
            test
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Image src={BlogImg} alt="Blog" style={{ width: "100%" }} />
          <Box sx={{ position: "absolute", top: "50%", left: "10%" }}>
            <Box sx={{ display: "flex", gap: "30px", transform: "translateY(-50%)" }}>
              <Image src={person} alt="test" />
              <Box sx={{ color: "rgba(255, 255, 255, 1)" }}>
                <Typography sx={{ color: "rgba(255, 255, 255, 1)", fontWeight: "500", fontSize: "18px" }}>Nada Medhat</Typography>
                <Typography sx={{ color: "rgba(235, 235, 235, 1)", fontWeight: "400", fontSize: "12px" }}>5 Jul , 2023</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", color: "rgba(255, 255, 255, 1)", fontSize: "14px", fontWeight: "400" }}>
              <Typography>330 Likes</Typography>
              <Typography>89245 Share</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: "20px", gap:'20px'}}>
          <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <MainCategory text="Design" />
            <MainCategory text="Website development" />
          </Box>
          <Box sx={{ display: "flex", gap: '15px' }}>
            <FacebookOutlinedIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
          </Box>
        </Box>

        <Box sx={{ padding: "10px", mt: "32px" }}>
          <Typography>Lorem Ipsum is simply dummy text</Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Box>

        <Typography sx={{ fontWeight: "600", fontSize: '32px', mt: "80px" }}>Maybe you also like</Typography>
        <Box sx={{ width: "100%", height: "1px", background: "rgba(204, 204, 204, 1)", mt: "24px", mb: "32px" }}></Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Image src={blogID1} alt="test" style={{ width: "100%" }} />
              <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <MainCategory text="Design" />
                <MainCategory text="Website development" />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "24px", mb: "8px" }}>Today blog about patience</Typography>
                <Typography sx={{ color: "rgba(157, 157, 157, 1)", lineHeight: "24px", fontWeight: "500" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                <Box>
                  <Image src={personImage} alt="person" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "5px" }}>Nada Medhat</Typography>
                  <Typography sx={{ fontSize: "12px", color: "rgba(204, 204, 204, 1)" }}>Back office</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Image src={blogID2} alt="test" style={{ width: "100%" }} />
              <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <MainCategory text="Design" />
                <MainCategory text="Website development" />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "24px", mb: "8px" }}>Today blog about patience</Typography>
                <Typography sx={{ color: "rgba(157, 157, 157, 1)", lineHeight: "24px", fontWeight: "500" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                <Box>
                  <Image src={personImage} alt="person" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "5px" }}>Nada Medhat</Typography>
                  <Typography sx={{ fontSize: "12px", color: "rgba(204, 204, 204, 1)" }}>Back office</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Box>

      <Footer />
    </Box>
  )
}


export default dynamic(() => Promise.resolve(Test), { ssr: false });