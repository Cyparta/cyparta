import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import services from "@/assets/services/ui.png";
import Image from "next/image";
import { MainButton } from "@/style/style";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Design = () => {
  const lang = useSelector((state: RootState) => state.lang.value.lang);
  return (
    <div>
      <TopNav />
      <Navbar />
      <Container>
        <Box sx={{ mt: "64px", mb: "70px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{ mb: "24px", fontSize: "32px", fontWeight: "600" }}
              >
                UI & UX
              </Typography>
              <Typography sx={{ mb: "24px" }}>
                At our software development company, we place a great deal of
                importance on providing exceptional UI/UX design services to our
                clients. We understand that the success of a software
                application depends not only on its functionality but also on
                its user experience.
              </Typography>
              <Typography sx={{ mb: "24px" }}>
                {" "}
                Our UI/UX design services are aimed at creating software
                applications that are intuitive, user-friendly, and visually
                appealing. We work closely with our clients to understand their
                business needs and target audience, and we use this information
                to create designs that are tailored to their specific
                requirements.
              </Typography>
              <Typography sx={{ mb: "24px" }}>
                Our team of experienced designers uses the latest design tools
                and techniques to create engaging user interfaces that enhance
                the user experience. We focus on creating designs that are
                simple, clear, and easy to navigate, ensuring that users can
                quickly and easily find what they need.
              </Typography>
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

          <Typography>
            We also place a great deal of emphasis on the visual appeal of our
            designs, creating interfaces that are not only functional but also
            aesthetically pleasing. We believe that a well-designed interface
            can greatly enhance the user experience and contribute to the
            success of a software application. In conclusion, our UI/UX design
            services are an integral part of our software development process.
            We believe that a well-designed user interface is essential for
            creating software applications that are easy to use, engaging, and
            effective. Our team of experienced designers is dedicated to
            creating designs that meet the specific needs of our clients and
            enhance the user experience.
          </Typography>
          <Link href="/#contact">
            <MainButton sx={{mt:"32px"}}>Hire Us</MainButton>
          </Link>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Design;
