import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { listAllUsers } from "../utils";

const UsersList = () => {
  //   const [dataBaseUsers, setDataBaseUsers] = useState();
  const [usernames, setUsername] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = async () => {
    let users = await listAllUsers();
    let newUsernames = [...usernames];
    let newRoles = [...roles];
    for (let i = 0; i < users.length; i++) {
      newUsernames.push(users[i].username);

      {
        users[i].role === 0 ? newRoles.push("user") : newRoles.push("admin");
      }
    }

    setUsername(newUsernames);
    setRoles(newRoles);
  };

  return (
    <div className="users-container">
      <div className="li-title">
        <h3>username</h3>
        <h3>role</h3>
      </div>
      <div className="users-list">
        <div className="usernames">
          {usernames.map((user, index) => (
            <p key={index}>{user}</p>
          ))}
        </div>
        <div className="roles">
          {roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
