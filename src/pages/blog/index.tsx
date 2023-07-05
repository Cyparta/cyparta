import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, InputAdornment, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/layout/Footer'

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

import blogImage from '../../assets/blogs/blog1.png';
import blogImage2 from '../../assets/blogs/blog2.png';
import blogImage3 from '../../assets/blogs/blog3.png';
import blogImage4 from '../../assets/blogs/blog4.png';
import blogImage5 from '../../assets/blogs/blog5.png';

import test1 from '../../assets/blogs/test-1.png';
import test2 from '../../assets/blogs/test-2.png';
import test3 from '../../assets/blogs/test-3.png';

import personImage from '../../assets/blogs/person1.png'
import MainCategory from '@/components/blogs/mainCategory'

const Page = () => {
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Box sx={{ padding: { xs: "20px", lg: "20px 100px" } }}>
        <Box mt="48px">
          {/* top section */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb:"24px", flexWrap:"wrap", }}>
            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>Blog</Typography>
            <Box>
              <TextField
                variant="outlined"
                label=""
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: 'rgba(0, 0, 0, 0.3)' },
                }}
                sx={{
                  padding: "11.5px 14px !important",
                  width: "388px !important",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: 'rgba(230, 237, 255, 1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(230, 237, 255, 1)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(230, 237, 255, 1)',
                    },
                  },
                }}
              />
            </Box>
          </Box>
          {/* tabs */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", mb:"49px" }}>
            <Box sx={{ borderRadius: "12px", background: "rgba(236, 35, 43, 1)", color: "#fff", padding: "10px 16px" }}>
              All
            </Box>
            <Box sx={{ color: "rgba(204, 204, 204, 1)", fontWeight: "500", fontSize: "16px" }}>
              Design
            </Box>
            <Box sx={{ color: "rgba(204, 204, 204, 1)", fontWeight: "500", fontSize: "16px" }}>
              Mobile Development
            </Box>
            <Box sx={{ color: "rgba(204, 204, 204, 1)", fontWeight: "500", fontSize: "16px" }}>
              web Development
            </Box>
            <Box sx={{ color: "rgba(204, 204, 204, 1)", fontWeight: "500", fontSize: "16px" }}>
              technical Consulting
            </Box>
            <Box sx={{ color: "rgba(204, 204, 204, 1)", fontWeight: "500", fontSize: "16px" }}>
              Software management system
            </Box>
          </Box>

          {/* main blogs */}
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Image src={blogImage} alt="test" style={{ width: "100%" }} />
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

            {/* side Article */}
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ display: "flex", gap: "16px", mb: "24px" }}>
                <Box sx={{}}>
                  <Image src={test1} alt="test" style={{ width: "201px", height: "111px" }} />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <MainCategory text="Design" />
                    <MainCategory text="Mobile development" />
                  </Box>
                  <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "18px", mb: "8px", mt: "20px" }}>Today blog about patience</Typography>
                  <Typography sx={{ color: "rgba(157, 157, 157, 1)" }}>Lorem Ipsum is simply dummy text of the prin...</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", mb: "24px" }}>
                <Box sx={{}}>
                  <Image src={test2} alt="test" style={{ width: "201px", height: "111px" }} />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <MainCategory text="Design" />
                    <MainCategory text="Mobile development" />
                  </Box>
                  <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "18px", mb: "8px", mt: "20px" }}>Today blog about patience</Typography>
                  <Typography sx={{ color: "rgba(157, 157, 157, 1)" }}>Lorem Ipsum is simply dummy text of the prin...</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", mb: "24px" }}>
                <Box sx={{}}>
                  <Image src={test3} alt="test" style={{ width: "201px", height: "111px" }} />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <MainCategory text="Design" />
                    <MainCategory text="Mobile development" />
                  </Box>
                  <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "18px", mb: "8px", mt: "20px" }}>Today blog about patience</Typography>
                  <Typography sx={{ color: "rgba(157, 157, 157, 1)" }}>Lorem Ipsum is simply dummy text of the prin...</Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
          {/* line */}
          <Box sx={{ width: "100%", height: "1px", background: "rgba(204, 204, 204, 1)", mt: "32px", mb: "32px" }}></Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box>
                <Image src={blogImage} alt="test" style={{ width: "100%" }} />
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
            <Grid item xs={12} md={3}>
              <Box>
                <Image src={blogImage3} alt="test" style={{ width: "100%" }} />
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
            <Grid item xs={12} md={3}>
              <Box>
                <Image src={blogImage4} alt="test" style={{ width: "100%" }} />
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
            <Grid item xs={12} md={3}>
              <Box>
                <Image src={blogImage5} alt="test" style={{ width: "100%" }} />
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
            <Grid item xs={12} md={3}>
              <Box>
                <Image src={blogImage4} alt="test" style={{ width: "100%" }} />
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
      </Box>
      <Footer />
    </Box>
  )
}

export default Page