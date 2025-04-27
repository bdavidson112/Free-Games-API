import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import FreeGamesSvg from '../Assets/undraw_retro-video-game_l9zp.svg'; // Import the SVG file

function Home() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Navigate to the Games page with the search query as a URL parameter
    navigate(`/games?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Page Title */}
      <h1 style={{ fontSize: '3rem', marginBottom: '10px', textAlign: 'center' }}>
        Welcome to Free Games API
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>
        Discover the best free games available online!
      </p>

      {/* Slogan */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', textAlign: 'center' }}>
        Search for a title below!
      </h3>

      {/* Input and Button */}
      <div
        style={{
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <input
          type="text"
          placeholder="Enter game title..."
          value={inputValue}
          onChange={handleInputChange}
          style={{
            padding: '15px',
            fontSize: '1rem',
            width: '70%',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button
          onClick={handleButtonClick}
          style={{
            padding: '15px 30px',
            fontSize: '1rem',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          GO!
        </button>
      </div>

      {/* SVG Image */}
      <div style={{ width: '50%', padding: '20px' }}>
        <img
          src={FreeGamesSvg}
          alt="Free Games"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '2px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
