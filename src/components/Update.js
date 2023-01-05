import React from "react";
import { useState } from "react";
import { updateData } from "../utils";

const Update = () => {
	const [filter, setFilter] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const updateUsername = async (event) => {
		event.preventDefault();
		// console.log(filter);
		// console.log(field);
		await updateData(filter, "username", username);
	};
	const updateEmail = async (event) => {
		event.preventDefault();
		// console.log(filter);
		// console.log(field);
		await updateData(filter, "email", email);
	};
	const UpdatePassword = async (event) => {
		event.preventDefault();
		// console.log(filter);
		// console.log(field);
		await updateData(filter, "password", password);
	};

	return (
		<div>
			<form className="form">
				<input
					type="text"
					placeholder="username"
					onChange={(e) => setFilter(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Update username"
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Update email"
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Update password"
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<button onClick={updateUsername} className="btn" type="submit">
					update Your Username
				</button>
				<button onClick={updateEmail} className="btn" type="submit">
					update Your email
				</button>
				<button onClick={UpdatePassword} className="btn" type="submit">
					update Your Password
				</button>
			</form>
		</div>
	);
};

export default Update;
