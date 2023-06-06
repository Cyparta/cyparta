import React from 'react'
import Layout from '@/components/dashboard/layout'
import { Box, TextField, Typography } from "@mui/material";
import PageName from '@/components/dashboard/pageName';
import InputAdornment from "@mui/material/InputAdornment";
import company1 from '../../../assets/dashboard/company1.jpg';
import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";
// import HeroPage from "@/components/dashboard/heroPage";
import Link from 'next/link';
import Image from 'next/image';
const progress = [
    { image: company1, percentage: "100%" },
    { image: company1, percentage: "100%" },
    { image: company1, percentage: "100%" },
    { image: company1, percentage: "100%" },
    { image: company1, percentage: "100%" },
    { image: company1, percentage: "100%" },
];

const myproject = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", mb: "100px" }}>
                    <Box sx={{ fontSize: "2rem" }}>
                        <PageName
                            sx={{ color: "#000" }}
                            name={"projects"}
                            subName={"my projects"}
                        />
                    </Box>
                    {/* top section */}
                    <Box
                        sx={{
                            mt: "10px",
                            display: { xs: "block", md: "flex" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        {/* <HeroPage
                            name={{ title: "Projects", active: true, to: "" }}
                            subName={{
                                title: "Timeline",
                                active: false,
                                to: "/Dashboard/timeline",
                            }}
                        /> */}
                        <Box>HEro Page here</Box>
                        <Box sx={{ mt: { xs: "15px", md: "0" } }}>
                            <TextField
                                fullWidth
                                placeholder="Search"
                                // padding="10px"
                                sx={{
                                    "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
                                        padding: "10px 10px 10px 15px",
                                    },
                                    "& fieldset": {
                                        borderRadius: "25px",
                                    },
                                    "& .MuiInputAdornment-root": { color: "#000" },
                                    input: {
                                        width: { xs: "auto", sm: "440px" },
                                        "&::placeholder": {
                                            fontFamily: "Tajawal",
                                            fontSize: "22px",
                                            fontWeight: "400",
                                            color: "#333 !important",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            margin: "18px 0",
                            display: "grid",
                            gap: 3,
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                md: "repeat(4, 1fr)",
                                lg: "repeat(5, 1fr)",
                                xl: "repeat(6, 1fr)",
                            },
                        }}
                    >
                        {progress.map((pro, index) => {
                            return (
                                <Link
                                    href="/dashboard/myprojects/123"
                                    style={{ textDecoration: "none" }}
                                    key={index}
                                >
                                    <Box
                                        overflow="hidden"
                                        sx={{
                                            position: "relative",
                                            padding: "0",
                                            border: "1px solid #00000063",
                                            borderRadius: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                transition: "all 0.5s ease-in-out",
                                                "&:hover img": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        >
                                            {/* <img src={pro.image} alt="img1" width="100%" /> */}
                                            <Image src={pro.image} alt="img1" style={{width:"100%", height:"100%"}}/>
                                        </Box>
                                        <Box sx={{ background: "#fff", position: "relative" }}>
                                            <Typography
                                                sx={{
                                                    position: "relative",
                                                    zIndex: "5",
                                                    color: "#000",
                                                    textDecoration: "none",
                                                    padding: "5px",
                                                }}
                                            >
                                                100%
                                            </Typography>
                                            <Box
                                                sx={{
                                                    background: "#B3005E",
                                                    width: "50%",
                                                    height: "100%",
                                                    top: "0",
                                                    position: "absolute",
                                                }}
                                            ></Box>
                                        </Box>
                                    </Box>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
  )
}

export default myproject