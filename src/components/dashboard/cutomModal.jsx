import React from "react";

import upload from "../../assets/dashboard/upload.svg";
import { Typography, Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import imgSize from "../../assets/dashboard/person1.png";
import line30 from "../../assets/dashboard/line30.svg";
import arrowUp from "../../assets/dashboard/arrow-up.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import Lottie from "lottie-react";
import uploadAnimation from "../../assets/dashboard/upload.json";
import Image from "next/image";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomModal = ({ handleClose, open }) => {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .css-1wnsr1i": {
            width: "632px",
            padding: "30px",
            border: 0,
            outline: 0,
            borderRadius: "10px",
            margin: "10px",
          },
        }}
      >
        <Box sx={style}>
          <Box>
            <Box
              sx={{
                display: "flex",
                ".css-ek1c9c-MuiTabs-root .css-heg063-MuiTabs-flexContainer": {
                  justifyContent: "space-around",
                  "& button": {
                    textTransform: "capitalize",
                  },
                },
                ".css-ek1c9c-MuiTabs-root .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                  {
                    padding: "5px",
                    borderRadius: "5px",
                  },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                indicatorColor={""}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      background: "#ED1B241A",
                      padding: "0 2px",
                      fontWeight: "600",
                      color: "#000",
                      border: "none",
                    },
                  ".css-heg063-MuiTabs-flexContainer": {
                    justifyContent: "space-between",
                  },
                }}
              >
                <Tab label="Upload Task" {...a11yProps(0)} />
                {/* <Typography
                  variant="h6"
                  component="h2"
                  sx={{ margin: "0px 10px", color: "red" }}
                >
                  |
                </Typography> */}
                <Tab label="comments" {...a11yProps(1)} />
              </Tabs>
            </Box>
            {/* Tabpanal 1 */}
            <TabPanel value={value} index={0}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <Box sx={{ mt: "40px" }}>
                    <Box sx={{ postion: "relative" }}>
                      {/* <img src={upload} alt="upload" /> */}
                      <Image src={upload} alt="upload"/>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "38%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Box sx={{ padding: "40px" }}>
                          <Lottie animationData={uploadAnimation} />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "53%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "#ED1B24",
                          fontSize: "18px",
                          fontWeight: "500",
                          fontFamily: "Tajawal"
                        }}
                      >
                        Upload Your Files Here!
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: "36px" }}>
                    <TextField
                      name="test"
                      type="text"
                      id="name"
                      placeholder="add links or task here..."
                      label=""
                      multiline
                      rows={4}
                      maxRows={5}
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        input: {
                          width: "100%",
                          height: "110px",
                          "&::placeholder": {
                            padding: "1rem",
                            color: "#000 !important",
                            opacity: "1",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "30%",
                          xl: "30%",
                        },
                        fontWeight: "bold",
                        marginTop: "30px",
                        color: "white",
                        bgcolor: "#312F30",
                        padding: "10px 9rem",
                        borderRadius: "35px",
                        fontSize: "25px",
                        textTransform: "capitalize",
                        "&:hover": {
                          bgcolor: "#312F30",
                        },
                      }}
                    >
                      submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            {/* tabpanal 2 */}
            <TabPanel value={value} index={1}>
              <Box sx={{ mt: "0px", width: "100%" }}>
                {/* all comments */}
                <Box sx={{ display: "flex" }}>
                  <Box>
                    {/* <img src={imgSize} alt="test" /> */}
                    <Image src={imgSize} alt="test"/>
                  </Box>
                  <Box sx={{ marginLeft: "10px", flex: 1 }}>
                    <Typography component="span" fontWeight="600">
                      Eslam Elhadedy{" "}
                    </Typography>
                    <Typography component="span" sx={{ color: "red" }}>
                      ( admin )
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "#312F301A",
                        borderRadius: "4px",
                        width: "100%",
                        padding: "1px 10px ",
                        mt: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ mt: "13px" }}>
                          You need to redesign the login screen
                        </Box>
                        <Box>
                          <Typography component="span">
                            <AccessTimeIcon fontSize="16px" />
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              margin: "0 5px",
                              fontSize: "14px",
                              color: "#3333339c",
                            }}
                          >
                            30 min ago
                          </Typography>
                          <Typography component="span" fontSize="18px">
                            <MoreHorizIcon />
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ padding: 0, mt: "20px", mb: "5px" }}>
                        <Typography
                          component="span"
                          sx={{
                            background: "#ED1B241A",
                            borderRadius: "5px",
                            padding: "3px 10px",
                          }}
                        >
                          Like
                        </Typography>{" "}
                        <Typography component="span" m="0 5px">
                          {/* <img src={line30} alt="test" />{" "} */}
                          <Image src={line30} alt="test" />
                        </Typography>
                        <Typography component="span">
                          {/* <img src={arrowUp} alt="test" />{" "} */}
                          <Image src={arrowUp} alt="test" />
                        </Typography>
                        <Typography component="span" color="#ED1B24">
                          2 {""}
                        </Typography>
                        <Typography component="span">Replay</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* comment Box */}
                <Box
                  sx={{
                    display: "flex",
                    background: "#312F301A",
                    // mt: "15px",
                    padding: "10px",
                    // alignItems: "center",
                    mt: "200px",
                    borderRadius: "10px",
                  }}
                >
                  <Box mt="12px">
                    {/* <img src={imgSize} alt="comment" /> */}
                    <Image src={imgSize} alt="comment"/>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <TextField
                      id="test"
                      label=""
                      multiline
                      variant="outlined"
                      placeholder="add comment"
                      sx={{
                        width: "100%",
                        "& fieldset": { border: "none" },
                      }}
                    />
                  </Box>
                  <Box mt="13px">
                    <SendIcon />
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
