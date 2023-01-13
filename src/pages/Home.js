import React from "react";
import { useState, useEffect } from "react";

import "../style/home.css";
import MovieCard from "../components/MovieCard";

// store the API url in API_URL variable
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3976222";

const Home = () => {
	// movies states
	const [searchMovie, setSearchMovie] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies("Batman");
	}, []);

	const fetchMovies = async (movieTitle) => {
		const request = await fetch(`${API_URL}&s=${movieTitle}`);
		const response = await request.json();
		// console.log(response.Search);
		setMovies(response.Search);
	};

	return (
		<div className="app">
			<div className="searchInput">
				<input
					placeholder="search for a film"
					value={searchMovie}
					onChange={(e) => setSearchMovie(e.target.value)}
				/>
				<button onClick={() => fetchMovies(searchMovie)}>
					{" "}
					Search
				</button>
			</div>
			<h1>Trending Now</h1>

			{movies?.length > 0 ? (
				<div className="movies-container">
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

export default Home;
