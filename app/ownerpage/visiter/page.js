"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Visiter = () => {
  const [demandes, setDemande] = useState([]);

  const fetchDemande = async () => {
    try {
      const response = await axios.get("/api1/demande");
      setDemande(response.data.demandes);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchDemande();
  }, []);

  return (
    <div className="overflow-x-auto ml-60 mt-20">
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
  <tr className="font-bold ">
    <th className="py-3  px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Nom
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Email
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Heures
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Durée
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Nombre de personnes
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Date
    </th>
    <th className="py-3 px-6 text-left text-gray-600 sm:px-8 md:px-12 lg:px-16">
      Action
    </th>
  </tr>
</thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td className="py-4 px-6 text-left font-medium text-gray-600 sm:px-8 md:px-12 lg:px-16">
                {demande.nom}
              </td>
              <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
                {demande.email}
              </td>
              <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
                {demande.heure}
              </td>
              <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
                {demande.num}
              </td>
              <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
                {demande.nombre}
              </td>
              <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
                {demande.date}
              </td>
 <td className="py-4 px-6 text-left sm:px-8 md:px-12 lg:px-16">
    <div>
    <a href="#"
        class=" font-bold px-3 py-2 leading-none text-black-200 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green">
       Confirmer
    </a>
    </div>
    
   <div className="mt-4">
   <a href="#"
        class=" font-bold px-3 py-2 leading-none text-black-200 border border-red-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-red-500 from-white-900 to-red">
       Supprimer
    </a>
   </div>
   
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visiter;
