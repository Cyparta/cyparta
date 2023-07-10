import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import {
  Box,
  Container,
  InputAdornment,
  Typography,
  Grid,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "@/components/layout/Footer";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

import personImage from "../../assets/blogs/person1.png";
import MainCategory from "@/components/blogs/mainCategory";
import { useDispatch, useSelector } from "react-redux";
import { RequestGetBlogs, RequestGetBlogsCate } from "@/store/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/store/store";
import BlogCard from "@/components/blogs/blogCard";

import { blogProps, categoryProps } from "@/types/blog";
import { setFilter } from "@/store/blogs/blogsSlice";
import styles from "@/app/Blogs.module.css";

const Page = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const blogs: blogProps[] = useSelector(
    (state: RootState) => state.blogs.blogs
  );
  const loading = useSelector(
    (state: RootState) => state.blogs.loading
  );
  const cate: categoryProps[] = useSelector(
    (state: RootState) => state.blogs.cate
  );
  const filter = useSelector((state: RootState) => state.blogs.filter);
  // const mainBlog:blogState = blogs[0]

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(RequestGetBlogs());
    dispatch(RequestGetBlogsCate());
  }, []);
  return (
    <Box className={lang}>
      <TopNav />
      <Navbar />
      <Box sx={{ padding: { xs: "20px", lg: "20px 100px" } }}>
        <Box mt="48px">
          {/* top section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "24px",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
              Blog
            </Typography>
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
                  style: { color: "rgba(0, 0, 0, 0.3)" },
                }}
                sx={{
                  padding: "11.5px 0px !important",
                  width: { xs: "auto", sm: "388px !important" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": {
                      borderColor: "rgba(230, 237, 255, 1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(230, 237, 255, 1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(230, 237, 255, 1)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          {/* tabs */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              alignItems: "center",
              mb: "49px",
            }}
          >
            <Box
              className={`${
                filter.category === "" ? styles.active : styles.not_active
              }`}
              sx={{cursor:"pointer"}}
              onClick={() => {
                dispatch(setFilter({ name: "category", val: "" }));
                dispatch(RequestGetBlogs());
              }}
            >
              All
            </Box>
            {cate.map((item) => {
              return (
                <Box
                  className={`${
                    filter.category === item.id
                      ? styles.active
                      : styles.not_active
                  }`}
                  sx={{cursor:"pointer"}}

                  onClick={() => {
                    dispatch(setFilter({ name: "category", val: item.id }));
                    dispatch(RequestGetBlogs());
                  }}
                >
                  {item.name}
                </Box>
              );
            })}
          </Box>

          {/* main blogs */}
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Link href={`/blog/${blogs[0]?.id}`}>
                <Box>
                  {blogs[0]?.image && (
                    <img
                      src={blogs[0]?.image}
                      alt="test"
                      style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        marginBottom: "10px",
                        borderRadius: "15px",
                      }}
                    />
                  )}
                  {/* <Image src={blogImage} alt="test" style={{ width: "100%" }} /> */}
                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {blogs[0]?.category?.map((cate: categoryProps) => {
                      return <MainCategory key={cate.id} text={cate.name} />;
                    })}
                  </Box>
                  <Box mt="15px">
                    <Typography
                      sx={{
                        color: "rgba(37, 35, 36, 1)",
                        fontWeight: "500",
                        fontSize: "24px",
                        mb: "8px",
                      }}
                    >
                      {blogs[0]?.title}
                    </Typography>
                    <Box
                      sx={{
                        color: "rgba(157, 157, 157, 1)",
                        lineHeight: "24px",
                        fontWeight: "500",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${blogs[0]?.text?.slice(0, 200)}...`,
                        }}
                      ></div>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                    {blogs[0]?.publisher_image && (
                      <Box>
                        <img src={blogs[0]?.publisher_image} alt="person" />
                      </Box>
                    )}

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "rgba(37, 35, 36, 1)",
                          mb: "5px",
                        }}
                      >
                        {blogs[0]?.publisher_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(204, 204, 204, 1)",
                        }}
                      >
                        {blogs[0]?.publisher_job}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Grid>

            {/* side Article */}
            <Grid item xs={12} sm={12} md={6}>
              {blogs.map((blog: blogProps) => {
                return (
                  <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <Box
                      sx={{ display: "flex", gap: "16px", mb: "24px" }}
                      key={blog.id}
                    >
                      <Box sx={{}}>
                        {blog.image && (
                          <img
                            src={blog.image}
                            alt="test"
                            style={{
                              width: "201px",
                              height: "111px",
                              marginBottom: "10px",
                              borderRadius: "15px",
                              objectFit: "cover",
                            }}
                          />
                        )}
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: { xs: "none", sm: "flex" },
                            gap: "16px",
                            flexWrap: "wrap",
                            mb: "20px",
                          }}
                        >
                          {blog?.category?.map((cate: categoryProps) => {
                            return (
                              <MainCategory key={cate.id} text={cate.name} />
                            );
                          })}
                        </Box>
                        <Typography
                          sx={{
                            color: "rgba(37, 35, 36, 1)",
                            fontWeight: "500",
                            fontSize: "18px",
                            mb: "8px",
                          }}
                        >
                          {blog.title}
                        </Typography>
                        <Box sx={{ color: "rgba(157, 157, 157, 1)" }}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${blog?.text?.slice(0, 47)}...`,
                            }}
                          ></div>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Grid>
          </Grid>
          {/* line */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "rgba(204, 204, 204, 1)",
              mt: "32px",
              mb: "32px",
            }}
          ></Box>

          <Grid container spacing={2}>
            {blogs.map((blog: blogProps) => {
              return (
                <Grid item xs={12} md={3} key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <BlogCard blog={blog} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;
