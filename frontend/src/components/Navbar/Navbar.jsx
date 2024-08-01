import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="logo-container">
        <img src="https://th.bing.com/th/id/OIP.hO9SYk78nB0g-O8Kj8BDjAAAAA?rs=1&pid=ImgDetMain" alt="Logo" />
        <div className="council-name"> Cultural Council</div>
      </div>
      <div className="links-container">
        <span className='link'><a href="/Home">Home</a></span>
        <span className='link'><a href="/Clubs">Clubs</a></span>
        <span className='link'><a href="/Events">Events</a></span>
        <span className='link'><a href="">About Us</a></span>
      </div>
      
    </div>
  )
}

export default Navbar
