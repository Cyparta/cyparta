import React, { useEffect } from "react";
import { Box, Typography, Grid, Container, FormControl } from "@mui/material";
import Navbar from "@/components/layout/navbar";
import TopNav from "@/components/layout/topNav";
import HeroPage from "@/components/commons/heroPage";
import coverImage from "../../assets/cover/careers-cover.png";
import bagIcon from "../../assets/icons/bag-icon.png";
import fullTimeIcon from "../../assets/icons/baag-icon.png";
import siteIcon from "../../assets/icons/lap-icon.png";
import arrowIconsCareers from "../../assets/icons/arrow-icon-careers.png";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CustomSelect from "@/components/careers/customSelect";
// import MainButton from "@/components/commons/MainButton";
import arrowIcon from '../../assets/icons/arrow-down-select.png';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestGetCareers } from "@/store/careers/careersSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Index = () => {
  const dispatch = useDispatch<AppDispatch>()

  const lang = useSelector((state: RootState) => state.lang.value.lang)
  const careers = useSelector((state: RootState) => state.careers.careers)

  const career = useSelector((state: RootState) => state.lang.value.careerPage)

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  useEffect(() => {
    dispatch(RequestGetCareers());
  }, [])
  return (
    <Box className={lang}>
      <TopNav />
      <Navbar />
      <Box sx={{ position: "relative" }}>
        <HeroPage
          text={career.text[lang]}
          heading={career.heading[lang]}
          imageCover={coverImage}
        />
        <Box
          sx={{
            position: { md: "absolute" },
            bottom: "0px",
            width: "100%",
          }}
        >
          <Container>
            <Box
              sx={{
                background: "#CCCCCC",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                  <Box>
                    <CustomSelect options={options} defaultValue="Category" icon={<KeyboardArrowDownOutlinedIcon />} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <CustomSelect options={options} defaultValue="Work from" icon={<KeyboardArrowDownOutlinedIcon />} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CustomSelect options={options} defaultValue="Job type" icon={<KeyboardArrowDownOutlinedIcon />} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <button
                    style={{
                      background: "rgba(236, 35, 43, 1)",
                      color: "rgba(255, 255, 255, 1)",
                      borderRadius: "12px",
                      padding: "15px 50px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "20px",
                      fontWeight: "500",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    {career.btnSearch[lang]}
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container>
        {/* <Box sx={{ display: "flex", alignItems: "center", mb: "40px", mt: "20px" }}>
          <Checkbox {...label} />
          <Typography sx={{ fontSize: "13px" }}>
            I need to be noticed if there is an empty position
          </Typography>
        </Box> */}
        {/* loop will be here  remove this and pust a comment */}
        <Grid container spacing={3} mt="32px">
          {careers.map((career:any) => {
            return <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#FCFBFC",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#252324",
                      fontWeight: "500",
                      mb: "16px",
                    }}
                  >
                    {career?.category}
                  </Typography>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mb: "8px",
                      }}
                    >
                      <Image
                        src={fullTimeIcon}
                        alt="bag"
                        width={15}
                        height={15}
                      />
                      <p style={{ fontSize: "14px", color: "#727071" }}>
                        {career?.jop_type === "F" ? "Full time" : "Part time"}
                      </p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mb: "8px",
                      }}
                    >
                      <Image src={bagIcon} alt="bag" width={15} height={15} />
                      <p style={{ fontSize: "14px", color: "#727071" }}>
                        {career?.work_from === "S" ? "On Site" : career?.work_from === "R" ? "Remote" : "Hyprid"}
                      </p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mb: "8px",
                      }}
                    >
                      <Image src={siteIcon} alt="bag" width={15} height={15} />
                      <p style={{ fontSize: "14px", color: "#727071" }}>
                        {career?.posted_at === null ? "Posted 4 months ago" : career?.posted_at}
                      </p>
                    </Box>
                  </Box>
                  <Link href={`/careers/${career?.id}`}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          color: "#252324",
                          fontWeight: "500",
                          margin: "0 8px",
                          display: "inline-block",
                        }}
                      >
                        Apply now
                      </span>
                      {/* <Image
                        alt="test"
                        src={arrowIconsCareers}
                        width={24}
                        height={24}
                      /> */}
                      {lang === "en" ? <ArrowRightAltIcon /> : <KeyboardBackspaceIcon /> }
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
          })}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};



export default Index;
