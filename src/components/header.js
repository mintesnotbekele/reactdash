import { Navbar } from 'flowbite-react';
import newlogo from '../assets/curlogo.png';
import { Row } from 'antd';
import {useScrollPosition} from '../hooks/scrollhooks';
import { useEffect, useState } from 'react';

const Header=()=>{
  const scrollPosition = useScrollPosition()
  const [top, setTop] = useState(false);

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
        <div>
        <div  className="flex-auto w-100" style={{width: '100%'}}>
        <Row>
        <Navbar
       style={{
        zIndex: '2000',
        width: '100%',
        position: 'fixed',
        paddingTop: "13px",
        top: '0',
        left: '0',
        right: '0',
        background: top ? 'rgba(78, 52, 38, 0.0)': 'rgba(78, 52, 38, 0.6)',
        height: "100px",
        zIndex: "100",
      }}
      rounded
    
    >
     <Navbar.Brand >
      <Navbar.Link 
      
          active
          href="/"
        >
        <img alt='logo' style={{objectFit: 'contain', marginTop: '-40px', height: '100px'}} src={newlogo}/>

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
    </Row>
    </div>
        </div>
    )
}
export default Header;