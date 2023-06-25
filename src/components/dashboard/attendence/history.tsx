import React from 'react'
import PageName from '../pageName';
import { Box } from '@mui/material';
import CustomContainer from '../customContainer';
const History = () => {
    const columns = [
        { value: "employe Name", name: "name", type: "image" },
        { value: "Time in", name: "timeIn", type: "text" },
        { value: "Time Out", name: "lateBy", type: "text" },
        { value: "Late By", name: "timeOut", type: "text" },
        { value: "Over Time", name: "OverTime", type: "text" },
        { value: "Work Duration", name: "workDuration", type: "text" },
        { value: "Status", name: "status", type: "text", color: "#00C875" },
        { value: "Date", name: "date", type: "text", color: "red" },
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
          date: "6",
        },
        {
          name: "employe Name",
          timeIn: "09:00:25 Am",
          timeOut: "09:00:25 Am",
          lateBy: "00.00.25",
          OverTime: "00.00.25",
          workDuration: "09:00:25 Am",
          status: "present",
          date: "6",
        },
        {
          name: "employe Name",
          timeIn: "09:00:25 Am",
          timeOut: "09:00:25 Am",
          lateBy: "00.00.25",
          OverTime: "00.00.25",
          workDuration: "09:00:25 Am",
          status: "present",
          date: "6",
        },
      ];
  return (
    <Box>
    <Box>
      <PageName sx={{ color: "#000" }}
        name={"Attendence"}
        subName={"History"}/>
    </Box>
    <CustomContainer rows={rows} columns={columns} chipFilter={true}/>
  </Box>
  )
}

export default History