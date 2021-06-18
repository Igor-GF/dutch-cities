import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dutch City Tours</h1>
      <div className="menu-burger">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">home</a>
        </li>
        <li>
          <a href="/" className="nav-link">about</a>
        </li>
        <li>
          <a href="/" className="nav-link active">tours</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;