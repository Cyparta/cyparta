import React from "react";
import { Box } from "@mui/material";

import PageName from "../pageName";
import DashboardTable from "../dashboardTable";
import FormTable from "../formTable";
import CustomForm from "../customForm";
const CreateHolidy = () => {
  const columns = [
    {
      name: "name",
      value: "Employee Name",
      type: "input"
    },
    {
      name: "start",
      value: "start Date",
      type: "date"

    },
    {
      name: "end",
      value: "end Date",
      type: "date"
    },
    {
      name: "notes",
      value: "notes",
      type: "textarea"
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "2rem" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"holiday"}
          subName={"Create Holiday"}
        />

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: {xs: "90%" , sm : "50%"},
              height: "100%",
              bgcolor: "#fff",
              paddingBlock: 3,
            }}
          >
            <DashboardTable
              pageName={"Daily Attendence"}
              hint={"Please fill this form"}
            >
              <FormTable submitButtonLabel={"save"} sx={{ width: "100%" }}>


                {/* <Box sx={{ width: "100%" }}>
                  <TextField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Employee Name"
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
                </Box>
                  <Box sx={{ width: "100%" }}>
                    <CustomDatePicker placeholder="Start Date" />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <CustomDatePicker placeholder="End Date" />
                  </Box>
                
                <Box sx={{ width: "100%" }}>
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
                        color:"#fff"
                      },
                    }}
                  />
                </Box> */}

                <CustomForm columns={columns}/>
              </FormTable>
            </DashboardTable>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateHolidy;