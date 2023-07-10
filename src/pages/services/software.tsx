import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import services from "@/assets/services/software.png";
import Image from "next/image";
import { MainButton } from "@/style/style";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Design = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const main = useSelector(
    (state: RootState) => state.lang.value.servicesPages.software
  );
  const hire = useSelector(
    (state: RootState) => state.lang.value.servicesPages.hireUs
  );
  return (
    <div className={lang}>
      <TopNav />
      <Navbar />
      <Container>
        <Box sx={{ mt: "64px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}
              >
                {main.heading[lang]}
              </Typography>
              <Typography sx={{ mb: "24px" }}>{main.text[lang]}</Typography>
              <Typography sx={{ mb: "24px" }}>{main.text2[lang]}</Typography>
              <Typography sx={{ mb: "24px" }}>{main.text3[lang]}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ textAlign: lang === "en" ? "right" : "left" }}
            >
              <Image src={services} alt="test" />
            </Grid>
          </Grid>
        </Box>

        <Typography>{main.text4[lang]}</Typography>

        <Link href="/contact">
          <MainButton sx={{ mt: "32px" }}>{hire[lang]}</MainButton>
        </Link>
      </Container>
      <Footer />
    </div>
  );
};

export default Design;
