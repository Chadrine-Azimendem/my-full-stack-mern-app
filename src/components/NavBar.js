import React from "react";
import { Link } from "react-router-dom";

import "../style/navBar.css";

const NavBar = () => {
	return (
		<nav>
			<ul className="list">
				<li className="li-item">
					<Link to="/">Home</Link>
				</li>
				<li className="li-item">
					<Link to="/CreateUser">Create Account</Link>
				</li>
				<li className="li-item">
					<Link to="/LogIn">SignIn</Link>
				</li>
				<div className="dot"></div>
			</ul>
		</nav>
	);
};

export default NavBar;
