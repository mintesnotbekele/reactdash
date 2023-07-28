import { Navbar } from 'flowbite-react';
import logo from '../assets/logo.png';
import logotext from '../assets/text.png';


const Header=()=>{
    return(
        <div>
            <div  className="flex-auto w-100">
        <Navbar
       style={{
        position: 'fixed',
        paddingTop: "30px",
        top: '0',
        left: '0',
        right: '0',
        background: "#4E3426",
        height: "100px",
        zIndex: "100",
      }}
      rounded
    
    >
      <Navbar.Brand style={{marginLeft: "250px"}}>
      <Navbar.Link
          active
          href="/"
        >
        <img alt='logo' style={{height: "180px" ,position: 'absolute', left: '350px', top: '-40px'}}  src={logo}/>
        <img alt='second logo ' style={{height: "300px" ,position: 'absolute', left: '500px', top: '-100px' }}  src={logotext}/>
        </Navbar.Link>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/treatment"
        >
          <p className='navheader'>
          <p className='navheader'>   Treatment</p>
          </p>
        </Navbar.Link>
        <Navbar.Link href="/cureddisease">
          <p className='navheader'>Diseases</p>
        </Navbar.Link>
        <Navbar.Link href="/blog">
        <p className='navheader'>Blog</p>
        </Navbar.Link>
        <Navbar.Link href="/book">
        <p className='navheader'>Booking</p>
        </Navbar.Link>
        <Navbar.Link href="/about">
        <p className='navheader'>About Us</p>
        </Navbar.Link>
        <Navbar.Link href="/login">
        <p className='navheader'>Login</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
        </div>
    )
}
export default Header;