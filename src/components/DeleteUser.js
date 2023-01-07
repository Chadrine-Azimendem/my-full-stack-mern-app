import React, { useState } from "react";
import { deleteUser } from "../utils";
import { getCookie } from "../common";

const DeleteUser = () => {
	const [username, setUsername] = useState();

	const submitHandler = async (event) => {
		event.preventDefault();
		let cookie = getCookie("jwt_token");
		await deleteUser(username, cookie);
	};

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Your username"
					type="text"
					required
				/>
				<button className="btn" type="submit">
					Click Here to Delete Account
				</button>
			</form>
		</div>
	);
};

export default DeleteUser;
