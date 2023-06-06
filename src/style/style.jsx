
import styled from "@emotion/styled";

import { Button } from "@mui/material";

export const MainButton = styled(Button)({
    background: "rgba(236, 35, 43, 1)", 
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "12px",
    padding: "10px 50px", // 15px 50px
    border: "none", 
    cursor: "pointer",
    fontSize:"16px",
    fontWeight:"500",
    textTransform:"capitalize",
    ":hover": {
        background: "rgba(236, 35, 43, 1)", 
    color: "rgba(255, 255, 255, 1)",
    }
})