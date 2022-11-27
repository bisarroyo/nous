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
        <div class='custom-shape-divider-top-1669423948'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' class='shape-fill' />
          </svg>
        </div>
      </nav>
    </>
  )
}

export default NavBar
