import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Chip, Input, TextField, Typography } from "@mui/material";

// Form Validation
import { useFormik } from "formik";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import BasicDatePicker from "./BasicDatePicker";
import useFetch from "../../../hooks/useFetch";
import { useDispatch } from "react-redux";
import moment from "moment/moment";

export default function MenuFilter({ filters, tableUrl, storeSet, chipFilter = "Chip Filled" }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = React.useState();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setTimeout(() => {
      setSelected("");
    }, [300]);
  };

  const [request, data] = useFetch({
    url: tableUrl,
    method: "get",
  });
  // set initial, validate, Get, and submit form data using formik library and send request to server
  const { handleSubmit, handleChange, values, handleReset, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        created_at: "",
        fromDate: "",
        toDate: "",
      },

      onSubmit: () => {
        const filterValue = {};
        Object.keys(values).forEach((key) => {
          if (values[key] !== "") {
            if (values["fromDate"] !== "" || values["toDate"] !== "") {
              filterValue["created_at"] = `${values["fromDate"]}${
                values["fromDate"] && values["toDate"] && "-"
              }${values["toDate"]}`;
            } else {
              filterValue[key] = values[key];
            }
          }
        });
        request({
          onSuccess: (res) => {
            // console.log(res.data);
            dispatch({ type: storeSet, payload: res.data.results });
          },
          params: { ...filterValue },
        });
        // console.log(filterValue);
        handleClose();
        handleReset();
      },
    });

  const fromDateHandler = (dateData) => {
    dateData &&
      setFieldValue("fromDate", moment(dateData["$d"]).format("DD/MM/YYYY"));
  };
  const toDateHandler = (dateData) => {
    dateData &&
      setFieldValue("toDate", moment(dateData["$d"]).format("DD/MM/YYYY"));
  };

  //*************************************************************** //

  return (
    <Box sx={{ width: "100%" }}>
      <Chip
        label={chipFilter}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "100%",
          color: "#fff",
          borderRadius: "20px",
          padding: "20px",
          paddingInline: "30px",
          bgcolor: "#ed1b24",
          cursor: "pointer",
          "& .MuiChip-icon": { color: "#fff" },
        }}
        icon={<AddCircleOutlinedIcon />}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: { width: "200px" },
        }}
      >
        {selected ? (
          <SelectedFilter
            filter={selected}
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fromDateHandler={fromDateHandler}
            toDateHandler={toDateHandler}
          ></SelectedFilter>
        ) : (
          <Box>
            {filters.map((filter) => (
              <MenuItem
                onClick={() => {
                  setSelected(`${filter.name}`);
                }}
              >
                {filter.name}
              </MenuItem>
            ))}
          </Box>
        )}
      </Menu>
    </Box>
  );
}

const SelectedFilter = ({
  filter,
  values,
  handleChange,
  handleSubmit,
  fromDateHandler,
  toDateHandler,
}) => {
  return (
    <MenuItem>
      <Box>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          {filter}
        </Typography>

        {renderSwitch(
          filter,
          values,
          handleChange,
          handleSubmit,
          fromDateHandler,
          toDateHandler
        )}
      </Box>
    </MenuItem>
  );
};

const renderSwitch = (
  filterType,
  values,
  handleChange,
  handleSubmit,
  fromDateHandler,
  toDateHandler
) => {
  switch (filterType) {
    case "Name":
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            id="name"
            name="name"
            variant="outlined"
            placeholder="Name..."
            value={values.name}
            onChange={handleChange}
            disableUnderline={true}
            sx={{
              fontSize: "1rem",
              marginBlock: "5px",
              border: "1px solid #000",
              borderRadius: "10px",
              paddingInline: 1,
              "& input::placeholder": {
                color: "#000 !important",
                fontSize: "1rem",
                opacity: 1,
              },
            }}
          />

          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
      );
      break;
    case "Date":
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <BasicDatePicker
            placeholder={"From"}
            onDate={fromDateHandler}
            sx={{
              bgcolor: "#fff",
              svg: { color: "#fff", fontSize: "1rem" },
              "& input::placeholder": {
                opacity: 1,
                padding: 0,
                fontSize: "0.8rem",
              },
              "& input": { padding: 1 },
            }}
          />
          <BasicDatePicker
            placeholder={"To"}
            onDate={toDateHandler}
            sx={{
              bgcolor: "#fff",
              svg: { color: "#fff", fontSize: "1rem" },
              "& input::placeholder": {
                opacity: 1,
                padding: 0,
                fontSize: "0.8rem",
              },
              "& input": { padding: 1 },
            }}
          />

          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
      );
      break;

    default:
      break;
  }
};
