import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // Import useParams to get the ID from the URL
import { fetchData } from '../App'; // Import fetchData from App.js

function Game() {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null); // State to store game details
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const data = await fetchData(`giveaway?id=${id}`); // Fetch giveaway details via the proxy
        if (data) {
          setGame(data);
        } else {
          console.error('No data received for the game');
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false); // Ensure loading is set to false after the fetch
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    // Skeleton loading state
    return (
      <div
        style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '60%', height: '40px', backgroundColor: '#ccc', marginBottom: '20px', borderRadius: '5px' }}></div>
        <div style={{ width: '40%', height: '20px', backgroundColor: '#ddd', marginBottom: '20px', borderRadius: '5px' }}></div>
        <div style={{ width: '100%', maxWidth: '400px', height: '200px', backgroundColor: '#eee', marginBottom: '20px', borderRadius: '8px' }}></div>
        <div style={{ width: '80%', height: '20px', backgroundColor: '#ddd', marginBottom: '10px', borderRadius: '5px' }}></div>
        <div style={{ width: '80%', height: '20px', backgroundColor: '#ddd', marginBottom: '10px', borderRadius: '5px' }}></div>
        <div style={{ width: '50%', height: '20px', backgroundColor: '#ccc', marginBottom: '20px', borderRadius: '5px' }}></div>
      </div>
    );
  }

  if (!game) {
    return <div>Error: Game details could not be loaded.</div>;
  }

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <h1>{game.title}</h1>

      {/* Worth */}
      <h3>Worth: {game.worth}</h3>

      {/* Thumbnail */}
      <img
        src={game.thumbnail}
        alt={game.title}
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', margin: '20px 0' }}
      />

      {/* Description */}
      <p style={{ fontSize: '16px', lineHeight: '1.5', margin: '20px 0' }}>{game.description}</p>

      {/* Instructions */}
      <p style={{ fontSize: '16px', lineHeight: '1.5', margin: '20px 0' }}>
        <strong>Instructions:</strong> {game.instructions}
      </p>

      {/* Platforms */}
      <h3>Platforms: {game.platforms}</h3>

      {/* Status */}
      <h3>Status: {game.status}</h3>

      {/* GamerPower URL */}
      <h5>
        <a
          href={game.gamerpower_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'none' }}
        >
          View on GamerPower
        </a>
      </h5>
    </div>
  );
}

export default Game;
