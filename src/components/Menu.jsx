import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='header-nav'>
        <ul className='header-menu'>
            <li title='Home'>
                <NavLink to='/' className={({isActive})=> isActive ? 'active' :''} >Home</NavLink>
            </li>
            <li title='About'>
                <NavLink to='/about' className={({isActive})=> isActive ? 'active' :''} >About</NavLink>
            </li>
            <li title='Service'>
                <NavLink to='/services' className={({isActive})=> isActive ? 'active' :''} >Services</NavLink>
            </li>
            <li title='Service'>
                <NavLink to='/demo' className={({isActive})=> isActive ? 'active' :''} >Demo</NavLink>
            </li>
            <li title='Portfolio'>
                <NavLink to='/portfolio' className={({isActive})=> isActive ? 'active' :''} >Portfolio</NavLink>
            </li>
            <li title='Contact'>
                <NavLink to='/contact' className={({isActive})=> isActive ? 'active' :''} >Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menu
