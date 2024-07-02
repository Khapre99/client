import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get('http://localhost:5000/api/movies');
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Available Movies</h1>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h2>{movie.title}</h2>
          <p>{movie.genre}</p>
          <Link to={`/movie/${movie._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
