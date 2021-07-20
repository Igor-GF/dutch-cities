import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dutch City Tours</h1>

      <div className="navbar__menu">
        <div className="menu-burger">
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle"/>
        </div>

        <ul className="navbar__menu--links">
          <li>
            <a href="/" className="navbar__menu--link">home</a>
          </li>
          <li>
            <a href="/" className="navbar__menu--link">about</a>
          </li>
          <li>
            <a href="/" className="navbar__menu--link active">tours</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;