import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'; 
import styles from './all.module.css'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

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



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

// Boshqa sahifalardagi jadval komponenti
const TableForAllPages = (props) => {
  const { filteredRows } = props;
  // Ma'lumotlarni saqlash uchun holat
  // const [ketgantovarlarValues, setKetgantovarlarValues] = useState({});

  // // Ma'lumotlarni o'zgartirish funksiyasi
  // const handleKetgantovarlarInputChange = (e, id) => {
  //   const value = e.target.value;
  //   // Yangi qiymatni qo'shish
  //   setKetgantovarlarValues((prevValues) => ({
  //     ...prevValues,
  //     [id]: value,
  //   }));
  // };

  // Yangi mavjudtovarlar sonini hisoblash funksiyasi
  // const calculateUpdatedMavjudtovarlar = (rowId) => {
  //   const ketgantovarlarValue = parseFloat(ketgantovarlarValues[rowId]) || 0;
  //   const originalMavjudtovarlar = filteredRows.find(row => row.id === parseInt(rowId))?.mavjudtovarlar || 0;
  //   const updatedMavjudtovarlar = originalMavjudtovarlar - ketgantovarlarValue;
  //   return updatedMavjudtovarlar;
  // };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

 

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <UpIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <UpIcon />,
      label: 'Edit',
    },
    {
      color: 'primary',
      sx: fabStyle,
      icon: <UpIcon />,
      label: 'Add',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <div className={styles.table__container}>
      {/* Ma'lumotlar jadvali */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nomi</StyledTableCell>
              <StyledTableCell align="right">O'lchov Birligi</StyledTableCell>
              <StyledTableCell align="right">Omborda mavjud tavarlar soni</StyledTableCell>
              <StyledTableCell align="right">Qayerga sotildi</StyledTableCell>
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
                {/* <StyledTableCell align="center">
                  <TextField
                    type="number"
                    value={ketgantovarlarValues[row.id] || ''}
                    onChange={(e) => handleKetgantovarlarInputChange(e, row.id)}
                  />
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Ma'lumotlarni qayta yuklash tugmachasi */}
      <Button variant="contained" onClick={() => window.location.reload()}>
        Reload
      </Button>

      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Link to='/products'>
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Link>
        </Zoom>
      ))}
    </div>
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
