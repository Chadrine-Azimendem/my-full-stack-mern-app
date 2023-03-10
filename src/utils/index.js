import { writeCookie } from "../common";

// Create new user
export const createUser = async (username, email, password) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}createAccount`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					"username": username,
					"email": email,
					"password": password
				})
			}
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

// read operation
export const listAllUsers = async (cookie) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}readData`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
					// "Authorization": `Bearer ${cookie}`
				}
			}
		);
		const data = await response.json();
		const usersArr = data.users;
		return usersArr;
	} catch (error) {
		console.log(error);
	}
};

export const userLogin = async (username, email, password, setter) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}userLogin`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					"username": username,
					"email": email,
					"password": password
				})
			}
		);
		const data = await response.json();
		console.log(data);
		setter(data.username);
		writeCookie("jwt_token", data.token, 7);
	} catch (error) {
		console.log(error);
	}
};

export const updateData = async (username, field, to) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}updateUser`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					"username": username,
					"field": field,
					"to": to
				})
			}
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const persistantLogin = async (jwtToken) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}persistantLogin`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${jwtToken}`
				}
			}
		);
		const data = await response.json();
		console.log("success:", data.success);
		return data.username;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (username, jwtToken) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}deleteData`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${jwtToken}`
				},
				body: JSON.stringify({
					"username": username
				})
			}
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
