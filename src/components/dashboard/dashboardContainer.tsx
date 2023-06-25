import { Box } from "@mui/material";
import React from "react";

const DashboardContainer = ({children}:any) => {
  return (
    <Box sx={{ padding: 2 }}>
      {children}
      </Box>
  )
}

export default DashboardContainer