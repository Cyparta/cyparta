import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomDatePicker from "./customDatePicker";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MenuProps = {
  PaperProps: {
    sx: {
      color: "#fff",
      height: 100,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(15px)",
      borderRadius: "0 0 0 15px",

      "& .MuiMenuItem-root": {
        fontSize: {
          xs: "1.2rem",
          sm: "1.2rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      "& .MuiMenuItem-root:hover": {
        bgcolor: "rgba(128 ,47 ,31,0.8)",
      },
      "& .Mui-selected:hover": {
        backgroundColor: "rgb(128 47 31)!important",
      },
    },
  },
};

interface Column {
  type: string;
  name?: string;
  value?: string;
}

interface CustomFormProps {
    columns: Column[];
    mbImg: string
}

const CustomForm = ({ columns = [], mbImg = "0" } : CustomFormProps) => {
  const inputImage = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<File[]>([]);
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrl: string[] = [];
    images.forEach((image) => newImagesUrl.push(URL.createObjectURL(image)));
    setImagesUrl(newImagesUrl);

    return () => {
      newImagesUrl.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const onImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setImages(fileList);
    }
  };

  return (
    <>
      {columns.map((col) => {
        if (col.type === "input") {
          return (
            <TextField
              key={col.name}
              id={col.name}
              name={col.name}
              type="text"
              placeholder={col.value}
              variant="outlined"
              sx={{
                width: "100%",
                border: "1px solid #312f30",
                borderRadius: "20px",
                bgcolor: "#312f30",
                overflow: "hidden",
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    padding: "1rem",
                    color: "white",
                    opacity: "1",
                  },
                },
              }}
            />
          );
        }

        if (col.type === "date") {
          return (
            <Box key={col.name} sx={{ width: "100%" }}>
              <CustomDatePicker placeholder={col.value} />
            </Box>
          );
        }

        if (col.type === "textarea") {
          return (
            <>
              <Box sx={{ position: "relative" }}>
                <TextField
                  multiline
                  rows={4}
                  id="notes"
                  name="notes"
                  type="text"
                  placeholder="notes"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    border: "1px solid #312f30",
                    borderRadius: "20px",
                    bgcolor: "#312f30",
                    overflow: "hidden",
                    input: {
                      color: "#fff",
                      "&::placeholder": {
                        padding: "1rem",
                        color: "white",
                        opacity: "1",
                      },
                    },
                    "& textarea": {
                      borderColor: "#312f30",
                      color: "#fff",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: mbImg,
                    right: "10px",
                    color: "#fff",
                  }}
                  onClick={() => inputImage.current?.click()}
                >
                  <InsertPhotoIcon />
                </Box>
                <Box
                  component="input"
                  type="file"
                  multiple
                  name="myImage"
                  ref={inputImage}
                  sx={{
                    display: "none",
                  }}
                  onChange={onImgChange}
                />
              </Box>
              {imagesUrl && (
                <Slider {...settings}>
                  {imagesUrl.map((imageSrc) => (
                    <Box
                      key={imageSrc}
                      mt="10px"
                      sx={{
                        "& img": {
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        },
                      }}
                    >
                      <img src={imageSrc} alt="slide" width="100%" />
                    </Box>
                  ))}
                </Slider>
              )}
            </>
          );
        }

        if (col.type === "number") {
          return (
            <Box key={col.name} sx={{ width: "100%" }}>
              <TextField
                id="money"
                placeholder={"Money"}
                type="number"
                variant="outlined"
                name="money"
                sx={{
                  width: "100%",
                  border: "1px solid #312f30",
                  borderRadius: "20px",
                  bgcolor: "#312f30",
                  overflow: "hidden",
                  input: {
                    color: "white",
                    "&::placeholder": {
                      padding: "1rem",
                      color: "white",
                      opacity: "1",
                    },
                  },
                  "& .MuiInput-input": { color: "white" },
                  "& fieldset": { border: "none" },
                }}
              />
            </Box>
          );
        }

        if (col.type === "select") {
          return (
            <Box
              key={col.name}
              sx={{
                width: "100%",
                "& .SelectOptionsDropDown::placeholder": {
                  color: "red",
                },
                "& select": {
                  width: "100%",
                  bgcolor: "#312f30",
                  borderRadius: "20px",
                  fontFamily: "Tajawal",
                  fontWeight: "400",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.2rem",
                    md: "20px",
                    lg: "20px",
                    xl: "20px",
                  },
                  border: "1px solid #fff",
                  padding: {
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 2,
                  },
                  paddingLeft: {
                    xs: 4,
                    sm: 4,
                    md: 4,
                    lg: 4,
                    xl: 4,
                  },
                  color: "#fff",
                },
              }}
            >
              <Box className="selectdiv">
                <select name="cars" id="cas">
                  <option value="" disabled selected>
                    {col.value}
                  </option>
                  <option value="volvo">volvo</option>
                  <option value="saab">saab</option>
                  <option value="mercedes">test</option>
                  <option value="audi">test</option>
                </select>
                <ArrowDropDownIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "15px",
                    color: "#fff",
                    transform: "translateY(-50%)",
                  }}
                />
              </Box>
            </Box>
          );
        }

        return null;
      })}
    </>
  );
};

export default CustomForm;
