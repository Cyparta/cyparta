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
import { RequestPostEmploye } from "@/store/employes/employesSlice";

import { ToastContainer, toast } from 'react-toastify';

const Index = () => {
  const dispatch = useDispatch<AppDispatch>()

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      job: ""
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required("Please enter a vaild first name"),
      last_name: Yup.string().required("Please enter a vaild last name"),
      job: Yup.string().required("Please enter a vaild job"),
      password: Yup.string().required("Please enter a vaild password"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a vaild email"),
    }),
    onSubmit: (values, {resetForm}) => {
      console.log("yes")
      const { first_name, last_name, email, password, job } = values
      const data = {
        user: {
          first_name,
          last_name,
          email,
          password
        },
        job
      }
      dispatch(RequestPostEmploye(data)).then((res) => {
        console.log(res)
        if (res.type === 'RequestPostEmploye/fulfilled') {
          toast.success("An employee has been added")
          resetForm()
        } else {
          toast.error(res.payload.message)
        }
      })
    },
  });

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "24px" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"employs"}
          subName={"employs Form"}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "50%" },
            height: "100%",
            bgcolor: "#fff",
            paddingBlock: 3,
          }}
        >
          <DashboardTable
            pageName={"employs Form"}
            hint={"Please fill this form"}
          >
            <FormTable submitButtonLabel={"save"} sx={{ width: "100%" }} onSubmit={formik.handleSubmit}>
              {/* <CustomForm columns={columns} mbImg="10px" /> */}
              <TextField
                id="first_name"
                placeholder={"first name"}
                type="text"
                variant="outlined"
                name="first_name"
                onChange={formik.handleChange}
                value={formik.values.first_name}
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
              {formik.touched.first_name && formik.errors.first_name ? (
                <Typography
                  component="span"
                  sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                >
                  {formik.errors.first_name}
                </Typography>
              ) : null}
              <TextField
                id="last name"
                placeholder={"last name"}
                type="text"
                variant="outlined"
                name="last_name"
                onChange={formik.handleChange}
                value={formik.values.last_name}
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
                placeholder={"email"}
                type="text"
                variant="outlined"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                placeholder={"password"}
                variant="outlined"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                type="password"
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
              {formik.touched.password && formik.errors.password ? (
                <Typography
                  component="span"
                  sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                >
                  {formik.errors.password}
                </Typography>
              ) : null}
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.job}
                    label="Job"
                    onChange={(e) => {
                      formik.setFieldValue("job", e.target.value)
                    }}
                    style={{ background: '#312f30', color: "#fff", borderRadius: "20px " }}
                  >
                    <MenuItem value={1}>Fullstack Developer</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {formik.touched.job && formik.errors.job ? (
                  <Typography
                    component="span"
                    sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}
                  >
                    {formik.errors.job}
                  </Typography>
                ) : null}
              </Box>
            </FormTable>
          </DashboardTable>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
