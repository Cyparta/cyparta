import React from "react";
import PageName from "../pageName";
import { Box, Typography } from "@mui/material";
import CustomContainer from "../customContainer";
import img from '@/assets/dashboard/person1.png'
import Image from "next/image";
const ViewHoliday = () => {
  const rows = [
    {
      name: "employe Name",
      start: "09:00:25 Am",
      end: "09:00:25 Am",
      days: "00.00.25",
      notes: "need vacition to spend it with her family",
      history: "09:00:25 Am",
    },
    {
      name: "employe Name",
      start: "09:00:25 Am",
      end: "09:00:25 Am",
      days: "00.00.25",
      notes: "need vacition to spend it with her family",
      history: "09:00:25 Am",
    },
  ];
  const columns = [
    { value: "employe Name", name: "name", type: "image" },
    { value: "Start Date", name: "start", type: "text" },
    { value: "End Date", name: "end", type: "text" },
    { value: "Days", name: "days", type: "text" },
    { value: "Notes", name: "notes", type: "text" },
    { value: "Holiday History", name: "history", type: "text", color: "red"},
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "2rem" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"Holidays"}
          subName={"View Holidays"}
        />

        <Box mt="20px" mb="0">
          <CustomContainer chipFilter={true} rows={rows} columns={columns}/>
        </Box>

        <Box>
          <Image src={img} alt="holidays"/>
          <Typography variant="inherit" sx={{padding: "0 15px", fontSize: "20px"}}>hosam salah</Typography>
        </Box>
        <Box mt="0" mb="150px">
        <CustomContainer chipFilter={true} rows={rows} columns={columns}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewHoliday;