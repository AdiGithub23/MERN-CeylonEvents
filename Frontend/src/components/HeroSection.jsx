import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/heroimg.jpeg" alt="" />
      <div className="item">
        <h3>Event Maker</h3>
        <div>
          <h1>Create your own Event</h1>
          <p>When it comes to events, it is all about planning ...</p>

          <Link spy={true} smooth={true} duration={500} to='contact' >Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection