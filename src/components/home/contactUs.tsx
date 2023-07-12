import React from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
// import MainButton from '../commons/MainButton';
import { MainButton } from "@/style/style";
import Image from "next/image";
import MapImage from "../../assets/home/map.png";
import InputControl from "@/components/commons/InputControl";
import messageIcon from "../../assets/icons/message-icon.png";
import phoneIcon from "../../assets/icons/phone-icon.png";
import timeIcon from "../../assets/icons/time-icon.png";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomSelect from "../commons/customSelect";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestPostContact } from "@/store/contact/contactSlice";

const ContactUs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contact, loading } = useSelector((state: RootState) => state.contact);
  // const { jobs } = useSelector((state: RootState) => state.jobs)
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const contactUs = useSelector(
    (state: RootState) => state.lang.value.contactUs
  );
  const services = useSelector((state: RootState) => state.lang.value.services);

  // contactInfo
  const contactInfo = useSelector(
    (state: RootState) => state.lang.value.contactInfo
  );

  const options = [
    "Web development",
    "App development",
    "S.W management system",
    "Technical consulting",
    "Ui & Ux",
    "cypar security",
    "Other",
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      services: "Web development",
      phone_number: "",
      summary: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(
        lang === "en" ? "Please enter name" : "الرجاء ادخل اسمك"
      ),
      services: Yup.string(),
      phone_number: Yup.number().required(
        lang === "en" ? "Please enter a phone number" : "الرجاء ادخل رقمك"
      ),
      summary: Yup.string().required(
        lang === "en" ? "Please enter a summary" : "الرجاء إدخال ملخص"
      ),
      email: Yup.string()
        .email("Invalid email address")
        .required(
          lang === "en"
            ? "Please enter a vaild email"
            : "الرجاء إدخال بريدك الالكتروني"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      const { name, email, services, phone_number, summary } = values;
      dispatch(
        RequestPostContact({ name, email, services, phone_number, summary })
      );
      resetForm();
    },
  });

  return (
    <Box id="contact">
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "500",
          textAlign: "center",
          mb: "24px",
          mt: "50px",
        }}
      >
        {contactUs.heading[lang]}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              background: "rgba(252, 251, 252, 1)",
              borderRadius: "20px",
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(37, 35, 36, 1)",
                mb: "12px",
                fontWeight: "500",
              }}
            >
              {contactUs.touch[lang]}
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
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
                      name="name"
                      placeholder={contactUs.name[lang]}
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
                      type="text"
                      name="email"
                      placeholder={contactUs.email[lang]}
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
                    <CustomSelect
                      options={options}
                      defaultValue="Web development"
                      handleSelect={(option: string) => {
                        formik.setFieldValue("services", option);
                      }}
                    />
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <InputControl
                      type="number"
                      name="phone_number"
                      placeholder={contactUs.phone[lang]}
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      className="no-arrows"
                    />
                    {formik.touched.phone_number &&
                    formik.errors.phone_number ? (
                      <Typography
                        component="span"
                        sx={{
                          color: "red",
                          mt: "",
                          fontSize: "14px",
                          padding: "0px 10px",
                        }}
                      >
                        {formik.errors.phone_number}
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <textarea
                    style={{
                      width: "100%",
                      height: "65px",
                      border: "1px solid #E1E6EF",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "15px",
                    }}
                    placeholder={contactUs.summary[lang]}
                    name="summary"
                    value={formik.values.summary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.summary && formik.errors.summary ? (
                    <Typography
                      component="span"
                      sx={{
                        color: "red",
                        mt: "",
                        fontSize: "14px",
                        padding: "0px 10px",
                      }}
                    >
                      {formik.errors.summary}
                    </Typography>
                  ) : null}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <MainButton type="submit" disabled={loading}>
                    {loading ? contactUs.loading[lang] : contactUs.send[lang]}
                  </MainButton>
                  {/* <MainButton text="Send" /> */}
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            {/* <Image src={MapImage} alt="map" width={400} height={400} style={{ width: "100%", height: "323px" }} /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.167949022293!2d30.946718315113394!3d29.974602981907758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzI4LjYiTiAzMMKwNTYnNTYuMSJF!5e0!3m2!1sen!2seg!4v1685351032103!5m2!1sen!2seg"
              width="100%"
              title="Gray's and Danny's Meat Plant"
              height="325px"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              aria-hidden="false"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          background: "#FCFBFC",
          borderRadius: "20px",
          boxShadow: " 0px 1px 4px rgba(0, 0, 0, 0.16)",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ mt: "24px", borderRadius: "20px", padding: "0 20px" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                mt: "32px",
                mb: "32px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #EC232B",
                }}
              >
                <Image src={phoneIcon} alt="test" width={32} height={32} />
              </Box>
              <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                <Typography
                  sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}
                >
                  {contactInfo.phone[lang]}
                </Typography>
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    direction: "ltr",
                    textAlign: lang === "en" ? "start" : "end",
                  }}
                >
                  +20 0101 720 4584 <br />
                  +1 (312) 270-0815
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                mt: "32px",
                mb: "32px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #EC232B",
                }}
              >
                <Image src={timeIcon} alt="test" width={32} height={32} />
              </Box>
              <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                <Typography
                  sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}
                >
                  {contactInfo.time[lang]}
                </Typography>
                <div style={{ fontSize: "16px", fontWeight: "400" }}>
                  Sat - Wed : 9:00 AM - 6:00 PM
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                mt: "32px",
                mb: "32px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #EC232B",
                }}
              >
                <Image src={messageIcon} alt="test" width={32} height={32} />
              </Box>
              <Box sx={{ flex: { xs: 1, sm: 1 } }}>
                <Typography
                  sx={{ mb: "8px", fontSize: "18px", fontWeight: "500" }}
                >
                  {contactInfo.email[lang]}
                </Typography>
                <div style={{ fontSize: "16px", fontWeight: "400" }}>
                  Support@cyparta.com
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
