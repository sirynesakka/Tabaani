"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-select";
import Client from "../clientpage/page";
import Manager from "../managerpage/page";
import Admin from "../adminpage/page";
import Styledselect from "../components/styledselect";

const options = [
  { value: 'client', label: 'Client' },
  { value: 'manager', label: 'Manager' }
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
      setRedirected(true); 
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
    <>
    <div className="flex justify-center max-w-md mt-20 sm:first:col-span-2 py-14 px-11 rounded-lg max-w-lg mx-auto ">
      <div className="sm:first:col-span-2 py-14 px-11 rounded-lg max-w-lg" style={{ backgroundColor: '#bbe6b1' }}>
      <h3 className="mb-4 font-semibold font-serif text-black text-[22px] sm:text-[40px] font-extrabold leading-none">
        <span>Authentification </span>
      </h3>
      <ul className="mt-6 sm:mt-10">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-semibold font-serif mb-2" htmlFor="role">
          Sélectionner votre rôle :
        </label>
        <div className="relative">
          <Select
           styles={Styledselect}
            options={options}
            className="block appearance-none w-full   border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={option => setSelectedRole(option.value) }
          />
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
            Enregistrer
          </button>
        </div>
      </form>
      </ul>
      </div>
      
      
      {/* Render the page based on the selected role */}
     
      {/* Display user information if available */}
     
    </div>
   
      
    </>
    
  );
}

export default RoleSelecting;