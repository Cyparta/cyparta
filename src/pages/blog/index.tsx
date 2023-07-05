import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, InputAdornment, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/layout/Footer'

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

import blogImage from '../../assets/blogs/blog1.png'
import MainCategory from '@/components/blogs/mainCategory'

const Page = () => {
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Container>
        <Box mt="48px">
          {/* top section */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <Box sx={{ borderRadius: "12px", background: "rgba(236, 35, 43, 1)", color: "#fff", padding: "16px" }}>
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
            <Grid item xs={12} sm={6}>
              <Box>
                <Image src={blogImage} alt="test" style={{ width: "100%" }} />
                <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <MainCategory text="Design" />
                  <MainCategory text="Website development" />
                </Box>
                <Box mt="15px">
                  <Typography sx={{color:"rgba(37, 35, 36, 1)", fontWeight:"500", fontSize:"24px", mb:"8px"}}>Today blog about patience</Typography>
                  <Typography sx={{color:"rgba(157, 157, 157, 1)", lineHeight:"24px", fontWeight:"500"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                rtest
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Page