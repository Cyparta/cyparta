import React from 'react'

import { Box, Typography } from "@mui/material";
import PageName from '../pageName';
import scanImg from "@/assets/dashboard/scan.svg";
import Image from 'next/image';

import CustomContainer from "@/components/dashboard/customContainer";
const DailyAttendence = () => {
  const columns = [
    { value: "employe Name", name: "name", type: "image", color: "#282A3C" },
    { value: "Time in", name: "timeIn", type: "text" },
    { value: "Time Out", name: "lateBy", type: "text" },
    { value: "Late By", name: "timeOut", type: "text" },
    { value: "Over Time", name: "OverTime", type: "text" },
    { value: "Work Duration", name: "workDuration", type: "text" },
    { value: "Status", name: "status", type: "text", color: "#00C875" },
    { value: "job title", name: "job", type: "text", color: "red" },
  ];
  const rows = [
    {
      name: "Demiana Magdy",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
      job: "UI/UX Designer",
    },
    {
      name: "Maram Khaled",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
      job: "Back-End Developer",
    },
    {
      name: "Ahmed Hatem",
      timeIn: "09:00:25 Am",
      timeOut: "09:00:25 Am",
      lateBy: "00.00.25",
      OverTime: "00.00.25",
      workDuration: "09:00:25 Am",
      status: "present",
      job: "Back-End Developer",
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "24px" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"Attendence"}
          subName={"Daily Attendence"}
        />
      </Box>

      <div
      // style={{
      //   height: "200px",
      //   margin: "0 auto",
      //   maxWidth: 64,
      //   width: "100%",
      // }}
      >
        {/* <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value=""
          viewBox={`0 0 256 256`}
        /> */}
        <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
          {/* <img src={scanImg} alt="scan" /> */}
          <Image src={scanImg} alt="scan" style={{width:"5%", height:"5%"}}/>
        </Box>
      </div>
      <Box mb="0">
        <Typography
          sx={{
            color: "#ED1B24",
            textAlign: "center",
            mt: "30px",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Tajawal"
          }}
        >
          Please Scan QR Code
        </Typography>
      </Box>
      <Box mt="40px" mb="150px">
        <CustomContainer rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default DailyAttendence;