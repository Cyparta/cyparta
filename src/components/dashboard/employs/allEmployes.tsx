import React from 'react'
// import CustomContainer from '../customContainer';
import NewContainer from '../newContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
const AllEmployes = () => {
    const { employs } = useSelector((state: RootState) => state.employee)
    {console.log(employs)}
      const columns = [
        { value: "employe Name", name: "image", type: "image", main: "user" },
        { value: "first name", name: "first_name", type: "text", main: "user" },
        { value: "last name", name: "last_name", type: "text", main: "user" },
        { value: "email", name: "email", type: "text", main: "user" },
        { value: "phone", name: "phone", type: "text", main: "user" },
        { value: "job", name: "title", type: "text", main: "job" },
        { value: "job", name: "title", type: "option", main: "user" },
      ];
  return (
    <div>
        <NewContainer rows={employs} columns={columns} chipFilter={false}/>

        {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    </div>
  )
}

export default AllEmployes