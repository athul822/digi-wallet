import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DashBoard.scss'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 1, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 2, 9.0, 37, 4.3),
  createData('Eclair', 3, 16.0, 24, 6.0),
  createData('Cupcake', 4, 3.7, 67, 4.3),
  createData('Gingerbread', 5, 16.0, 49, 3.9),
];

export default function BasicTable({tabName}) {
  return (
    <div style={{marginTop:'1.5rem',paddingLeft:'.5rem',fontFamily:'Poppins',fontWeight:'bold'}}>

   
    <TableContainer component={Paper}>
       <span style={{marginLeft:'12px',position:'relative',marginBottom:'12px'}}>{tabName}</span>
      <Table sx={{ minWidth: 1 }} aria-label="simple table">
       
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Bank Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Legal Manager</TableCell>
            <TableCell align="right">Collection Manager</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.calories}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}