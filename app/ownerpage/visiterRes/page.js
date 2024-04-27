"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const VisiterRes = () => {
    const [demandes, setDemande] = useState([]);

    const fetchDemande = async () => {
        try {
            const response = await axios.get("/api1/reservation");
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
            <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">Visiter les réservations</div>

            <div className="flex ml-4 lg:ml-60 mt-8 justify-center items-center h-full">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                                    Nom
                                </th>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                                    Email
                                </th>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                                    Heures
                                </th>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                                    Durée
                                </th>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900  border border-gray-300 hidden lg:table-cell">
                                    Nombre de personnes
                                </th>
                                <th className="p-3 font-serif uppercase bg-white-200 text-green-900  border border-gray-300 hidden lg:table-cell">
                                    Date
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
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                                            Nom
                                        </span>
                                        {demande.nom}
                                    </td>

                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                                            Email
                                        </span>
                                        <span className="rounded  py-1 px-3 text-xs font-semibold">
                                            {demande.email}
                                        </span>
                                    </td>

                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                            Heures
                                        </span>
                                        <span className="rounded bg-grey-400 py-1 px-3 text-xs font-semibold">
                                            {demande.heure}
                                        </span>
                                    </td>

                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                            Durée
                                        </span>
                                        <span className="rounded bg-grey-400 py-1 px-3 text-xs font-semibold">
                                            {demande.num}
                                        </span>
                                    </td>

                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                            Nombre de personnes
                                        </span>
                                        <span className="rounded bg-grey-400 py-1 px-3 text-xs font-semibold">
                                            {demande.nombre}
                                        </span>
                                    </td>

                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                            Date
                                        </span>
                                        <span className="rounded bg-grey-400 py-1 px-3 text-xs font-semibold">
                                            {demande.date}
                                        </span>
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

export default VisiterRes;
