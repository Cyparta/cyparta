import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import InputControl from "../commons/InputControl";
import Image from "next/image";
// import MainButton from "../commons/MainButton";
import { MainButton } from "@/style/style";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASEURL } from "@/data/APIS";
import OfferRequest from "./offerRequest";
import { countries } from "@/data/countries";
import CustomSelect from "../offer/customSelect";

import ReactToPrint from "react-to-print";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import NumberField from "../commons/numberField";

const OfferForm = () => {
  const [loading, setLoading] = useState(false);
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const main = useSelector((state: RootState) => state.lang.value.offerPrice);
  const componentRef = useRef<any>();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      development: "",
      phone: "",
      country: "Egypt",
      budget: "",
      services: "",
      sites: "",
      additions: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a vaild email"),
      name: Yup.string().required("Please enter name"),
      development: Yup.string().required("Please enter development"),
      phone: Yup.number()
        .typeError("phone must be a number")
        .required("Please enter phone"),
      country: Yup.string().required("Please enter country"),
      budget: Yup.number().required("Please enter budget"),
      services: Yup.string().required("Please enter services"),
      sites: Yup.string().required("Please enter sites"),
      additions: Yup.string().required("Please enter additions"),
    }),
    onSubmit: (values, { resetForm }) => {
      // const { email } = values
      // dispatch(RequestPostSubscibe({ email: email }))
      setLoading(true);
      axios.post(`${BASEURL}apis/offers/`, { ...values });
      setLoading(false);
      resetForm();
    },
  });

  return (
    <Box>
      <Box>
        <Box
          sx={{
            padding: "24px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputControl
                    type="text"
                    placeholder={main.name[lang]}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.name}
                    </Typography>
                  ) : null}
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputControl
                    type="email"
                    placeholder={main.emailAddress[lang]}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.email}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputControl
                    type="text"
                    placeholder={main.development[lang]}
                    name="development"
                    value={formik.values.development}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.development && formik.errors.development ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.development}
                    </Typography>
                  ) : null}
                </Box>
                <Box sx={{ width: "100%" }}>
                  {/* <InputControl
                    type="text"
                    placeholder={main.phone[lang]}
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  /> */}
                  <NumberField
                    onChange={(e: any) => {
                      formik.setFieldValue("phone", e.target.value);
                    }}
                    placeholder={main.phone[lang]}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.phone}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <CustomSelect
                    defaultValue="Egypt"
                    handleSelect={(option: string) => {
                      formik.setFieldValue("country", option);
                    }}
                  />
                  {formik.touched.country && formik.errors.country ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.country}
                    </Typography>
                  ) : null}
                </Box>
                <Box sx={{ width: "100%" }}>
                  {/* <InputControl
                    type="number"
                    placeholder={main.budget[lang]}
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    name="budget"
                    className="no-arrows"
                  /> */}
                  <NumberField
                    onChange={(e: any) => {
                      formik.setFieldValue("budget", e.target.value);
                    }}
                    placeholder={main.budget[lang]}
                  />
                  {formik.touched.budget && formik.errors.budget ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.budget}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
              <Box>
                <textarea
                  style={{
                    width: "100%",
                    height: "124px",
                    border: "1px solid #E1E6EF",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                  name="services"
                  value={formik.values.services}
                  onChange={formik.handleChange}
                  placeholder={main.text[lang]}
                ></textarea>
                {formik.touched.services && formik.errors.services ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.services}
                  </Typography>
                ) : null}
              </Box>
              <Box>
                <textarea
                  style={{
                    width: "100%",
                    height: "124px",
                    border: "1px solid #E1E6EF",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                  name="sites"
                  value={formik.values.sites}
                  onChange={formik.handleChange}
                  placeholder={main.text2[lang]}
                ></textarea>
                {formik.touched.sites && formik.errors.sites ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.sites}
                  </Typography>
                ) : null}
              </Box>
              <Box>
                <textarea
                  style={{
                    width: "100%",
                    height: "124px",
                    border: "1px solid #E1E6EF",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                  name="additions"
                  value={formik.values.additions}
                  onChange={formik.handleChange}
                  placeholder={main.text3[lang]}
                ></textarea>
                {formik.touched.additions && formik.errors.additions ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.additions}
                  </Typography>
                ) : null}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MainButton type="submit" disabled={loading}>
                  {loading ? main.loading[lang] : main.send[lang]}
                </MainButton>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>

      {/* <OfferRequest /> */}
    </Box>
  );
};

export default OfferForm;
