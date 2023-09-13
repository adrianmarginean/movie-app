import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const MOVIE_API_URL = 'movie-api-test.azurewebsites.net';

  useEffect(() => {
    // Fetch movie data from the backend API
    axios.get(`${MOVIE_API_URL}/api/movie/GetAll`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div className="MovieList">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.cover} alt={movie.name} />
            <div className="movie-details">
              <h2>{movie.name}</h2>
              <p>{movie.description}</p>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
              <p>Genres: {movie.genre.join(', ')}</p>
              <p>Stars: {movie.stars.join(', ')}</p>
              <p>
                IMDb:{' '}
                <a href={movie.imdb} className="imdb-link">
                  {movie.imdb}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
