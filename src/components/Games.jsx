import React, { useEffect, useState } from 'react';
import { fetchData } from '../App'; // Import fetchData from App.js
import { useNavigate, useLocation } from 'react-router'; // Import useNavigate and useLocation

function Games() {
  const [movies, setMovies] = useState([]); // State to store movies
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Extract the search query from the URL
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || ''; // Default to an empty string if no search query
    setSearchQuery(query);

    const fetchMovies = async () => {
      const searchParam = query || 'batman'; // Default to "batman" if no query is provided
      const data = await fetchData(`s=${searchParam}`); // Use the search query to fetch movies
      if (data && data.Search) {
        setMovies(data.Search);
        setFilteredMovies(data.Search);
      } else {
        setMovies([]);
        setFilteredMovies([]);
      }
    };

    fetchMovies();
  }, [location.search]); // Re-run when the search query in the URL changes

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleButtonClick = () => {
    // Update the URL with the new search query
    navigate(`/games?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleCardClick = (id) => {
    // Navigate to the individual movie page
    navigate(`/game/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Movies</h1>

      {/* Input and Search Bar */}
      <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search for a movie..."
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

      {/* Movies Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleCardClick(movie.imdbID)} // Add onClick handler
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
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{movie.Title}</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>Year: {movie.Year}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Games;
