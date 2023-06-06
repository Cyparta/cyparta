import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import InputControl from "../commons/InputControl";
import Image from "next/image";
// import MainButton from "../commons/MainButton";
import { MainButton } from '@/style/style';


const OfferForm = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            padding: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <InputControl type="text" placeholder="name" />
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputControl type="text" placeholder="Email Address" />
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
                <InputControl type="text" placeholder="Development" />
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputControl type="text" placeholder="Phone number" />
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
                <InputControl type="text" placeholder="Country" />
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputControl type="text" placeholder="The proposed budget" />
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
                placeholder="Write a brief about your services and products required on the site"
              ></textarea>
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
                placeholder="What are the sites that you like and see fit for your idea of ​​design and programming"
              ></textarea>
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
                placeholder="Other notes and additions"
              ></textarea>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <MainButton>Send</MainButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferForm;
