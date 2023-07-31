import { Navbar } from 'flowbite-react';
import newlogo from '../assets/curlogo.png';

const Header=()=>{
    return(
        <div>
            <div  className="flex-auto w-100">
        <Navbar
       style={{
        position: 'fixed',
        paddingTop: "13px",
        top: '0',
        left: '0',
        right: '0',
        background: 'rgba(78, 52, 38, 0.6)',
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
        <img alt='logo' style={{objectFit: 'contain', marginTop: '-50px', height: '100px'}} src={newlogo}/>

        </Navbar.Link>
      </Navbar.Brand> 
      <Navbar.Toggle/>
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