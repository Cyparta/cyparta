import React from 'react'
import { Box, Container, InputAdornment, Typography, Grid } from '@mui/material'
import MainCategory from './mainCategory'
import Image from 'next/image'

import blogImage from '@/assets/blogs/blog1.png';
import personImage from '@/assets/blogs/person1.png'

const BlogCard = () => {
    return (
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
    )
}

export default BlogCard