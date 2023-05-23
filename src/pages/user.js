import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const user = ()=>{
    return(
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">GENDR&nbsp;(g)</TableCell>
            <TableCell align="right">EMAIL&nbsp;(g)</TableCell>
            <TableCell align="right">BLOOD GROUP&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Mohd Sameer
              </TableCell>
              <TableCell align="right">14-06-1997</TableCell>
              <TableCell align="right">Male</TableCell>
              <TableCell align="right">sameer@gmail.com</TableCell>
              <TableCell align="right">O+</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default user;