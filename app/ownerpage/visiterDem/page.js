"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteDemande from "../../components/deletDemande";

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

  async function handleConfirmation(clé, telnum, nom, date, heure) {
    try {
      const response = await axios.put(`/api1/demande`, { clé });

      // Assuming the response contains JSON data
      const responseData = await response.data;
      console.log(responseData.message);

      // Send SMS here
      const smsResponse = await axios.post("/api1/sms", {
        phone: telnum, // Using the phone number from the demand
        msg: `Votre réservation a été confirmée pour ${nom} le ${date} à ${heure}`, // Custom message
      });
      console.log(smsResponse.data); // Assuming you want to log the response

      // If you want to update the UI after confirmation, you might need to refetch the data
      fetchDemande();

      alert(
        'Demande confirmée avec succès, vous pouvez la trouver dans "Visiter les réservations".'
      );
    } catch (error) {
      console.error("Error confirming demande:", error);
    }
  }

  return (
    <>
      <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">
        Visiter les demandes
      </div>
      <div className="flex ml-4 lg:ml-60 mt-10 justify-center items-center h-full">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Nom
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Tel
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Email
                </th>
                <th className="p-3 font-serif  uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Heures
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Durée
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Nombre de personnes
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Date
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {demandes.map((demande) => (
                <tr
                  key={demande.id}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Nom
                    </span>
                     <div className="font-semibold">{demande.nom}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Tel
                    </span>
                    <div className="font-semibold">{demande.telnum}</div>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Email
                    </span>
                    <span className="rounded  py-1 px-3 text-xs font-bold">
                     <div className=" font-semibold"> {demande.email}</div>
                    </span>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Heures
                    </span>
                    <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    <div className="font-semibold"> {demande.heure}</div>
                    </span>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Durée
                    </span>
                    <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    <div className="font-semibold">{demande.num}</div>
                    </span>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Nombre de personnes
                    </span>
                    <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    <div className=" font-semibold"> {demande.nombre}</div>
                    </span>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Date
                    </span>
                    <span className="rounded bg-grey-400 py-1 px-3 text-xs font-bold">
                    <div className="font-semibold">{demande.date}</div>
                    </span>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <div className="lg:flex">
                      <div className="mr-4 lg:mr-0 mb-2 lg:mb-0">
                        {/* Confirmation button */}
                        <button
                          onClick={() =>
                            handleConfirmation(
                              demande.clé,
                              demande.telnum,
                              demande.nom,
                              demande.date,
                              demande.heure
                            )
                          }
                          className="font-bold px-3 py-2 leading-none text-black-200 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green"
                        >
                          Confirmer
                        </button>
                      </div>
                      <div className="ml-3">
                        {/* "Supprimer" button */}
                        <div>
                          <DeleteDemande
                            id={demande._id}
                            setDemande={setDemande}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Visiter;
