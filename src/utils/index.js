import { writeCookie } from "../common";

// Create new user
export const createUser = async (username, email, password) => {
	try {
		const response = await fetch("http://localhost:5001/createAccount", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"username": username,
				"email": email,
				"password": password
			})
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const userLogin = async (username, email, password, setter) => {
	try {
		const response = await fetch("http://localhost:5001/userLogin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"username": username,
				"email": email,
				"password": password
			})
		});
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
		const response = await fetch("http://localhost:5001/updateUser", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"username": username,
				"field": field,
				"to": to
			})
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const listAllUsers = async () => {
	try {
		const response = await fetch("http://localhost:5001/readData", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await response.json();
		const usersArr = data.users;
		return usersArr;
	} catch (error) {
		console.log(error);
	}
};

export const authCheck = async (cookieValue) => {
	try {
		const response = await fetch("http://localhost:5001/authCheck", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"AuThorization": `Bearer ${cookieValue}`
			}
		});
		const data = await response.json();
		console.log(data);
		return data.username;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (username) => {
	try {
		const response = await fetch("http://localhost:5001/deleteData", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"username": username
			})
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
