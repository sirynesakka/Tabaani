"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DeleteDemClient from "./deleteDemClient";

const Mesdemandes = () => {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mt-3 text-4xl text-center font-semibold font-serif  bg-clip-text text-green-900">
        Mes Demandes
      </h1>
      <div className="flex mt-4 justify-center">
        <table className="border-collapse w-full max-w-screen-lg">
          <thead>
            <tr>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Nom
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                tel
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Email
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Heures
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Durée
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Nombre de personnes
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Date
              </th>
              <th className="p-3 font-semibold font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
              <tr
                key={demande.id}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    name
                  </span>
                  {demande.nom}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    name
                  </span>
                  {demande.telnum}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    email
                  </span>
                  <span className="rounded  py-1 px-3 text-xs font-bold">
                    {demande.email}
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    heures
                  </span>
                  <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    {demande.heure}
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    durée
                  </span>
                  <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    {demande.num}
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Nombre de personnes
                  </span>
                  <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    {demande.nombre}
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    date
                  </span>
                  <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    {demande.date}
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    action
                  </span>
                  <div className="py-2">
                      <Link href={`/editeFormReser/${demande._id}`}
      
      className="font-bold px-3 py-2 leading-none text-black-200 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green"
    >
      Modifier 
    </Link>
    </div>
                  <div >
                        <DeleteDemClient id={demande._id} setDemande={setDemande}/>
                      </div>
          
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mesdemandes;
