import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import axios from 'axios'; // axios ni import qiling

// MUI komponentlari uchun maxsus usullar
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

// Boshqa sahifalardagi jadval komponenti
const TableForAllPages = (props) => {
  const { filteredRows } = props;
  // Ma'lumotlarni saqlash uchun holat
  const [ketgantovarlarValues, setKetgantovarlarValues] = useState({});

  // Ma'lumotlarni o'zgartirish funksiyasi
  const handleKetgantovarlarInputChange = (e, id) => {
    const value = e.target.value;
    // Yangi qiymatni qo'shish
    setKetgantovarlarValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Ma'lumotlarni serverga jo'natish funksiyasi
  const handleButtonClick = async (rowId) => {
    try {
      // Yangi mavjudtovarlar sonini hisoblash
      const updatedMavjudtovarlar = calculateUpdatedMavjudtovarlar(rowId);
      // Axios orqali serverga ma'lumotni yuborish
      await axios.patch(`http://localhost:4000/products${rowId}`, {
        mavjudtovarlar: updatedMavjudtovarlar,
      });
      // Tugmasini bosgandan so'ng, maydonni tozalash
      setKetgantovarlarValues((prevValues) => ({
        ...prevValues,
        [rowId]: "",
      }));
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  };

  // Yangi mavjudtovarlar sonini hisoblash funksiyasi
  const calculateUpdatedMavjudtovarlar = (rowId) => {
    const ketgantovarlarValue = parseFloat(ketgantovarlarValues[rowId]) || 0;
    const originalMavjudtovarlar = filteredRows.find(row => row.id === rowId)?.mavjudtovarlar || 0;
    const updatedMavjudtovarlar = originalMavjudtovarlar - ketgantovarlarValue;
    return updatedMavjudtovarlar;
  };

  return (
    <>
      {/* Ma'lumotlar jadvali */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nomi</StyledTableCell>
              <StyledTableCell align="right">O'lchov Birligi</StyledTableCell>
              <StyledTableCell align="right">Omborda mavjud tavarlar soni</StyledTableCell>
              <StyledTableCell align="right">Ombordan chiqib ketgan tavarlar soni</StyledTableCell>
              <StyledTableCell align="right">Qayerga sotildi</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Har bir mahsulot uchun qator */}
            {filteredRows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.birligi}</StyledTableCell>
                <StyledTableCell align="center">{row.mavjudtovarlar}</StyledTableCell>
                {/* Tekst maydoni */}
                <StyledTableCell align="right">
                  <TextField
                    id={`ketgantovarlar-${row.id}`}
                    variant="standard"
                    value={ketgantovarlarValues[row.id] || ""}
                    onChange={(e) => handleKetgantovarlarInputChange(e, row.id)}
                  />
                </StyledTableCell>
                {/* Tugma */}
                <StyledTableCell align="right">
                  <Button variant="contained" onClick={() => handleButtonClick(row.id)}>
                    Submit Changes
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Ma'lumotlarni qayta yuklash tugmachasi */}
      <Button variant="contained" onClick={() => window.location.reload()}>
        Reload
      </Button>
    </>
  );
};

// Komponentga kiritishni talab etuvchi propertiyalar
TableForAllPages.propTypes = {
  filteredRows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birligi: PropTypes.string.isRequired,
      mavjudtovarlar: PropTypes.number.isRequired,
      // Add other required properties based on your data structure
    }).isRequired
  ).isRequired,
};

export default TableForAllPages;
