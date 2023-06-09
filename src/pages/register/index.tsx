import TopNav from '@/components/layout/topNav'
import Navbar from "@/components/layout/navbar";

import { Box, TextField, Typography, Grid, Container } from '@mui/material'
import React from 'react'
import Footer from '@/components/layout/Footer';

import Lottie from "lottie-react";
import LRAnimation from "@/assets/login/LRAnimation.json";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from 'next/router';
import { RequestPostLogin } from '@/store/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { RequestPostRegister } from '@/store/user/user';
import { MainButton } from '@/style/style';

// http://192.168.1.12:8000/api/register/
// http://192.168.1.12:8000/api/register/

const Index = () => {
    const { errorMsg, loading, user } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter a vaild email"),
            password: Yup.string()
                .required("Please enter password")
                .min(
                    8,
                    "Password is too short - should be 8 chars minimum."
                ),
            first_name: Yup.string()
                .required("Please first name"),
            last_name: Yup.string()
                .required("Please last name")
        }),
        onSubmit: (values) => {
            const { email, password, first_name, last_name } = values;
            dispatch(RequestPostRegister({ email, password, first_name, last_name })).then((req) => {
                {
                    console.log(req.type)
                    if (req.type == "RequestPostRegister/fulfilled") {
                        setTimeout(() => {
                            router.push("/login");
                        }, 200);
                    }
                }
            })
        },
    });
    return (
        <Box>
            <TopNav />
            <Navbar />
            <Container>
                <Box>
                    <Typography sx={{ fontWeight: "500", fontSize: "24px", textAlign: "center", my: "40px" }}>
                        Register
                    </Typography>
                    <Grid container spacing={4} sx={{ alignItems: "center" }}>
                        <Grid item xs={12} sm={6}>
                            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                                <TextField
                                    id="first_name"
                                    placeholder="first Name"
                                    variant="outlined"
                                    name="first_name"
                                    onChange={formik.handleChange}
                                    value={formik.values.first_name}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        width: "100%",
                                        border: "1px solid #312f30",
                                        borderRadius: "20px",
                                        bgcolor: "#fff",
                                        overflow: "hidden",
                                        input: {
                                            color: "#000",
                                            "&::placeholder": {
                                                padding: "1rem",
                                                color: "#000",
                                                opacity: "1",
                                            },
                                        },

                                        "& .MuiInput-input": { color: "white" },

                                        "& fieldset": { border: "none" },
                                    }}
                                />
                                {formik.touched.first_name && formik.errors.first_name ? (
                                    <Typography
                                        component="span"
                                        sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                                    >
                                        {formik.errors.first_name}
                                    </Typography>
                                ) : null}
                                <TextField
                                    id="last_name"
                                    placeholder="last Name"
                                    variant="outlined"
                                    name="last_name"
                                    onChange={formik.handleChange}
                                    value={formik.values.last_name}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        width: "100%",
                                        border: "1px solid #312f30",
                                        borderRadius: "20px",
                                        bgcolor: "#fff",
                                        overflow: "hidden",
                                        input: {
                                            color: "#000",
                                            "&::placeholder": {
                                                padding: "1rem",
                                                color: "#000",
                                                opacity: "1",
                                            },
                                        },

                                        "& .MuiInput-input": { color: "white" },

                                        "& fieldset": { border: "none" },
                                    }}
                                />
                                {formik.touched.last_name && formik.errors.last_name ? (
                                    <Typography
                                        component="span"
                                        sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                                    >
                                        {formik.errors.last_name}
                                    </Typography>
                                ) : null}

                                <TextField
                                    id="email"
                                    placeholder="email"
                                    variant="outlined"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        width: "100%",
                                        border: "1px solid #312f30",
                                        borderRadius: "20px",
                                        bgcolor: "#fff",
                                        overflow: "hidden",
                                        input: {
                                            color: "#000",
                                            "&::placeholder": {
                                                padding: "1rem",
                                                color: "#000",
                                                opacity: "1",
                                            },
                                        },

                                        "& .MuiInput-input": { color: "white" },

                                        "& fieldset": { border: "none" },
                                    }}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <Typography
                                        component="span"
                                        sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                                    >
                                        {formik.errors.email}
                                    </Typography>
                                ) : null}
                                <TextField
                                    id="password"
                                    placeholder="password"
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        width: "100%",
                                        border: "1px solid #312f30",
                                        borderRadius: "20px",
                                        bgcolor: "#fff",
                                        overflow: "hidden",
                                        input: {
                                            color: "#000",
                                            "&::placeholder": {
                                                padding: "1rem",
                                                color: "#000",
                                                opacity: "1",
                                            },
                                        },

                                        "& .MuiInput-input": { color: "white" },

                                        "& fieldset": { border: "none" },
                                    }}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <Typography
                                        component="span"
                                        sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                                    >
                                        {formik.errors.password}
                                    </Typography>
                                ) : null}

                                {errorMsg ? (
                                    <Typography
                                        component="span"
                                        sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                                    >
                                        {errorMsg}
                                    </Typography>
                                ) : null}
                                <Box sx={{ textAlign: "center" }}>
                                    <MainButton type='submit' disabled={loading}>{loading ? "loading..." : "sign up"}</MainButton>
                                </Box>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Lottie animationData={LRAnimation} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}

export default Index