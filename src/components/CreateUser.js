import React from "react";
import { useState } from "react";
import "../App.css";
import { createUser } from "../utils";

const CreateUser = ({ user }) => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitHandler = async (event) => {
		event.preventDefault();

		// log entered data in the console
		console.log(username);
		console.log(email);
		console.log(password);
		await createUser(username, email, password);
	};

	return (
		<div>
			<h1 className="sub-title">Sign Up form</h1>
			<form className="form" onSubmit={submitHandler}>
				<input
					placeholder="Eter Your username"
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					required
				/>
				<input
					placeholder="Enter Your email"
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					required
				/>
				<input
					placeholder="Create password"
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					required
				/>

				<button className="btn" type="submit">
					Click Here to Signup
				</button>
			</form>
		</div>
	);
};

export default CreateUser;
