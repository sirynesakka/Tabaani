"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Deletepubowner from "../../components/deletepubowner";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import DisplayImage from "../../components/DisplayImage";
import { useRouter } from "next/navigation";

export default function Home() {
  const [publications, setPublication] = useState([]);
  const [role, setRole] = useState('');
  const { user, isLoading } = useUser();
  const email = user?.email || "";
  const router = useRouter();

  const fetchPublication = async (email) => {
    try {
      const response = await axios.get(
        `/api1/ownerpublication2?ownerEmail=${email}`
      );
      return response.data.publications;
    } catch (error) {
      console.error("Error fetching publications:", error);
      return [];
    }
  };

  const checkUserRole = async () => {
    try {
      const params = { email };
      const response = await axios.get('/api1/checkRole', { params });
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
          const role = await checkUserRole();
          console.log("role:", role);
          setRole(role);
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
    if (email) {
      fetchPublication(email).then((publications) => {
        setPublication(publications);
      });
    }
  }, [email]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="ml-6 sm:ml-60 mt-9 text-green-900 text-center text-4xl font-semibold font-serif">
        Mes Publications
      </div>

      <div className="ml-6 sm:ml-60 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {publications.map((publication) => (
            <div key={publication.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                <DisplayImage publication={publication} />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <div className="text-sm font-serif text-gray-700">
                    <div>
                      Le type: {publication.type}
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    La spécialitée: {publication.spécialité}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Le repas: {publication.repas}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Bon pour: {publication.bonpour}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Le prix: {publication.prix}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Titre: {publication.titre}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Description: {publication.description}
                  </p>
                </div>
                <p className="text-sm font-serif font-medium text-gray-900">
                  {publication.tunisiaStates}
                </p>
              </div>
              <div>
                <div className="flex justify-center mt-5">
                  <div className="flex items-center ml-2">
                    <Deletepubowner id={publication._id} setPublication={setPublication} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
