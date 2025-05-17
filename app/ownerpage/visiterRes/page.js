"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const VisiterRes = () => {
  const [demandes, setDemande] = useState([]);
  const { user, isLoading } = useUser();
  const router = useRouter();
  const Owneremail = localStorage.getItem('Demandes');
  console.log("email est s :", Owneremail);

  const fetchDemande = async () => {
    try {
      const response = await axios.get('/api1/reservation', {
        params: { Owneremail: Owneremail }
      });
      setDemande(response.data.demandes);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const checkUserRole = async (email) => {
    try {
      const response = await axios.get('/api1/checkRole', {
        params: { email }
      });
      const role = response.data.role;
      console.log("User role:", role);
      return role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };

  useEffect(() => {
    const verifyUserRole = async () => {
      try {
        if (!isLoading && user) {
          const role = await checkUserRole(user.email);
          if (role !== "manager") {
            router.replace("/403");
          }
        }
      } catch (error) {
        console.error("Error verifying user role:", error);
      }
    };

    verifyUserRole();
  }, [isLoading, user, router]);

  useEffect(() => {
    fetchDemande();
  }, []);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">
        Visiter les réservations
      </div>

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
