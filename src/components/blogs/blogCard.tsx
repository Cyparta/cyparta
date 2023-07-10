import React from "react";
import {
  Box,
  Container,
  InputAdornment,
  Typography,
  Grid,
} from "@mui/material";
import MainCategory from "./mainCategory";
import Image from "next/image";

import blogImage from "@/assets/blogs/blog1.png";
import personImage from "@/assets/blogs/person1.png";
import { blogProps, categoryProps } from "@/types/blog";

const BlogCard = ({ blog }: any) => {
  return (
    <Box>
      {blog.image && (
        <img
          src={blog.image}
          alt="test"
          style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom:"10px", borderRadius:"15px" }}
        />
      )}
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {blog?.category?.map((cate:categoryProps) => {
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
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog?.text?.slice(0, 80)}...`,
            }}
          ></div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "16px", mt: "24px" }}>
        {blog?.publisher_image && (
          <Box>
            <img src={blog.publisher_image} alt="person" />
          </Box>
        )}

        <Box>
          <Typography
            sx={{ fontSize: "14px", color: "rgba(37, 35, 36, 1)", mb: "5px" }}
          >
            {blog.publisher_name}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "rgba(204, 204, 204, 1)" }}
          >
            {blog.publisher_job}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
