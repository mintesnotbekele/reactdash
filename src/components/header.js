
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
import ClearIcon from '@mui/icons-material/Clear';

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
   
    <Divider />
    <List>
      
        <ListItem disablePadding>
             <Link className='navheader' to='/treatment' key="treatments" style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Treatments    
            </Link>
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/cureddisease' key="Diseases" style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
        </ListItem>
        <ListItem disablePadding>
         <Link className='navheader' to='/blog' key="" style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Blog    
            </Link> 
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/book' style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Booking    
            </Link>
         </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/about' style={{margin: '30px'}} sx={{ color: '#fff' }}>
              About Us    
            </Link>
        </ListItem>
        
         <ListItem disablePadding>
            <Link className='navheader' to='/forums' key="" style={{margin: '30px'}} sx={{ color: '#fff' }}>
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
  
    if(scrollPosition < 70)
    {
       setTop(true);
    }
    else{
      setTop(false);
    }
},[scrollPosition]);
  const [distag, setdisTag] =useState(true);  

  const displayTag=()=>{
  
        setdisTag(!distag)
  }

  const handleLogout=()=>{
        console.log("clivjh");
        localStorage.removeItem('tokens');
        navigate('/login');
  }
    
     return(
      <Box sx={{ display: 'flex',}}>
      
      { top ? 
      <AppBar  elevation={0} component="nav" style={{background: 'rgba(78, 52, 38, 0.0)', marginTop: '15px'}}> 
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
        <Link to="/">  <img alt='logo' style={{objectFit: 'contain', height: '100px', marginLeft: '150px'}} src={newlogo}/></Link>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } , margin: '0px 250px 10px 100px', float : 'left'}}>
         
         <div style={{display: distag ? 'none': 'block',}}> 
          <Link className='navheader' to='/treatment' key="treatments" style={{margin: '10px'}} sx={{ color: '#fff' }}>
            Treatments    
          </Link>
          <Link className='navheader' to='/cureddisease' key="Diseases" style={{margin: '10px'}} sx={{ color: '#fff' }}>
            Diseases    
          </Link>
          
          <Link className='navheader' to='/book' style={{margin: '10px'}} sx={{ color: '#fff' }}>
            Booking    
          </Link>
          <Link className='navheader' to='/about' style={{margin: '10px'}} sx={{ color: '#fff' }}>
            About Us    
          </Link>
          <Link className='navheader' to='/blog' style={{margin: '10px'}} sx={{ color: '#fff' }}>
            Blog   
          </Link>
          <Link className='navheader' to='/forums' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
            Forums    
          </Link>
          <Link onClick={displayTag} style={{padding: '10px'}}>
        
           </Link>
          </div>
          
  
        
        </Box>

        </Toolbar>
      
      </AppBar>
      :
      <AppBar style={{ background: top ? 'rgba(78, 52, 38, 0.0)': 'rgba(78, 52, 38, 0.6)' , display: top ? 'none': 'block',  position : 'fixed'}} component="nav">
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
        <Link to="/">  <img alt='logo' style={{objectFit: 'contain', height: '100px', marginLeft: '150px'}} src={newlogo}/></Link>
          </Typography>
          
      
          <Box sx={{ display: { xs: 'none', sm: 'block' } , margin: '0px 250px 10px 100px', float : 'left'}}>
         
           <div style={{display: distag ? 'none': 'block',}}> 
            <Link className='navheader' to='/treatment' key="treatments" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Treatments    
            </Link>
            <Link className='navheader' to='/cureddisease' key="Diseases" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
            
            <Link className='navheader' to='/book' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Booking    
            </Link>
            <Link className='navheader' to='/about' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              About Us    
            </Link>
            <Link className='navheader' to='/blog' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Blog   
            </Link>
            <Link className='navheader' to='/forums' key="" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Forums    
            </Link>
            <Link onClick={displayTag} style={{padding: '10px'}}>
             <ClearIcon/>
             </Link>
            </div>
            
            <div  style={{ display: distag ? 'flex': 'none',}}> 
            <Link to='/treatment' key="treatments"  sx={{ color: '#fff' }}>
            <p style={{width: '400px', marginTop: '20px', fontFamily: 'Playfair Display', fontSize: '36px' , paddingRight: '10px'}}>Nature's healing touch</p>
            </Link>
             <Link onClick={displayTag} style={{padding: '30px'}}>
             <MenuIcon />
             </Link>
            </div>

          
          </Box>
        </Toolbar>
      
      </AppBar>
    }
      <Box component="nav">
        <Drawer
        
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          
          }}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(30, 139, 195, 0.8)"
            }
          }}s
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    
    </Box>
    )
}
export default Header;