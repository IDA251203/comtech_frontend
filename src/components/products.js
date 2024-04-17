import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import SectionOne from './section1';
import SectionTwo from './section2';
import SectionFour from './section4';
import SectionThree from './section3';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from './all.module.css'

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

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

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

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

function Products() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <HomeIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <HomeIcon />,
      label: 'Edit',
    },
    {
      color: 'primary',
      sx: fabStyle,
      icon: <HomeIcon />,
      label: 'Add',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <HomeIcon />,
      label: 'Expand',
    },
  ];

  const handleButtonClick = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  };


  return (
    <Box
      sx={{
        bgcolor: '#fff',
        width: '100%',
        position: 'relative',
        minHeight: '50vh',
        color: '#6495f2'
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Tarmoq qurilmalari" {...a11yProps(0)} />
          <Tab label="Server qurilmalari" {...a11yProps(1)} />
          <Tab label="Monoblok,Komp..." {...a11yProps(2)} />
          <Tab label="Gadjetlar..." {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h1 className={styles.titles}>TARMOQ QURILMALARI</h1>
          <div className={styles.down__icon} onClick={handleButtonClick}>
            <ArrowDownwardIcon/>
          </div>
          <SectionTwo/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h1 className={styles.titles}>SERVER QURILMALARI</h1>
          <div className={styles.down__icon} onClick={handleButtonClick}>
            <ArrowDownwardIcon/>
          </div>
          <SectionOne/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h1 className={styles.titles}>MONOBLOK, KOMPYUTER, NOUTBUK, AKSESSUARLAR</h1>
          <div className={styles.down__icon} onClick={handleButtonClick}>
            <ArrowDownwardIcon/>
          </div>
          <SectionThree/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <h1 className={styles.titles}>GADJETLAR, IP-TELEFONIYA</h1>
          <div className={styles.down__icon} onClick={handleButtonClick}>
            <ArrowDownwardIcon/>
          </div>
          <SectionFour/>
        </TabPanel>
      </SwipeableViews>
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
          <Link to='/'>
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Link>
        </Zoom>
      ))}
    </Box>
  );
}

export default Products

// function Products(){
//  return(
//   <>
//    Products
//   </>
//  );
// }
// export default Products;