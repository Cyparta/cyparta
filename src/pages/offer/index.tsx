import React from "react";
import { Box, Container } from "@mui/material";
import HeroPage from "@/components/commons/heroPage";
import Navbar from "@/components/layout/navbar";
import TopNav from "@/components/layout/topNav";
import coverImage from "../../assets/cover/offer-cover.png";
import Footer from "@/components/layout/Footer";
import OfferForm from "@/components/offer/offerForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import OfferRequest from "@/components/offer/offerRequest";

const Index = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const main = useSelector((state: RootState) => state.lang.value.offerPrice);
  return (
    <Box className={`${lang}`}>
      <TopNav />
      <Navbar />
      <HeroPage
        text={main.leading[lang]}
        heading={main.heading[lang]}
        imageCover={coverImage}
      />

      <Container>
        <OfferForm />
      </Container>

      <Footer />
    </Box>
  );
};

export default Index;
