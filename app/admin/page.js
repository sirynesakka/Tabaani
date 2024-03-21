'use client'
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-select";

const options = [
  { value: 'client', label: 'Client' },
  { value: 'manager', label: 'Manager' },
  { value: 'admin', label: 'Admin' }
];

const Index = () => {
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
    }
  };

  return (
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
