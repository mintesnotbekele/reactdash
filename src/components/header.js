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
        <img style={{height: "180px" ,position: 'absolute', left: '350px', top: '-40px'}}  src={logo}/>
        <img style={{height: "300px" ,position: 'absolute', left: '500px', top: '-100px' }}  src={logotext}/>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/treatment"
        >
          <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost'}}>
            Treatment
          </p>
        </Navbar.Link>
        <Navbar.Link href="/diseases">
          <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost' }}>Diseases</p>
        </Navbar.Link>
        <Navbar.Link href="/blog">
        <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost'}}>Blog</p>
        </Navbar.Link>
        <Navbar.Link href=".booking">
        <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost'}}>Booking</p>
        </Navbar.Link>
        <Navbar.Link href="/about">
        <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost'}}>About Us</p>
        </Navbar.Link>
        <Navbar.Link href="/login">
        <p style={{color: "#F6F5EC", fontSize: "20px", fontFamily: 'jost'}}>Login</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
        </div>
    )
}
export default Header;