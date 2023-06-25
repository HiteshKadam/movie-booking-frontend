import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/api/v1.0/moviebooking/movies/search/${searchTerm}/`);
      setMovies(response.data);
      setErrorMessage('');
    } catch (error) {
      setMovies([]);
      setErrorMessage('Movie not found.');
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {movies.length > 0 && (
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
      )}
    </div>
  );
};

export default MovieSearch;
