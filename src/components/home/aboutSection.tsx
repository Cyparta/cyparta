import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
// import MainButton from "../commons/MainButton";
import { MainButton } from "../../style/style";

import AboutImage from "../../assets/home/about-1.png";
import AboutImage2 from "../../assets/home/about-2.png";
import AboutImage3 from "../../assets/home/about-3.png";
import AboutImage4 from "../../assets/home/about-4.png";

import curvedImage from "../../assets/home/curved-arrow-.png";
import Image from "next/image";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios";
import { BASEURL } from "@/data/APIS";

// /apis/files/
// import Lottie from 'react-lottie';
// import aboutAnimation from "../../assets/home/about-animation.json";

const AboutSection = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang)
  const { heading, text, download } = useSelector((state: RootState) => state.lang.value.aboutUs)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // const fetchData = () => {
  //   const res = axios.get(`${BASEURL}apis/files/`, { responseType: 'arraybuffer' }).then(response => {
  //     console.log(response)
  //     const url = window.URL.createObjectURL(new Blob([response.data[0].pdf_1]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'Cyparta_Eng_Portfolio_compressed.pdf')
  //     document.body.appendChild(link)
  //     link.click()
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   console.log(res)
  //   return res
  // }
  return (
    <Box className="spad" sx={{ mb: "35px", pt:{xs:"0px !important", md:"100px !important"} }} id="about">
      <Grid container spacing={6}>
        {/* old  */}
        {/* <Grid item xs={12} sm={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { md: "column", xs: "row" },
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "0px 40px",
                            position: "relative",
                            mt: "24px",
                        }}
                    >
                        <Box alignSelf={"end"} sx={{ mt: { md: "24px" } }}>
                            <Image
                                src={AboutImage}
                                alt="about"
                                width={200}
                                height={200}
                                style={{
                                    borderRadius: "16px",
                                    zIndex: "8",
                                    position: "relative",
                                }}
                            />
                        </Box>
                        <Box>
                            <Image
                                src={AboutImage2}
                                alt="about"
                                width={200}
                                height={200}
                                style={{
                                    borderRadius: "16px",
                                    zIndex: "8",
                                    position: "relative",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <Image src={curvedImage} alt="curved" width={100} height={100} />
                        </Box>
                    </Box>
                </Grid> */}
        {/* new */}
        <Grid item xs={12} sm={12} md={5}>
          <Box sx={{ mt: "44px" }}>
            <Slider {...settings}>
              <div>
                <Image src={AboutImage} alt="test" style={{ width: "100%", height: "100%" }} />
              </div>
              <div>
                <Image src={AboutImage2} alt="test" style={{ width: "100%", height: "100%" }} />
              </div>
              <div>
                <Image src={AboutImage3} alt="test" style={{ width: "100%", height: "100%" }} />
              </div>
              <div>
                <Image src={AboutImage4} alt="test" style={{ width: "100%", height: "100%" }} />
              </div>
            </Slider>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} sx={{ position: "relative" }}>
          <Box>
            <Typography
              sx={{
                color: "rgba(37, 35, 36, 1)",
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "24px",
                textAlign: { xs: "center", md: lang === 'en' ? "left" : "right" },
              }}
            >
              {heading[lang]}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "32px",
                lineHeight: "24px",
                letterSpacing: "-0.5px",
                marginTop: { md: "105px" },
              }}
            >
              {text[lang]}
            </Typography>

            {/* <Box sx={{position:"absolute", top:"0"}}>
                            <Lottie options={defaultOptions} />
                        </Box>
                         */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://sadakatcdn.cyparta.com/Cyparta/PDF/Cyparta_Eng_Portfolio_compressed.pdf"
                target="_blank"
                download="Cyparta_Eng_Portfolio_compressed"
              >
                <MainButton>{download[lang]}</MainButton>
              </a>
                {/* <MainButton onClick={fetchData}>{download[lang]}</MainButton> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
