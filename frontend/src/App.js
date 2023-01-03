import React from "react";
import { useState } from "react";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3976222";

const App = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetchMovies("Batman");
  // }, []);

  const fetchMovies = async (movieTitle) => {
    const request = await fetch(`${API_URL}&s=${movieTitle}`);
    const response = await request.json();
    // console.log(response.Search);
    setMovies(response.Search);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <br></br>
      <br></br>

      <div className="searchInput">
        <input
          placeholder="search for a film"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button onClick={() => fetchMovies(searchMovie)}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
