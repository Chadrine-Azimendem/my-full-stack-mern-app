import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import LogIn from "./components/LogIn";
import Update from "./components/Update";
import DeleteUser from "./components/DeleteUser";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { persistantLogin } from "./utils";
import { getCookie } from "./common";

const App = () => {
	// set state to update user and cookie
	const [user, setUser] = useState();
	const [cookie, setCookie] = useState();

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

	return (
		<div className="app">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/CreateUser" element={<CreateUser />} />
					<Route path="/LogIn" element={<LogIn />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			{/* <CreateUser /> */}

			{/* <LogIn setter={setUser} cookie={setCookie} /> */}
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
