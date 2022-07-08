import React from 'react'
import logo from '../assets/image/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img className='header-logo' src={logo} alt='' />
      </div>

      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-item'>
            <a href='/'>Home</a>
          </li>
          <li className='header-nav-item'>
            <a href='/'>Latest</a>
          </li>
          <li className='header-nav-item'>
            <a href='/'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
