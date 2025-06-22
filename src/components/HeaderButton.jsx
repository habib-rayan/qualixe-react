import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

function HeaderButton(props) {
    const {shownav} = props;
    return (
        <div className='header-button'>
        <Link to={'https://wa.me/8801521481618'} className='button header-btn'>Contact</Link>
        <span className='navbar-icon' onClick={shownav}>
            <FaBars />
        </span>
        </div>
    )
}

export default HeaderButton
