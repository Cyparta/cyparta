import { Typography } from "@mui/material";
import React from "react";

interface pageProps {
    name?: string,
    subName?: string,
    sx?: any,
    subTitle?: string
}
const PageName = ({ name, subName, sx = {}, subTitle = "" }: pageProps) => {
    return (
        <Typography
            variant="h6"
            sx={{ ...sx, fontFamily: "Tajawal", fontSize: "24px" }}
        >
            {`${name} >> `}
            <Typography
                variant="h6"
                component="span"
                sx={{ color: subTitle.length > 0 ? "" : "red" }}
            >
                {`${subName}`}
            </Typography>{" "}
            {subTitle && (
                <>
                    {">>"} {""}
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{ color: subTitle.length > 0 ? "red" : "" }}
                    >
                        {subTitle}
                    </Typography>
                </>
            )}
        </Typography>
    );
};

export default PageName;
