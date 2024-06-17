import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className='logo'>Plan your dream functions with Ceylon Events</div>
      
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className='links'>
          <Link spy={true} smooth={true} duration={500} to='hero' >Home</Link>
          <Link spy={true} smooth={true} duration={500} to='services' >Services</Link>
          <Link spy={true} smooth={true} duration={500} to='about' >About</Link>
          <Link spy={true} smooth={true} duration={500} to='contact' >Contact</Link>
        </div>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar