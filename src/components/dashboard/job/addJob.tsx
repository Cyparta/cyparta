import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import PageName from "../pageName";

import DashboardTable from "../dashboardTable";
import FormTable from "../formTable";
import CustomForm from "../customForm";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

import { toast } from 'react-toastify';
import { RequestPostJob } from "@/store/job/jobSlice";


const AddJob = () => {
    const dispatch = useDispatch<AppDispatch>()

    const formik = useFormik({
        initialValues: {
            title: ""
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required("Please enter a job"),
        }),
        onSubmit: (values, { resetForm }) => {
            const { title } = values
            const data = {
                title
            }
            dispatch(RequestPostJob(data)).then((res) => {
                if (res.type === 'RequestPostJob/fulfilled') {
                    toast.success("A Job has been added")
                    resetForm()
                } else {
                    toast.error(res.payload.message)
                }
            })
        },
    });
    return (
        <div>
            <DashboardTable
                pageName={"add job"}
                hint={"Please fill this form"}
            >
                <FormTable submitButtonLabel={"save"} sx={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                    {/* <CustomForm columns={columns} mbImg="10px" /> */}
                    <TextField
                        id="title"
                        placeholder={"Job name"}
                        type="text"
                        variant="outlined"
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur}
                        sx={{
                            width: "100%",
                            border: "1px solid #312f30",
                            borderRadius: "20px",
                            bgcolor: "#312f30",
                            overflow: "hidden",
                            input: {
                                color: "white",
                                "&::placeholder": {
                                    padding: "1rem",
                                    color: "white",
                                    opacity: "1",
                                },
                            },
                            "& .MuiInput-input": { color: "white" },
                            "& fieldset": { border: "none" },
                        }}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <Typography
                            component="span"
                            sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                        >
                            {formik.errors.title}
                        </Typography>
                    ) : null}
                </FormTable>
            </DashboardTable>
        </div>
    )
}

export default AddJob