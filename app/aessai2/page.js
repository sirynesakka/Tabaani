"use client"
import React from 'react';
import Select from "react-select";

const YourPage = () => (
  <div className="flex justify-center max-w-md mt-20 sm:first:col-span-2 py-14 px-11 rounded-lg max-w-lg mx-auto ">
    <div className="sm:first:col-span-2 py-14 px-11 rounded-lg max-w-lg" style={{ backgroundColor: '#bbe6b1' }}>
      <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold font-semibold font-serif leading-none">
        <span>Authentification </span>
      </h3>
      
      <ul className="mt-6 sm:mt-10">
      
      <form >
        <label className="block text-gray-700 text-sm font-semibold font-serif mb-2" htmlFor="role">
          Sélectionner votre rôle :
        </label>
        <div className="relative">
          <Select
         
            
            className=" appearance-none w-full   border-green-700 text-gray-700 py-2 px-4 pr-8 rounded  "
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
  </div>
);

export default YourPage;
