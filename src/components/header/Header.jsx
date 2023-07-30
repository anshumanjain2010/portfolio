import React from 'react'
import './header.css'
import CTA from './CTA'
// import './CTA.jsx'
import ME from '../../assets/me.png'
import ME1 from '../../assets/ME_CIRCLE.png'
import ME3 from '../../assets/ME_29(3).png'
import ME4 from '../../assets/ME_29(4).png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Anshuman Jain</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME3} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header