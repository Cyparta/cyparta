import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const FormTable = ({
    children,
    submitButtonLabel,
    onSubmit,
    underButtonTitle = "",
    underButtonToPage = "",
    sx,
}: any) => {
    const router = useRouter();

    const toRegister = () => {
        router.push("/register");
    };

    const handleSubmit = (event:any) => {
        event.preventDefault(); // Prevents the default form submission behavior
        onSubmit(); // Calls the onSubmit prop provided by the parent component
    }

    return (
        <Stack
            component={"form"}
            onSubmit={handleSubmit}
            justifyContent={"center"}
            spacing={2}
            sx={{ paddingInline: { sx: "0", md: "2rem" }, paddingBlock: "3rem", ...sx }}
        >
            {children}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                <Button
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "30%",
                            xl: "30%",
                        },
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginTop: "1rem",
                        color: "white",
                        bgcolor: "#312F30",
                        padding: "1rem",
                        borderRadius: "35px",

                        "&:hover": {
                            bgcolor: "#312F30",
                        },
                    }}
                    type={"submit"}
                >
                    {submitButtonLabel}
                </Button>
                {underButtonTitle && underButtonToPage && (
                    <Box>
                        <Typography
                            variant="body1" // p
                            sx={{
                                color: "#000 !important",
                                fontWeight: "bold",
                                display: "inline-block",
                            }}
                        >
                            {underButtonTitle}
                        </Typography>
                        <Typography
                            onClick={toRegister}
                            variant="body1" // p
                            sx={{
                                color: "#ED1B24 !important",
                                fontWeight: "bold",
                                display: "inline-block",
                                paddingLeft: "0.5rem",
                                cursor: "pointer",
                            }}
                        >

                            {underButtonToPage}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Stack>
    );
};

export default FormTable;
