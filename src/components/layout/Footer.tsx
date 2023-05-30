import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
import footerImage from "../../assets/home/cyparta-logo.png";
import facebookIcon from "../../assets/icons/facebook.png";
import whatsIcon from "../../assets/icons/whats.png";
import faceFooter from "../../assets/icons/face-footer.png";
import whatsFooter from "../../assets/icons/whats-footer.png";
import twitterFooter from "../../assets/icons/twitter-footer.png";
import MainButton from "../commons/MainButton";
const Footer = () => {
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
        <Container sx={{width:{xs:"100% !important"}, padding:{xs:"0 !important"}}}>
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
                    Subscribe To get updated
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                      fontSize: "13px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                    suscipit turpis.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className=""
                    style={{
                      background: "transparent",
                      border: "1px solid #DFDFDF",
                      padding: "16px",
                      borderRadius: "10px",
                    }}
                  />
                  <button
                    style={{
                      padding: "16px",
                      color: "rgba(37, 35, 36, 1)",
                      borderRadius: "10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Subscribe Now
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container>
        <Grid container sx={{ padding: "56px 10px"}} spacing={2}>
          <Grid item xs={12} sm={12} md={6} spacing={1}>
            <Box sx={{ textAlign: "center"}}>
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
                Since our inception, we have been striving to create your own
                story in the world of digital marketing, by providing all the
                digital services and solutions you need to create and establis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Typography sx={{ mb: "24px", fontWeight:"600"}}>Home</Typography>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    About us
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Contact US
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Blog
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Our team
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ mb: "24px", fontWeight:"600" }}>Services</Typography>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Design
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Development
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    CRM systems
                  </li>
                  <li
                    style={{
                      color: "rgba(83, 83, 83, 1)",
                      fontSize: "14px",
                      margin: "0px 0px 16px 0px",
                      cursor: "pointer",
                    }}
                  >
                    Social media mangment
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
          <Grid item xs={6} md={4} sx={{display:{xs:"none", sm:"block"}}}>
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
                justifyContent:"end",
              }}
            >
              <button
                style={{
                  background: "rgba(236, 35, 43, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  borderRadius: "12px",
                  padding: "14px 15px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                English
              </button>
              <Typography
                sx={{
                  fontSize: "14px",
                  ml: "32px",
                  color: "rgba(83, 83, 83, 1)",
                }}
              >
                Arabic
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
