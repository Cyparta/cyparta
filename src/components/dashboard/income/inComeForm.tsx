import React from "react";
import { Box } from "@mui/material";
import PageName from "../pageName";

import DashboardTable from "../dashboardTable";
import FormTable from "../formTable";
import CustomForm from "../customForm";
const InComeForm = () => {
  const columns = [
    {
      name: "money",
      value: "money",
      type: "number",
    },
    {
      name: "start",
      value: "Date",
      type: "date",
    },
    {
      name: "Receipt",
      value: "Receipt Number",
      type: "input",
    },
    {
      name: "select",
      value: "outcome input",
      type: "select",
    },
    {
      name: "notes",
      value: "notes",
      type: "textarea",
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "24px" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"income"}
          subName={"income Form"}
        />
      </Box>
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
            width: { xs: "90%", sm: "50%" },
            height: "100%",
            bgcolor: "#fff",
            paddingBlock: 3,
          }}
        >
          <DashboardTable
            pageName={"income Form"}
            hint={"Please fill this form"}
          >
            <FormTable submitButtonLabel={"save"} sx={{ width: "100%" }}>
              {/* <Box sx={{ width: "100%" }}>
                <TextField
                  id="money"
                  name="money"
                  type="text"
                  placeholder="money"
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
                <CustomDatePicker placeholder="Date" />
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Recipt Number"
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
              
              
              <FormControl fullWidth>
                <Select
                //   labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                //   label="Age"
                  onChange={handleChange}
                  sx={{
                    width: "100%",
                    border: "1px solid #312f30",
                    borderRadius: "20px",
                    bgcolor: "#312f30",
                    overflow: "hidden",
                    "& li": {
                      color: "#fff",
                      "&::placeholder": {
                        padding: "1rem",
                        color: "white",
                        opacity: "1",
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ width: "100%" }}>
              <TextField
              multiline
                  rows={4}
                  id="details"
                  name="details"
                  type="text"
                  placeholder="details"
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
              </Box> */}
              <CustomForm columns={columns} mbImg="10px" />
            </FormTable>
          </DashboardTable>
        </Box>
      </Box>
    </Box>
  );
};

export default InComeForm;
