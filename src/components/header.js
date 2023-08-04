import { Navbar } from 'flowbite-react';
import newlogo from '../assets/curlogo.png';
import { Row, Col, Button } from 'antd';
import {useScrollPosition} from '../hooks/scrollhooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { AppBar } from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Typography} from '@mui/material';
import {Box } from '@mui/material';
import Divider from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 440;
const navItems = ['Treatment', 'Diseases', 'Blog', 'Booking', 'About Us', 'Forum', 'Login'];


const Header=()=>{


  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


const [window, setWindow] = useState();

useEffect(() => {
  if (typeof window !== 'undefined') {
    console.log(window.innerWidth);
    setWindow(window);
  }
}, []);
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      CUREVIVE
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
const container = window !== undefined ? () => window().document.body : undefined;
  const customTheme = {
    button: {
      color: {
        primary: 'bg-red-500 hover:bg-red-600',
      },
    },
  };

 
  const scrollPosition = useScrollPosition()
  const [top, setTop] = useState(false);
  const tokens = localStorage.getItem('tokens');
  const navigate = useNavigate();

  useEffect(()=>{
    if(scrollPosition < 400)
    {
       setTop(true);
    }
    else{
      setTop(false);
    }
},[scrollPosition]);
  const handleLogout=()=>{
        console.log("clivjh");
        localStorage.removeItem('tokens');
        navigate('/login');
  }
      useEffect(()=>{
          if(scrollPosition < 400)
          {
             setTop(true);
          }
          else{
            setTop(false);
          }
      },[scrollPosition]);
     return(
      <Box sx={{ display: 'flex',}}>
      
      <AppBar style={{ background: top ? 'rgba(78, 52, 38, 0.0)': 'rgba(78, 52, 38, 0.6)'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <img alt='logo' style={{objectFit: 'contain', marginTop: '-40px', height: '100px'}} src={newlogo}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } , margin: '0px 0px'}}>
            {navItems.map((item) => (
              <Link className='navheader' style={{margin: '10px'}} key={item} sx={{ color: '#fff' }}>
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    
    </Box>
    )
}
export default Header;