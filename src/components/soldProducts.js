import { useState, useEffect } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './all.module.css'

function Row(props) {
  const { row } = props; // prop nomi o'zgaruvchiga o'zgartirildi
  const [open, setOpen] = React.useState(false);

  // const totalSoldItems = row.history.reduce((total, historyRow) => {
  //   return total + historyRow.chiqibKetganTovarlarSoni;
  // }, 0);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.narxi}</TableCell>
        <TableCell align="center">{row.birligi}</TableCell>
        <TableCell align="center">{row.mavjudtovarlar}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead className={styles.sold_products} >
                  <TableRow>
                    <TableCell>Sana</TableCell>
                    <TableCell align="center">Haridor</TableCell>
                    <TableCell align="center">Soni</TableCell>
                    <TableCell align="center">Narxi ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.sana} c>
                      <TableCell component="th" scope="row">
                        {historyRow.sana} {/* historyRow ishlatilishi */}
                      </TableCell>
                      <TableCell align="center">{historyRow.xaridor}</TableCell>
                      <TableCell align="center">{historyRow.chiqibKetganTovarlarSoni}</TableCell>
                      <TableCell align="center">{historyRow.chiqibKetganTovarlarSoni*row.narxi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    narxi: PropTypes.number.isRequired,
    birligi: PropTypes.string.isRequired,
    mavjudtovarlar: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        sana: PropTypes.string.isRequired,
        xaridor: PropTypes.string.isRequired,
        chiqibKetganTovarlarSoni: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const SoldProducts = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:4000/comtech')
          .then((res) => res.json())
          .then((data) => {
            console.log(data); 
            setRows(data.user); 
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="center">Narxi</TableCell>
              <TableCell align="center">Birligi</TableCell>
              <TableCell align="center">Mavjud tavarlar</TableCell>
              <TableCell align="center">Turi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <Row key={row._id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default SoldProducts;
