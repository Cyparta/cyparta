import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import coverImage from "../../assets/projects/cover.png";

interface HeroPageProps {
  text?: string;
  heading?: string;
  imageCover?: any;
}
const HeroPage = ({ text, heading, imageCover }: HeroPageProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Image
        src={imageCover}
        alt="cover"
        width={500}
        height={375}
        style={{ width: "100%" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          width: "100%",
          transform: "translateY(-50%)",
        }}
      >
        <Container>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: {xs:"30px", md:"48px"},
              fontWeight: "700",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: {xs:"18px", md:"24px"},
              color: "rgba(255, 255, 255, 1)",
              width: {md:"502px"},
              margin: "0 auto",
              display: "inline-block",
              fontWeight: "400",
              
            }}
          >
            {text}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroPage;
