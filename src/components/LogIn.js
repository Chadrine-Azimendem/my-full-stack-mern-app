import React from "react";
import { useState } from "react";

import { userLogin } from "../utils";

const LogIn = ({ setter, cookie }) => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const LogInHandler = async (event) => {
		event.preventDefault();
		await userLogin(username, email, password, setter, cookie);
	};

	return (
		<div>
			<h1 className="sub-title">Sign In Page</h1>
			<form className="form" onSubmit={LogInHandler}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Your username"
					type="text"
					required
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your email"
					type="text"
					required
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					type="password"
					required
				/>

				<button className="btn" type="submit">
					Click Here to LogIn
				</button>
			</form>
		</div>
	);
};

export default LogIn;
