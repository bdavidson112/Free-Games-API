import React from 'react';
import { Link } from 'react-router';
import FreeGamesLogo from '../Assets/Free-Games.png';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', position: 'relative', bottom: 0, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Page Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={FreeGamesLogo} alt="Free Games Logo" style={{ height: '50px', marginRight: '10px' }} />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}></span>
        </div>

        {/* Links */}
        <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', margin: 0, paddingright: 50 }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/games" style={{ color: '#fff', textDecoration: 'none' }}>Games</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
        © {new Date().getFullYear()} Free-Games. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
