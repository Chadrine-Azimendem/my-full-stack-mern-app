import React from "react";
import { useState } from "react";
import "../App.css";
import { createUser } from "../utils";

const CreateUser = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    await createUser(username, email, password);
  };

  return (
    <div>
      <h1 className="sub-title">Sign Up form</h1>
      <form className="sign-upForm" onSubmit={submitHandler}>
        <input
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
        />
        <input
          placeholder="Your email"
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
