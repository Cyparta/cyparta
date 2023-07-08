import TopNav from '@/components/layout/topNav'
import Navbar from '@/components/layout/navbar'
import { Box, Container, InputAdornment, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Footer from '@/components/layout/Footer'

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';


import personImage from '../../assets/blogs/person1.png'
import MainCategory from '@/components/blogs/mainCategory'
import { useDispatch, useSelector } from 'react-redux'
import { RequestGetBlogs } from '@/store/blogs/blogsSlice'
import { AppDispatch, RootState } from '@/store/store'
import BlogCard from '@/components/blogs/blogCard'

interface blogState {
  id: number;
  created_at: string;
  image: null | string;
  likes_count: number;
  publisher: number;
  text: string;
  title: string;
  publisher_image: string;
  publisher_name: string;
  publisher_job: string
}

const Page = () => {
  const lang = useSelector(((state: RootState) => state.lang.value.lang));
  const blogs: blogState[] = useSelector((state: RootState) => state.blogs.blogs)

  // const mainBlog:blogState = blogs[0]

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(RequestGetBlogs())
  }, [])

  return (
    <Box>
      <TopNav />
      <Navbar />
      <Box sx={{ padding: { xs: "20px", lg: "20px 100px" } }}>
        <Box mt="48px">
          {/* top section */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: "24px", flexWrap: "wrap", }}>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", mb: "49px" }}>
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
                {blogs[0]?.image && <img src={blogs[0].image} alt="test" style={{ width: "100%", height: "320px", objectFit: "cover" }} />}
                {/* <Image src={blogImage} alt="test" style={{ width: "100%" }} /> */}
                <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <MainCategory text="Design" />
                  <MainCategory text="Website development" />
                </Box>
                <Box mt="15px">
                  <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "24px", mb: "8px" }}>{blogs[0]?.title}</Typography>
                  <Box sx={{ color: "rgba(157, 157, 157, 1)", lineHeight: "24px", fontWeight: "500" }}>
                    <div dangerouslySetInnerHTML={{ __html: `${blogs[0]?.text?.slice(0, 200)}...` }} ></div>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                  {blogs[0].publisher_name && <Box>
                    <Image src={blogs[0].publisher_name} alt="person" />
                  </Box>}

                  <Box>
                    <Typography sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "5px" }}>{blogs[0].publisher_name}</Typography>
                    <Typography sx={{ fontSize: "12px", color: "rgba(204, 204, 204, 1)" }}>{blogs[0].publisher_job}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* side Article */}
            <Grid item xs={12} sm={12} md={6}>
              {blogs.map((blog: blogState) => {
                return <Box sx={{ display: "flex", gap: "16px", mb: "24px" }} key={blog.id}>
                  <Box sx={{}}>
                    {blog.image &&
                      <img src={blog.image} alt="test" style={{ width: "201px", height: "111px" }} />
                    }
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <MainCategory text="Design" />
                      <MainCategory text="Mobile development" />
                    </Box>
                    <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "18px", mb: "8px", mt: "20px" }}>
                      {blog.title}
                    </Typography>
                    <Box sx={{ color: "rgba(157, 157, 157, 1)" }}>
                      <div dangerouslySetInnerHTML={{ __html: `${blog.text.slice(0, 47)}...` }} ></div>
                    </Box>
                  </Box>
                </Box>
              })}
            </Grid>

          </Grid>
          {/* line */}
          <Box sx={{ width: "100%", height: "1px", background: "rgba(204, 204, 204, 1)", mt: "32px", mb: "32px" }}></Box>

          <Grid container spacing={2}>
            {blogs.map((blog: blogState) => {
              return <Grid item xs={12} md={3} key={blog.id}>
                <Box>
                  {blog.image && <img src={blog.image} alt="test" style={{ width: "100%", height: "292px" }} />}
                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <MainCategory text="Design" />
                    <MainCategory text="Website development" />
                  </Box>
                  <Box mt="15px">
                    <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontWeight: "500", fontSize: "24px", mb: "8px" }}>{blog.title}</Typography>
                    <Box sx={{ color: "rgba(157, 157, 157, 1)", lineHeight: "24px", fontWeight: "500" }}>
                      <div dangerouslySetInnerHTML={{ __html: `${blog.text.slice(0, 80)}...` }} ></div>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                    {blog.publisher_image && <Box>
                      <img src={blog.publisher_image} alt="person" />
                    </Box>}

                    <Box>
                      <Typography sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "5px" }}>{blog.publisher_name}</Typography>
                      <Typography sx={{ fontSize: "12px", color: "rgba(204, 204, 204, 1)" }}>{blog.publisher_job}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Page