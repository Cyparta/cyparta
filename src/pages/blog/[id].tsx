import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import BlogImg from "@/assets/blogs/blogId.png";
import person from "@/assets/blogs/person1.png";
import Image from "next/image";
import MainCategory from "@/components/blogs/mainCategory";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import blogImage from "@/assets/blogs/blog1.png";
import blogID1 from "@/assets/blogs/blogId-1.png";
import blogID2 from "@/assets/blogs/blogId-2.png";
import personImage from "@/assets/blogs/person1.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { RequestGetBlog, RequestGetBlogs } from "@/store/blogs/blogsSlice";
import { blogProps } from "@/types/blog";
import { RootState } from "@/store/store";
import BlogCard from "@/components/blogs/blogCard";
import Link from "next/link";

import moment from "moment";

const Test = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const blog: blogProps = useSelector((state: RootState) => state.blogs.blog);
  const blogs: blogProps[] = useSelector(
    (state: RootState) => state.blogs.blogs
  );

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  useEffect(() => {
    dispatch(RequestGetBlog(router.query.id));
    dispatch(RequestGetBlogs());
  }, [router.query.id]);
  return (
    <Box>
      <Box className={lang}>
        <TopNav />
        <Navbar />
      </Box>
      <Box sx={{ padding: { xs: "20px", lg: "20px 100px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "24px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: "rgba(37, 35, 36, 1)",
              fontSize: "40px",
            }}
          >
            {blog.title}
          </Typography>
          {/* <Box>
            test
          </Box> */}
        </Box>
        <Box sx={{ position: "relative" }}>
          {blog.image && (
            <img
              src={blog.image}
              alt="Blog"
              style={{ width: "100%", maxHeight: "500px" }}
            />
          )}

          <Box sx={{ position: "absolute", top: "50%", left: "10%" }}>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                transform: "translateY(-50%)",
              }}
            >
              <Image src={person} alt="test" />
              <Box sx={{ color: "rgba(255, 255, 255, 1)" }}>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {blog?.publisher_name}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(235, 235, 235, 1)",
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  {moment(blog?.created_at).format("D MMM, YYYY")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <Typography>{blog?.likes_count} Likes</Typography>
              {/* <Typography>89245 Share</Typography> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mt: "20px",
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {blog?.category?.map((cate) => {
              return <MainCategory key={cate.id} text={cate.name} />;
            })}
            {/* <MainCategory text="Design" />
            <MainCategory text="Website development" /> */}
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <FacebookOutlinedIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
          </Box>
        </Box>

        <Box sx={{ padding: "10px", mt: "32px" }}>
          {blog.text && (
            <div dangerouslySetInnerHTML={{ __html: blog.text }}></div>
          )}
        </Box>

        <Typography sx={{ fontWeight: "600", fontSize: "32px", mt: "80px" }}>
          Maybe you also like
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "rgba(204, 204, 204, 1)",
            mt: "24px",
            mb: "32px",
          }}
        ></Box>

        <Grid container spacing={2}>
          {blogs?.map((blog) => {
            return (
              <Grid item xs={12} sm={3} key={blog?.id}>
                {/* <Box>
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt="test"
                      style={{
                        width: "100%",
                        height: "292px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {blog?.category?.map((cate) => {
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
                      {blog.title}
                    </Typography>
                    <Box
                      sx={{
                        color: "rgba(157, 157, 157, 1)",
                        lineHeight: "24px",
                        fontWeight: "500",
                      }}
                    >
                      {blog.text && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: blog.text.slice(0, 200),
                          }}
                        ></div>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
                    <Box>
                      {blog?.publisher_image && (
                        <img src={blog?.publisher_image} alt="person" />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "rgba(37, 35, 36, 1)",
                          mb: "5px",
                        }}
                      >
                        {blog.publisher_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(204, 204, 204, 1)",
                        }}
                      >
                        {blog.publisher_job}
                      </Typography>
                    </Box>
                  </Box>
                </Box> */}
                <Link href={`/blog/${blog.id}`}>
                  <BlogCard blog={blog} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
        
        <Box className={lang}>
          <Footer />
        </Box>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Test), { ssr: false });
