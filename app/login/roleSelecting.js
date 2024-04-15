"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-select";
import Client from "../clientpage/page";
import Manager from "../managerpage/page";
import Admin from "../adminpage/page";

const options = [
  { value: 'client', label: 'Client' },
  { value: 'manager', label: 'Manager' },
  { value: 'admin', label: 'Admin' }
];

const RoleSelecting = () => {
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState(null);
  const [redirected, setRedirected] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      console.error("User data not available yet");
      return;
    }

    const { sub, email, picture } = user ||{};
    const body = JSON.stringify({ id: sub, email, selectedRole , picture }); // Include selected role in the body

    try {
      const response = await axios.post('/api1/callback', body, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Render the page based on the selected role
  const renderPageBasedOnRole = () => {
    switch (selectedRole) {
      case 'client':
        return <Client />;
      case 'manager':
        return <Manager />;
      case 'admin':
        return <Admin />;
      default:
        return null; // You can handle other cases here, such as showing an error message
    }
  };
  if (redirected) {
    return renderPageBasedOnRole();
  }

  return (
    <div className="max-w-md mt-10 mx-auto">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
          Sélectionner votre rôle :
        </label>
        <div className="relative">
          <Select
            options={options}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={option => setSelectedRole(option.value) }
          />
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enregistrer
          </button>
        </div>
      </form>
      
      {/* Render the page based on the selected role */}
      {selectedRole && renderPageBasedOnRole()}
      
      {/* Display user information if available */}
      <div>{user && JSON.stringify({ sub: user.sub, email: user.email , picture: user.picture}, null, 2)}</div>
    </div>
  );
}

export default RoleSelecting;