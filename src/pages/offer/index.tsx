import React from "react";
import { Box, Container } from "@mui/material";
import HeroPage from "@/components/commons/heroPage";
import Navbar from "@/components/layout/navbar";
import TopNav from "@/components/layout/topNav";
import coverImage from "../../assets/cover/offer-cover.png";
import Footer from "@/components/layout/Footer";
import OfferForm from "@/components/offer/offerForm";
const Index = () => {
  return (
    <Box>
      <TopNav />
      <Navbar />
      <HeroPage
        text="thinking you make a better decision more than choosing us !!"
        heading="Offer Price"
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
