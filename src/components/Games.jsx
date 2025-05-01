import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import { fetchData } from '../App'; // Import fetchData from App.js

function Games() {

  const [games, setGames] = useState([]); // State to store all games
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredGames, setFilteredGames] = useState([]); // State for filtered games
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchGames = async () => {
      const data = await fetchData('giveaways'); // Fetch all giveaways via the proxy
      if (data) {
        setGames(data);
        setFilteredGames(data);
        
      }
    };

    fetchGames();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleButtonClick = () => {
    // Filter games based on the search query
    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(searchQuery)
    );
    setFilteredGames(filtered);
    console.log('Filtered games:', filtered);
  };

  const handleCardClick = (id) => {
    // Navigate to the individual game page
    navigate(`/game/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Games</h1>

      {/* Input and Search Bar */}
      <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchQuery}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '16px', width: '300px', marginRight: '10px' }}
        />
        <button
          onClick={handleButtonClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          GO!
        </button>
      </div>

      {/* Games Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredGames && filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => handleCardClick(game.id)} // Add onClick handler
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                width: '200px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer', // Add pointer cursor to indicate clickability
              }}
            >
              <img
                src={game.thumbnail}
                alt={game.title}
                style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{game.title}</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>Worth: {game.worth}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>No games found.</p>
        )}
      </div>
    </div>
  );
}

export default Games;
