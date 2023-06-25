import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1.0/moviebooking/all');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Theatre Name</th>
            <th>Total Tickets Allotted</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.movie_name}</td>
              <td>{movie.theatre_name}</td>
              <td>{movie.total_tickets_allotted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
