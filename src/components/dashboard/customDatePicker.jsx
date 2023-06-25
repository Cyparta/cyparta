import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const CustomDatePicker = ({ placeholder = "Date" }) => {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}       sx={{
        ".css-1xyged3-MuiInputBase-root-MuiOutlinedInput-root": {
          background:"#312f30 !important",
          borderRadius: "20px",
        },
        ".css-1xyged3-MuiInputBase-root-MuiOutlinedInput-root input::placeholder": {
          color:"#fff"
        },
        ".css-i4bv87-MuiSvgIcon-root" : {
          color:"#fff"
        },
        "& input::placeholder": { opacity: 1, padding: "1rem" }
      }}>
        <DesktopDatePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                width: "100%",
                color: "#fff",
                "& input::placeholder": { opacity: 1, padding: "1rem" },
                "& .MuiInputBase-root": {
                  borderRadius: "20px",
                  backgroundColor: "#312f30",
                },
                svg: { color: "#fff" },
                input: { color: "#fff", background:"red !important" },
              }}
              inputProps={{
                ...params.inputProps,
                placeholder,
              }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
