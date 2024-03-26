<<<<<<< HEAD
"use client"
=======
'use client'
>>>>>>> bbda56c7bf1e681dbac0738a11f62c4fb549aa3b
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-select";
<<<<<<< HEAD
import RoleSelecting from "./roleSelecting";
import Cities from "../cities/page";
import Manager from "../managerpage/page";
import Ownerpage from "../ownerpage/page";
=======
>>>>>>> bbda56c7bf1e681dbac0738a11f62c4fb549aa3b

const options = [
  { value: 'client', label: 'Client' },
  { value: 'manager', label: 'Manager' },
  { value: 'admin', label: 'Admin' }
];

const Index = () => {
<<<<<<< HEAD
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
=======
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      console.error("User data not available yet");
      return;
    }

    const { sub, name } = user ||{};
    const body = JSON.stringify({ id: sub, name, selectedRole }); // Include selected role in the body

    try {
      const response = await axios.post('/api1/callback', body, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
>>>>>>> bbda56c7bf1e681dbac0738a11f62c4fb549aa3b
    }
  };

  return (
<<<<<<< HEAD
    <div>
      {isLoading && <p>Loading...</p>}
      {existingUser && <p>Welcome, {user ? user.name : "User"}!</p>}
      {!existingUser && <p>User not found in the database.</p>}
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
              foundUser.selectedRole === 'client' && <Cities key={foundUser.id} />
              || foundUser.selectedRole === 'manager' && <Manager key={foundUser.id} />
              || foundUser.selectedRole === 'admin' && <Ownerpage key={foundUser.id} />
            )
          ))}
        </>
      )}
    </div>
  );
}

export default Index;
=======
    <form onSubmit={handleSubmit} className="max-w-md mt-10 mx-auto">
      <label className="block text-gray-700 text-sm font-bold  mb-2" htmlFor="role">
        Sélectionner votre rôle :
      </label>
      <div className="relative">
        <Select
          options={options}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={option => setSelectedRole(option.value)}
        />
      </div>

      <div className="text-center mt-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enregistrer
        </button>
      </div>
      {/* Display user information if available */}
      <div>{user && JSON.stringify({ sub: user.sub, name: user.name }, null, 2)}</div>
    </form>
  );
}

export default Index;
>>>>>>> bbda56c7bf1e681dbac0738a11f62c4fb549aa3b
