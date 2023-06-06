import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import person1 from "../../assets/dashboard/ahmed.png";
import { Typography, Box, Link } from "@mui/material";
// import MenuFilter from "./menuFilter";
import plus from "../../assets/dashboard/square-plus.svg";
// import CustomModal from "./customModal";
import CustomModal from './cutomModal';
import Stars from "./starts";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CustomContainer = ({
  chipFilter = false,
  rows = [],
  columns = [],
  addTask = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "10px 10px 10px 10px",
        marginBlock: "1rem",
        boxShadow: "0px 0px 6px #00000029",
      }}
    >
      {chipFilter && (
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              borderRadius: "30px",
              padding: 2,
              paddingBlock: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <select>
                <option value="tes">test</option>
                <option value="tes">test</option>
                <option value="tes">test</option>
                <option value="tes">test</option>
              </select>
            </Box>
          </Box>
        </Box>
      )}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              " & th": {
                border: "1px solid #efefef",
              },
            }}
          >
            {columns.map((ele) =>
              ele.type === "checkbox" ? (
                <TableCell
                  align="center"
                  sx={{
                    color: "#312F30",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textTransform: "capitalize",
                    fontFamily: "Tajawal",
                  }}
                >
                  <Checkbox
                    {...label}
                    sx={{
                      color: "#000",
                      "&.Mui-checked": {
                        color: "#333",
                      },
                    }}
                  />
                </TableCell>
              ) : (
                <TableCell
                  align="center"
                  sx={{
                    color: "#312F30",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textTransform: "capitalize",
                    fontFamily: "Tajawal",
                  }}
                >
                  {ele.value}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "1px solid #efefef",
                },
                "& td, th": {
                  border: "1px solid #efefef",
                },
              }}
            >
              {columns.map((col, index) =>
                col.type === "text" ? (
                  <TableCell
                    style={{
                      color: col.color || "#282A3C",
                      fontSize: col.size || "16px",
                      fontFamily: "Tajawal",
                      fontWeight: "400",
                      background:
                        row[col.name] === "Working on it"
                          ? "#FDAB3D"
                          : row[col.name] === "Done"
                          ? "#00C875"
                          : row[col.name] === "Stuck"
                          ? "#E2445C"
                          : "",
                    }}
                    align="center"
                  >
                    {row[col.name]} 
                  </TableCell>
                ) : col.type === "rating" ? (
                  <TableCell align="center">
                    <Typography
                      variant="span"
                      sx={{
                        m: "10px",
                        display: "inline-block",
                        color: col.color || "#ffcb21",
                        fontSize: col.size || "16px",
                        fontFamily: "Tajawal",
                        fontWeight: "400",
                      }}
                    >
                      <Stars stars={row[col.name]} />
                    </Typography>
                  </TableCell>
                ) : col.type === "link" ? (
                  <TableCell align="center">
                    {row[col.name].image && (
                      <img
                        src="https://source.unsplash.com/gySMaocSdqs/180x180"
                        alt={row[col.name]}
                        m="0 10px"
                        width="43px"
                        height="43"
                        className="rounded-circle"
                      />
                    )}
                    {row[col.name].name && (
                      <Link
                        variant="span"
                        sx={{
                          m: "10px",
                          display: "inline-block",
                          color: col.color || "#282A3C",
                          fontSize: col.size || "16px",
                          fontFamily: "Tajawal",
                          fontWeight: "400",
                        }}
                        href={row[col.name].to}
                      >
                        {row[col.name].name}
                      </Link>
                    )}
                  </TableCell>
                ) : col.type === "checkbox" ? (
                  <TableCell align="center">
                    {row[col.name] === true ? (
                      <Checkbox
                        {...label}
                        defaultChecked
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#333",
                          },
                        }}
                      />
                    ) : (
                      <Checkbox
                        {...label}
                        sx={{
                          color: "#000",
                          "&.Mui-checked": {
                            color: "#333",
                          },
                        }}
                      />
                    )}
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <img src={person1} alt={row[col.name]} m="0 10px" />
                    <Typography
                      variant="span"
                      sx={{
                        m: "10px",
                        display: "inline-block",
                        color: col.color || "#282A3C",
                        fontSize: col.size || "16px",
                        fontFamily: "Tajawal",
                        fontWeight: "400",
                      }}
                    >
                      {row[col.name]}
                    </Typography>
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {addTask && (
        <Box sx={{ padding: "20px", cursor: "pointer" }} onClick={handleOpen}>
          <Typography
            variant="span"
            sx={{
              background: "#ED1B241A",
              borderRadius: "5px",
              padding: "0 5px",
              display: "inline-block",
            }}
          >
            <img src={plus} alt="square plus" />
            <Typography
              variant="span"
              sx={{ display: "inline-block", margin: "2px 10px" }}
            >
              Add Task
            </Typography>
          </Typography>
        </Box>
      )}

      <CustomModal handleClose={handleClose} open={open} />
    </TableContainer>
  );
};

export default CustomContainer;

