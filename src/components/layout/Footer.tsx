import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
import footerImage from "../../assets/home/cyparta-logo.png";
import facebookIcon from "../../assets/icons/facebook.png";
import whatsIcon from "../../assets/icons/whats.png";
import faceFooter from "../../assets/icons/face-footer.png";
import whatsFooter from "../../assets/icons/whats-footer.png";
import twitterFooter from "../../assets/icons/twitter-footer.png";
// import MainButton from "../commons/MainButton";
import { MainButton } from "@/style/style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestPostSubscibe } from "@/store/contact/contactSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HashLink } from "react-router-hash-link";

import Link from "next/link";
import { toggleLang } from "@/store/langSlice.ts/langSlice";

const activeClass = {
  background: "rgba(236, 35, 43, 1)",
  color: "rgba(255, 255, 255, 1)",
  borderRadius: "12px",
  padding: "14px 15px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
}

const notActive = {
  background: "transparent",
  color: "rgba(83, 83, 83, 1)",
  borderRadius: "12px",
  // padding: "14px 15px",
  border: "none",
  cursor: "pointer",
  // fontSize: "16px",
  fontFamily: "'Poppins',sans-serif",
  fontWeight: "400",
  fontSize: "14px",
  // marginLeft: "32px",
}
const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, sent } = useSelector((state: RootState) => state.contact);

  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const subscribe = useSelector(
    (state: RootState) => state.lang.value.subscribe
  );
  const footer = useSelector((state: RootState) => state.lang.value.footer);
  const pages = useSelector((state: RootState) => state.lang.value.pages);

  const [toggleLangto, setToggle] = useState(lang);

  const handleToggleLangto = (val: string) => {
    console.log(val);
    localStorage.setItem("lang", val);
    setToggle(localStorage.getItem("lang"));
    dispatch(toggleLang(localStorage.getItem("lang")));
  };

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    const bodyElement = document.querySelector("body");
    if (bodyElement !== null) {
      bodyElement.setAttribute("className", lang);
    }
    setToggle(lang);
  }, [toggleLangto, lang]);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      job: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a vaild email"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email } = values;

      dispatch(RequestPostSubscibe({ email: email }));
      resetForm();
    },
  });
  return (
    <Box
      mt="74px"
      sx={{
        background: "rgba(204, 204, 204, 1)",
        pb: "48px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          top: "-15px",
          borderRadius: "20px",
          width: { xs: "100%", sm: "100%", md: "900px", lg: "1200px" },
          margin: "0 auto",
          left: "50%",
          transform: "translateY(-30px)",
        }}
      >
        <Container
          sx={{
            width: { xs: "100% !important" },
            padding: { xs: "0 !important" },
          }}
        >
          <Box
            sx={{
              background: "rgba(37, 35, 36, 1)",
              color: "#fff",
              display: "flex",
              padding: "20px",
              borderRadius: "20px",
              gap: "20px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      mb: "2px",
                      fontWeight: "600",
                      fontSize: "24px",
                    }}
                  >
                    {subscribe.heading[lang]}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                      fontSize: "13px",
                    }}
                  >
                    {subscribe.text[lang]}
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ alignSelf: sent ? "center" : "start" }}
              >
                <form onSubmit={formik.handleSubmit}>
                  {sent ? (
                    <Typography sx={{ fontSize: "14px" }}>
                      your submission has been successfully sent
                    </Typography>
                  ) : (
                    <Box
                      sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <input
                          type="text"
                          placeholder={subscribe.email[lang]}
                          className=""
                          style={{
                            background: "transparent",
                            border: "1px solid #DFDFDF",
                            padding: "16px",
                            borderRadius: "10px",
                            color: "#fff",
                          }}
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <Typography
                            component="span"
                            sx={{
                              color: "rgba(236, 35, 43, 1)",
                              mt: "",
                              fontSize: "12px",
                              padding: "2px",
                              position: "absolute",
                              top: "-7px",
                              right: "-7px",
                            }}
                          >
                            *
                          </Typography>
                        ) : null}
                      </Box>
                      <button
                        style={{
                          padding: "16px",
                          color: "rgba(37, 35, 36, 1)",
                          borderRadius: "10px",
                          border: "none",
                          cursor: "pointer",
                        }}
                        type="submit"
                      >
                        {subscribe.button[lang]}
                      </button>
                    </Box>
                  )}
                </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container>
        <Grid container sx={{ padding: "56px 10px" }} spacing={2}>
          <Grid item xs={12} sm={12} md={6} spacing={1}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src={footerImage}
                alt="test"
                width={224}
                height={102}
                style={{ marginBottom: "32px" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  width: { md: "341px" },
                  margin: "0 auto",
                }}
              >
                {footer.heading[lang]}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Typography sx={{ mb: "24px", fontWeight: "600" }}>
                  {footer.home[lang]}
                </Typography>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="/#about">{footer.about[lang]}</Link>
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="/#contact">{footer.contact[lang]}</Link>
                  </li>
                  {/* <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="/" passHref>
                      Blog
                    </Link>
                  </li> */}
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <Link href="/team">{footer.ourTeam[lang]}</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ mb: "24px", fontWeight: "600" }}>
                  {footer.linkMain[lang]}
                </Typography>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    {footer.link1[lang]}
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    {footer.link2[lang]}
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    {footer.link3[lang]}
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    {footer.link4[lang]}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#DFDFDF",
            mb: "15px",
          }}
        ></Box>

        <Grid container alignItems={"center"} spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #EC232B",
                }}
              >
                <Image src={faceFooter} alt="facebook" width={20} height={20} />
              </Box>
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #EC232B",
                }}
              >
                <Image
                  src={whatsFooter}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Box>
              <Box
                sx={{
                  background: "rgba(63, 60, 61, 1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #EC232B",
                }}
              >
                <Image
                  src={twitterFooter}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(83, 83, 83, 1)",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Copyright by Cyparta@2023{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "32px"
              }}
            >
              <button
                style={
                  lang === "ar" ? notActive : activeClass
                }
                onClick={() => handleToggleLangto("en")}
              >
                English
              </button>
              <button
                style={lang === "ar" ? activeClass : notActive}
                onClick={() => handleToggleLangto("ar")}
              >
                Arabic
              </button>
              {/* <Typography
                sx={{
                  fontSize: "14px",
                  ml: "32px",
                  color: "rgba(83, 83, 83, 1)",
                }}
                onClick={() => handleToggleLangto("ar")}
              >
                Arabic
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
