import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
// import MovieCard from "./components/MovieCard";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import LogIn from "./components/LogIn";
import Update from "./components/Update";
import DeleteUser from "./components/DeleteUser";

import { persistantLogin } from "./utils";
import { getCookie } from "./common";

// store the API url in API_URL variable
// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3976222";

const App = () => {
	// movies states
	// const [searchMovie, setSearchMovie] = useState("");
	// const [movies, setMovies] = useState([]);

	// set state to update user and cookie
	const [user, setUser] = useState();
	const [cookie, setCookie] = useState();

	// useEffect(() => {
	//   fetchMovies("Batman");
	// }, []);

	useEffect(() => {
		let cookie = getCookie("jwt_token");
		if (cookie !== false) {
			loginWithToken(cookie);
		}
	}, []);

	const loginWithToken = async (cookie) => {
		const user = await persistantLogin(cookie);
		setUser(user);
		setCookie(cookie);
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

			<LogIn setter={setUser} cookie={setCookie} />
			{user ? (
				<>
					<h2> Hello welcome {user} you have logged in</h2>
					<UsersList cookie={cookie} />
					<Update user={user} />
					<DeleteUser user={user} />
				</>
			) : (
				<h2>Please login</h2>
			)}
		</div>
	);
};

export default App;
