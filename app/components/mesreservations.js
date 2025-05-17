"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteRes from "../components/deleteRes"

const Reservation = () => {
  const [demandes, setDemande] = useState([]);
  const email = typeof window !== 'undefined' ? localStorage.getItem('Clientsemail') : null;
  console.log("l email est de :", email);
  const fetchDemande = async () => {
    try {
      
      const response = await axios.get('/api1/reservationClient', {
        params: {
            email: email// Replace 'example@example.com' with the actual email
        }
    }) ;
      setDemande(response.data.demandes);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchDemande();
  }, []);

  return (
    <>
    {demandes.map((demande) => (
    <div   key={demande.id} className="flex justify-center items-center h-">
      
      <div className="bg-white border rounded-lg shadow-lg px-4 py-6 max-w-sm mx-auto mt-24">
        <h1 className="font-semibold font-serif text-lg my-2 text-center text-green-800">Votre table a été réservée avec succès.</h1>
        <hr className="mb-1" />
        
        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left font-bold text-sm text-gray-700">Nom</th>
              <th className="text-right font-bold text-sm text-gray-700">Date</th>
            </tr>
          </thead>
          <tr>
            <td className="text-left text-sm text-gray-700">  {demande.nom}</td>
            <td className="text-right text-sm text-gray-700">{demande.date}</td>
          </tr>
        </table>

        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left font-bold text-sm text-gray-700">Heures</th>
              <th className="text-right font-bold text-sm text-gray-700">Durée</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left text-sm text-gray-700">{demande.heure}</td>
              <td className="text-right text-sm text-gray-700">{demande.num}</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left font-bold text-sm text-gray-700">Nombre de personnes</th>
             
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td className="text-left text-sm text-gray-700">{demande.nombre}</td>
            </tr>
          </tbody>
          </table>
          <th className="  text-right font-bold text-sm text-gray-700">
                <DeleteRes id={demande._id} setDemande={fetchDemande}/>
              </th>
      </div>
    </div>
     ))}
     </>
  );
};

export default Reservation;
