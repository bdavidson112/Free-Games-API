import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // Import useParams to get the ID from the URL
import { fetchData } from '../App'; // Import fetchData from App.js

function Game() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store movie details
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchData(`i=${id}`); // Fetch movie details by IMDb ID
        if (data) {
          setMovie(data);
        } else {
          console.error('No data received for the movie');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false); // Ensure loading is set to false after the fetch
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Error: Movie details could not be loaded.</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{movie.Title}</h1>
      <h3>Year: {movie.Year}</h3>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', margin: '20px 0' }}
      />
      <p>{movie.Plot}</p>
      <h4>Director: {movie.Director}</h4>
      <h4>Actors: {movie.Actors}</h4>
      <h4>Genre: {movie.Genre}</h4>
      <h4>IMDB Rating: {movie.imdbRating}</h4>
    </div>
  );
}

export default Game;
