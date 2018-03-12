import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink 
      exact
      activeStyle={styles.active} 
      to="/"
    >
      Home
    </NavLink>
    {' '}
    <NavLink 
      to="/about"
      activeStyle={styles.active}
    >
      About
    </NavLink>
  </nav>
)

export default NavBar;