import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import logo from '../assets/nous_logo_white.png'

export const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            <img src={logo} alt='nous logo' />
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Nous
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Servicios
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/blog'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Portafolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {click ? <IoIosCloseCircleOutline /> : <BiMenuAltRight />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
