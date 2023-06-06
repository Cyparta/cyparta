import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomContainer from "../customContainer";
import EditIcon from "@mui/icons-material/Edit";
import person2 from "@/assets/dashboard/person2.png";
import scan from "@/assets/dashboard/scan.svg";
import Image from "next/image";
const Profile = () => {
  const columns = [
    { value: "employe Name", name: "name", type: "image" },
    { value: "Time in", name: "timeIn", type: "text" },
    { value: "Time Out", name: "lateBy", type: "text" },
    { value: "Late By", name: "timeOut", type: "text" },
    { value: "Over Time", name: "OverTime", type: "text" },
    { value: "Work Duration", name: "workDuration", type: "text" },
    { value: "Status", name: "status", type: "text", color: "#00C875" },
  ];
  const rows = [
    {
      name: "employe Name",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
    },
    {
      name: "employe Name",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
    },
    {
      name: "employe Name",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
    },
  ];
  return (
    <Box p="0 30px" mb="100px" sx={{height: "100%"}}>
      {/* top Header */}
      <Box>
        <Typography variant="h4" color="#ED1B24">
          Profile
        </Typography>
      </Box>
      {/* Rows  */}
      <Grid container spacing={4} mt="10px">
        {/* COL 1*/}
        <Grid item xs={12} sm={12} md={4} lg={3}>
          {/* Card 1 */}
          <Box>
            <Box
              sx={{
                textAlign: "center",
                padding: "20px",
                boxShadow: "0px 0px 6px #00000029",
                borderRadius: "10px",
              }}
            >
              <Box mt="10px">
                <Image src={person2} alt="profile"/>
              </Box>
              <Typography
                sx={{ color: "#312F30", fontSize: "10px", mb: "5px" }}
              >
                change profile picture <EditIcon sx={{ color: "#ED1B24" }} />
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "700", fontSize: "24px" }}
              >
                Ahmed Hatem
              </Typography>
              <Typography sx={{ color: "#AFAFAF", mb: "20px" }}>
                Admin
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  boxShadow: "0px 0px 2px #00000029",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <Typography component="span" fontSize="20px">
                  Phone: 01097277433
                </Typography>
                <Typography component="span" sx={{ color: "#ED1B24" }}>
                  <EditIcon />
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  boxShadow: "0px 0px 2px #00000029",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <Typography component="span" fontSize="20px">
                  password:*****
                </Typography>
                <Typography component="span" sx={{ color: "#ED1B24" }}>
                  <EditIcon />
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* card 2 */}
          <Box mt="20px">
            <Box
              sx={{
                padding: "20px",
                boxShadow: "0px 0px 6px #00000029",
                borderRadius: "10px",
              }}
            >
              {/* items */}
              <Box mb="10px">
                <Typography
                  component="span"
                  sx={{
                    color: "#ED1B24",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  salary
                </Typography>{" "}
                :{" "}
                <Typography
                  component="span"
                  fontWeight="600"
                  sx={{ fontSize: "24px", fontWeight: "500" }}
                >
                  5000
                </Typography>
              </Box>
              <Box mb="10px">
                <Typography
                  component="span"
                  sx={{
                    color: "#ED1B24",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  Total works Our
                </Typography>{" "}
                :{" "}
                <Typography
                  component="span"
                  fontWeight="600"
                  sx={{ fontSize: "24px", fontWeight: "500" }}
                >
                  2000
                </Typography>
              </Box>
              <Box mb="10px">
                <Typography
                  component="span"
                  sx={{
                    color: "#ED1B24",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  salary deduction
                </Typography>{" "}
                :{" "}
                <Typography
                  component="span"
                  fontWeight="600"
                  sx={{ fontSize: "24px", fontWeight: "500" }}
                >
                  Available Holidays
                </Typography>
              </Box>
              <Box mb="10px">
                <Typography
                  component="span"
                  sx={{
                    color: "#ED1B24",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  salary
                </Typography>{" "}
                :{" "}
                <Typography
                  component="span"
                  fontWeight="600"
                  sx={{ fontSize: "24px", fontWeight: "500" }}
                >
                  5000
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* card 3  */}
          <Box mt="20px">
            <Box
              sx={{
                padding: "30px 20px",
                boxShadow: "0px 0px 6px #00000029",
                borderRadius: "10px",
              }}
            >
              <Box sx={{display: "flex", justifyContent:"center"}}>
                <Image src={scan} alt="test"/>
               </Box>
            </Box>
          </Box>
        </Grid>
        {/* COL 2*/}
        <Grid item xs={12} sm={12} md={8} lg={9} mb="120px">
          <CustomContainer chipFilter={false} rows={rows} columns={columns} />
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Profile;
