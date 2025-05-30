import React from 'react';
import { Link } from 'react-router';
import BatManLogo from '../Assets/batmanlogo.png';

function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <img src={BatManLogo} alt="Free Games Logo" style={{ height: '50px' }} />
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/games" style={{ color: '#fff', textDecoration: 'none' }}>Movies</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
