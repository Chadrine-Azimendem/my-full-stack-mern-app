import React from "react";
import { useState, useEffect } from "react";
// import MovieCard from "./components/MovieCard";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import LogIn from "./components/LogIn";
import Update from "./components/Update";
import DeleteUser from "./components/DeleteUser";
import { authCheck } from "./utils";
import "./App.css";
import { getCookie } from "./common";

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3976222";

const App = () => {
	// const [searchMovie, setSearchMovie] = useState("");
	// const [movies, setMovies] = useState([]);

	const [user, setUser] = useState();
	// const [updates, setUpdates] = useState();

	// useEffect(() => {
	//   fetchMovies("Batman");
	// }, []);

	// fix this in a later time
	useEffect(() => {
		let cookie = getCookie("jwt_token");
		if (cookie !== false) {
			loginWithToken(cookie);
		}
	}, []);

	const loginWithToken = async (cookie) => {
		const user = await authCheck(cookie);
		setUser(user);
	};

	// const fetchMovies = async (movieTitle) => {
	//   const request = await fetch(`${API_URL}&s=${movieTitle}`);
	//   const response = await request.json();
	//   // console.log(response.Search);
	//   setMovies(response.Search);
	// };

	return (
		// <div className="app">
		//   {/* <h1>My Movie App</h1>
		//   <br></br>
		//   <br></br>

		//   <div className="searchInput">
		//     <input
		//       placeholder="search for a film"
		//       value={searchMovie}
		//       onChange={(e) => setSearchMovie(e.target.value)}
		//     />
		//     <button onClick={() => fetchMovies(searchMovie)}> Search</button>
		//   </div>

		//   {movies?.length > 0 ? (
		//     <div className="container">
		//       {movies.map((movie, index) => (
		//         <MovieCard key={index} movie={movie} />
		//       ))}
		//     </div>
		//   ) : (
		//     <div className="empty">
		//       <h2>No Movies found</h2>
		//     </div>
		//   )} */}
		// </div>

		<div className="app">
			<CreateUser />
			<UsersList />
			<LogIn setter={setUser} />
			{user ? (
				<h2> Hello welcome {user} you have logged in</h2>
			) : (
				<h2>Please login</h2>
			)}
			<Update />
			{/* {updates ? (
				<h2> details updated successfuly to {updates}</h2>
			) : (
				<h2>Nothing updated yet</h2>
			)} */}
			<DeleteUser />
		</div>
	);
};

export default App;
