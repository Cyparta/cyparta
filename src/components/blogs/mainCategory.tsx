import { Box } from "@mui/material";
import React from "react";

interface cateState {
  text: string;
  sx?: any;
}
const MainCategory = ({ text, sx }: cateState) => {
  return (
    <Box
      sx={{
        color: "rgba(157, 157, 157, 1)",
        border: "1px solid rgba(157, 157, 157, 1)",
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
