
import newlogo from '../assets/homelogo.png';
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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import {makeStyles} from '@material-ui/core';

const drawerWidth = 440;

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none"
  }
});
const HomeHeader=()=>{  
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


const [window, setWindow] = useState();

useEffect(() => {
  if (typeof window !== 'undefined') {
   
    setWindow(window);
  }
}, []);

let currentlyHovering = false;
let currentlyHovering1 = false;
const styles = useStyles();

const [anchorEl, setAnchorEl] = useState(null);

function handleClick(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl(event.currentTarget);
  }
}

function handleHover() {
  currentlyHovering = true;
}

function handleClose() {
  setAnchorEl(null);
}

function handleCloseHover() {
  currentlyHovering = false;
  setTimeout(() => {
    if (!currentlyHovering) {
      handleClose();
    }
  }, 50);
}
///////////////

const [anchorEl1, setAnchorEl1] = useState(null);

function handleClick1(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl1(event.currentTarget);
  }
}

function handleHover1() {
  currentlyHovering1 = true;
}

function handleClose1() {
  setAnchorEl1(null);
}

function handleCloseHover1() {
  currentlyHovering1 = false;
  setTimeout(() => {
    if (!currentlyHovering1) {
      handleClose1();
    }
  }, 50);
}
const tokens = localStorage.getItem('tokens');
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
            <Link className='navheader' to='/diseases' key="Diseases" style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
        </ListItem>
        <ListItem disablePadding>
         <Link className='navheader' to='/blog' key="" style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Blog    
            </Link> 
        </ListItem>
        <ListItem disablePadding>
            <Link className='navheader' to='/earnwithus' style={{margin: '30px'}} sx={{ color: '#fff' }}>
              Earn With Us  
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

        {tokens == undefined ?
         <ListItem disablePadding>
             <Link onClick={()=>handleLogout}  style={{margin: '10px', color: 'white'}} sx={{ color: 'white' }}>Login</Link>
             </ListItem>
                : 
                <ListItem disablePadding>
                <Link onClick={()=>handleLogout}  style={{margin: '10px', color: 'white'}} sx={{ color: 'white' }}>Logout</Link>
               </ListItem>
                }
    
    </List>
  </Box>
);
const container = window !== undefined ? () => window().document.body : undefined;
 
  const scrollPosition = useScrollPosition()
  const [top, setTop] = useState(false);

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
        console.log("loggedout")
        localStorage.removeItem('tokens');
        navigate('/login');
  }
  const handleLogin=()=>{
    navigate('/login');
  }
    
     return(
      <Box sx={{ display: 'flex',}}>
      
      { top ? 
      <div style={{ width: '100%', zIndex: '1000'}}> 
          <div className='mx-auto justify-center flex'>  
          <Link to="/">  <img alt='logo' style={{objectFit: 'contain', height: '150px',}} src={newlogo}/></Link>
          </div>
          <div className='flex mx-auto justify-center '> 
          <Link className='navheader' to='/treatment' key="treatments" style={{margin: '10px 20px',  color: 'black'}} >
            Treatments    
          </Link>
          <Link className='navheader' to='/diseases' key="treatments" style={{margin: '10px 20px', color: 'black'}} >
            Diseases    
          </Link>
          <Link className='navheader' to='/book' key="treatments" style={{margin: '10px 20px', color: 'black'}} >
            Contact Us     
          </Link>
          <Link className='navheader' to='/about' key="treatments" style={{margin: '10px 20px', color: 'black'}} >
            About Us    
          </Link>
          <Link className='navheader' to='/blog' key="treatments" style={{margin: '10px 20px', color: 'black'}} >
            Blog    
          </Link>
          <Link className='navheader' to='/forums' key="treatments" style={{margin: '10px 20px', color: 'black'}}>
            Forums
          </Link>

           
          </div>
      </div>
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
            <Link className='navheader' to='/diseases' key="Diseases" style={{margin: '10px'}} sx={{ color: '#fff' }}>
              Diseases    
            </Link>
            <Link className='navheader' to='/about' style={{margin: '10px'}} sx={{ color: '#fff' }}>
              About Us    
            </Link>

        
            <Link
              className='navheader px-3'
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              
              onClick={handleClick1}
              onMouseOver={handleClick1}
              onMouseLeave={handleCloseHover1}
            >
              Partner WIth Us
            </Link>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
              MenuListProps={{
                onMouseEnter: handleHover1,
                onMouseLeave: handleCloseHover1,
                style: { pointerEvents: "auto" }
              }}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              PopoverClasses={{
                root: styles.popOverRoot
              }}
            >
              <MenuItem><Link to="/affiliates"> Affiliate Marketing</Link></MenuItem>
              <MenuItem> <Link to="/earnwithus"> Earn with us</Link></MenuItem>
              <MenuItem><Link to="/doctorpartners"> Doctor Partners </Link></MenuItem>
            </Menu>
          
                  <Link
                    className='navheader px-3'
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    onMouseLeave={handleCloseHover}
                  >
                    Knowledge Base
                  </Link>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                      onMouseEnter: handleHover,
                      onMouseLeave: handleCloseHover,
                      style: { pointerEvents: "auto" }
                    }}
                    getContentAnchorEl={null}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                    PopoverClasses={{
                      root: styles.popOverRoot
                    }}
                  >
                     <MenuItem><Link to="/forums">Forums</Link> </MenuItem>
                    <MenuItem><Link to="/blog"> Blogs & Articles</Link></MenuItem>
                    <MenuItem> <Link to="/webinars"> Webinars</Link></MenuItem>
                  </Menu>
                
                  {tokens == undefined ?
             <Button onClick={()=>handleLogin()}  style={{margin: '10px', color: 'white'}} sx={{ color: 'white' }}>Login</Button>
              
                : 
                <Button onClick={()=>handleLogout()}  style={{margin: '10px', color: 'white'}} sx={{ color: 'white' }}>Logout</Button>
                }
    

            
            <Link onClick={displayTag} style={{padding: '10px'}}>
             <ClearIcon/>
             </Link>
            </div>
            
            <div  style={{ display: distag ? 'flex': 'none',}}> 
            <Link to='/treatment' key="treatments"  sx={{ color: '#fff' }}>
            <p style={{width: '400px', marginTop: '20px', fontFamily: 'Playfair Display', fontSize: '36px' ,color: 'white', paddingRight: '10px'}}>Nature's healing touch</p>
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
export default HomeHeader;