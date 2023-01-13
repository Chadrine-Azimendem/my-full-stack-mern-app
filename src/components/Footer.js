import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<ul className="list">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/CreateUser">Create Account</Link>
					</li>
					<li>
						<Link to="/LogIn">SignIn</Link>
					</li>
				</ul>
				<p>&copy; Chadrine L. Azimendem 2022</p>
			</div>
		</>
	);
};

export default Footer;
