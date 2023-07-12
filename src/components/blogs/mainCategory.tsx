import { Box } from "@mui/material";
import React from "react";

interface cateState {
  text: string;
  sx?: any;
  active?:boolean
}
const MainCategory = ({ text, sx, active=false }: cateState) => {
  return (
    <Box
      sx={{
        color: active ? "#EC232B" : "rgba(157, 157, 157, 1)",
        border: active? "1px solid #EC232B" :"1px solid rgba(157, 157, 157, 1)",
        display: "inline-block",
        padding:"8px 16px",
        borderRadius:"20px"
      }}
    >
      {text}
    </Box>
  );
};

export default MainCategory;
