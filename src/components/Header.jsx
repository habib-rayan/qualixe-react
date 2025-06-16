import React, { useState } from 'react'
import './Header.css'
import HeaderLogo from './HeaderLogo';
import Menu from './Menu';
import HeaderButton from './HeaderButton';
import { MdClose } from "react-icons/md";

function Header() {
  const [btnState, btnShowState] = useState(false);

  const showMobileNav = () => {
    btnShowState(btnState => !btnState)
  }

  let toggleClass = btnState ? 'active' :'';

  return <>
    <div className='header-section'>
      <div className='container'>
        <div className='header-wrap'>
          <HeaderLogo />
          <div className='desk-nav'>
            <Menu />
          </div>
          <HeaderButton shownav={showMobileNav} toggleClass={toggleClass}/>
        </div>
      </div>
      <div className={`mobile-nav ${toggleClass}`}>
        <div className='mobile-nav-header'>
          <span className='mobile-nav-close' onClick={showMobileNav}>
            <MdClose />
          </span>
        </div>
        <div className='mobile-nav-items'>
          <Menu/>
        </div>
      </div>
      <div className={`mobile-nav-overly ${toggleClass}`} onClick={showMobileNav}></div>
    </div>
  </>
}

export default Header
