import React from 'react'
import PageName from '../pageName';
import { Box } from '@mui/material';
import CustomContainer from '../customContainer';
const IncomeTable = () => {
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
        {value: "", name: "checkbox", type: "checkbox"},
        { value: "employe Name", name: "name", type: "image" },
        { value: "Start Date", name: "start", type: "text" },
        { value: "End Date", name: "end", type: "text" },
        { value: "Days", name: "days", type: "text" },
        { value: "Notes", name: "notes", type: "text" },
        { value: "Holiday History", name: "history", type: "text", color: "red"},
      ];
  return (
    <Box>
    <Box>
      <PageName sx={{ color: "#000" }}
        name={"outcome"}
        subName={"IncomeTable"}/>
    </Box>
    <CustomContainer rows={rows} columns={columns} chipFilter={true}/>
  </Box>
  )
}

export default IncomeTable