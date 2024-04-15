import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../../data.json';
import styles from '../../all.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3e5ada',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const filteredRows = data.filter((row) => row.type === 'kommutator');

export default function Optiktolalikabel() {
  return (
    <>
    
    <div className={styles.faol__titles}>
      OPTIK TOLALI KABELLAR
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nomi</StyledTableCell>
            <StyledTableCell align="right">Birligi</StyledTableCell>
            <StyledTableCell align="right">Soni</StyledTableCell>
            <StyledTableCell align="right">Narxi</StyledTableCell>
            <StyledTableCell align="right">Summasi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.nomi}
              </StyledTableCell>
              <StyledTableCell align="right">{row.birligi}</StyledTableCell>
              <StyledTableCell align="right">{row.soni}</StyledTableCell>
              <StyledTableCell align="right">{row.narxi}</StyledTableCell>
              <StyledTableCell align="right">{row.summasi}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
