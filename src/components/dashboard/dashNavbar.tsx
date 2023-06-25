import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

////// Icons /////////////
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
///////////////////////////////////

import person from "../../assets/dashboard/ahmed.png";

import person1 from "../../assets/dashboard/ahmed.png";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

const nestedList = [
  {
    name: "Eslam Elhadedy rated your task on CYPARTA project.",
    img: person1
  },
  {
    name: "Eslam Elhadedy rated your task on CYPARTA project.",
    img: person1
  },
];

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function DashNavbar(props:any) {
  const [selectedImage, setSelectedImage] = useState("");
  const [preview, setPreview] = useState("");
  const inputImage = useRef();
  const [state, setState] = React.useState({
    left: false,
  });
  const [isNotification, setIsNotification] = useState(false)
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "60vw", background: "#fff" }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{padding: "25px"}}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Notifications</Typography>
          <Typography color="#00000099" fontSize="14px">
            See All
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#00000012",
            height: "1px",
            width: "100%",
            mt: "10px"
          }}
        ></Box>
        {nestedList.map((item) => (
          <>
            <Box sx={{ display: "flex", padding: "10px 0" }}>
              <Image src={person} alt="person" width="47" height="47"/>
              <Typography sx={{ marginLeft: "8px", fontFamily: "Tajawal", fontSize: "18px" }}>Eslam Elhadedy rated your task on CYPARTA project.</Typography>
            </Box>
            <Box
              sx={{
                background: "#00000012",
                height: "1px",
                width: "100%",
                mt: "10px"
              }}
            ></Box>
            <Box sx={{ display: "flex", padding: "10px 0" }}>
              <Image src={person} alt="person" width="47" height="47"/>
              <Typography sx={{ marginLeft: "8px", fontFamily: "Tajawal", fontSize: "18px" }}>Eslam Elhadedy rated your task on CYPARTA project.</Typography>
            </Box>
          </>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          width: "100%",
          position: "relative",
          bgcolor: "#312F30",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/** Right Side */}
            <Box></Box>

            {/** Left Side */}
            <Box
              sx={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "end",
                paddingInline: 3,
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    border: "2px solid #312F30",
                    boxShadow: "0 0 2px #fff",
                    borderRadius: "50%",
                    padding: "2px",
                    position: "relative",
                    cursor: "pointer",
                    display: { xs: "none", md: "block" }
                  }}
                  onClick={() => setIsNotification((old) => !old)}
                >
                  <NotificationsNoneIcon />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "40px",
                      background: "#fff",
                      width: "439px",
                      padding: "25px",
                      right: "0",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 25px #00000029",
                      color: "#312F30",
                      display: isNotification ? "block" : "none"
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Notifications</Typography>
                      <Typography color="#00000099" fontSize="14px">
                        See All
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        background: "#00000012",
                        height: "1px",
                        width: "100%",
                        mt: "10px"
                      }}
                    ></Box>

                    <Box sx={{ display: "flex", padding: "10px 0" }}>
                      <Image src={person} alt="person" width="47" height="47"/>              
                      <Typography sx={{ marginLeft: "8px", fontFamily: "Tajawal", fontSize: "18px" }}>Eslam Elhadedy rated your task on CYPARTA project.</Typography>
                    </Box>
                    <Box
                      sx={{
                        background: "#00000012",
                        height: "1px",
                        width: "100%",
                        mt: "10px"
                      }}
                    ></Box>
                    <Box sx={{ display: "flex", padding: "10px 0" }}>
                      <Image src={person} alt="person" width="47" height="47"/>                                      
                      <Typography sx={{ marginLeft: "8px", fontFamily: "Tajawal", fontSize: "18px" }}>Eslam Elhadedy rated your task on CYPARTA project.</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    button: { color: "#fff" },
                    display: { md: "none" },
                    cursor: "pointer",
                  }}
                >
                  <React.Fragment key={"left"}>
                    <Button onClick={toggleDrawer("left", true)}>
                      <NotificationsNoneIcon />
                    </Button>
                    <Drawer
                      anchor={"left"}
                      open={state["left"]}
                      onClose={toggleDrawer("left", false)}
                      sx={{
                        ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
                          background: "#fff",
                          borderRadius: "10p",
                          boxShadow: '0px 0px 25px #00000029',
                        },
                      }}
                    >
                      {list("left")}
                    </Drawer>
                  </React.Fragment>
                </Box>
                <Box
                  sx={{
                    border: "2px solid #312F30",
                    boxShadow: "0 0 2px #fff",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                >
                  <SettingsIcon />

                </Box>
              </Box>
              {/* <Box
                component={"input"}
                type="file"
                ref={inputImage}
                name="myImage"
                sx={{
                  display: "none",
                }}
                onChange={(event) => {
                  const preview = URL.createObjectURL(event.target.files[0]);
                  setPreview(preview);
                  setSelectedImage(event.target.files[0]);
                }}
              /> */}
              {/* <Box
                onClick={() => {
                  inputImage.current.click();
                }}
                sx={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: `url('${preview}')`,
                }}
              ></Box> */}
              <Link href="/dashboard/profile">
                <Box sx={{ width: "50px", height: "50px", cursor: "pointer" }}>
                  {/* <img src={person1} width="100%" /> */}
                  <Image src={person1} alt="user" style={{width:"100%", height:"100%"}}/>
                </Box>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography>Abdelrhman...</Typography>
                <Typography>Admin</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DashNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashNavbar;
