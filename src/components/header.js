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
  <Box style={{background: 'rgba(78, 52, 38, 0.6)'}} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" >
          <img alt='logo' style={{objectFit: 'contain', maxWidth: '300px'}} src={newlogo}/>
      </Link>
    </Typography>
    <Divider />
    <List>
      
        <ListItem disablePadding>
             <Link className='navheader' to='/treatment' key="treatments" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Treatments    
            </Link>
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/cureddisease' key="Diseases" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/blog' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Blog    
            </Link>
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/book' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Booking    
            </Link>
         </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/about' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              About Us    
            </Link>
        </ListItem>
         <ListItem disablePadding>
            <Link className='navheader' to='/forums' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Forums    
            </Link>
        </ListItem>
    
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
        <Link to="/">  <img alt='logo' style={{objectFit: 'contain', marginTop: '-40px', height: '100px', margin: 'auto'}} src={newlogo}/></Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } , margin: '0px 100px'}}>
            <Link className='navheader' to='/treatment' key="treatments" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Treatments    
            </Link>
            <Link className='navheader' to='/cureddisease' key="Diseases" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
            <Link className='navheader' to='/blog' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Blog    
            </Link>
            <Link className='navheader' to='/book' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Booking    
            </Link>
            <Link className='navheader' to='/about' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              About Us    
            </Link>
            <Link className='navheader' to='/forums' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Forums    
            </Link>
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