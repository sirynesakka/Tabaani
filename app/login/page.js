"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import RoleSelecting from "./roleSelecting";
import Client from "../clientpage/page";
import Manager from "../managerpage/page";
import Admin from "../adminpage/page";

const options = [
  { value: 'client', label: 'Client' },
  { value: 'manager', label: 'Manager' },
  { value: 'admin', label: 'Admin' }
];

const Index = () => {
  const { user, isLoading } = useUser();
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [existingUser, setExistingUser] = useState(false); // State to indicate if the user exists in the database
  const [userInserted, setUserInserted] = useState(false); // State to indicate if the user has been successfully inserted into the database

  useEffect(() => {
    if (user) {
      getUsers();
    }
  }, [user]); // Call getUsers() only when user changes

  const getUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await axios.get('/api1/callback');
      console.log("Users fetched:", response.data.users);
      setUsers(response.data.users);
      // Find the current user from the fetched users
      const foundUser = response.data.users.find(userData => userData.id === user.sub);
      if (foundUser) {
        setExistingUser(true);
        console.log("User exists in the database.");
      } else {
        console.log("User does not exist in the database. Inserting user...");
        await insertUserIntoDatabase(user.sub, user.name); // Assuming user.sub contains the unique identifier of the user
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
  };

  // Function to insert user into the database
  const insertUserIntoDatabase = async (userId, userName) => {
    try {
      const response = await axios.post('/api1/callback', {
        id: userId,
        name: userName,
      });
      console.log(response.data.msg);
      if (response.data.success) {
        console.log("User successfully inserted into the database.");
        setUserInserted(true); // Update state to indicate user insertion success
      } else {
        console.log("Failed to insert user into the database.");
      }
    } catch (error) {
      console.error("Error inserting user into database:", error);
    }
  };

  return (
    <div>
      
      {isLoading && <p className=" flex justify-center items-center h-screen text-4xl">Loading...</p>}
      {existingUser && <p> {user ? user.name : "User"}!</p>}
      {!existingUser && <p></p>}
      {userInserted && !existingUser && (
        <RoleSelecting />
      )}
      {!userInserted && !existingUser && (
        <>
          
          <h3>All Users:</h3>
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.id}</li>
            ))}
          </ul>
        </>
      )}
      {existingUser && (
        <>
          {users.map((foundUser) => (
            foundUser.id === user.sub && (
              foundUser.selectedRole === 'client' && <Client key={foundUser.id} />
              || foundUser.selectedRole === 'manager' && <Manager key={foundUser.id} />
              || foundUser.selectedRole === 'admin' && <Admin key={foundUser.id} />
            )
          ))}
        </>
      )}
    </div>
  );
}

export default Index