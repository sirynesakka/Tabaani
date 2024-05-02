"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Deletebtn from "../../components/deletebtn";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const [publications, setPublication] = useState([]);
  const { user } = useUser();
  const email = user?.email || "";

  const handleEditClick = (publication) => {
    setSelectedPublication(publication);
  };

  const handleFormClose = () => {
    setSelectedPublication(null);
  };

  const fetchPublication = async (email) => {
    try {
      const response = await axios.get(
        `/api1/ownerpublications?ownerEmail=${email}`
      );
      return response.data.publications;
    } catch (error) {
      console.error("Error", error);
      return [];
    }
  };

  useEffect(() => {
    if (email) {
      fetchPublication(email).then((publications) => {
        setPublication(publications);
      });
    }
  }, [email]);

  return (
    <div className="bg-white">
      <div className="ml-6 sm:ml-60 mt-9  text-green-900 text-center text-4xl font-semibold font-serif">
     Publications en attente
      </div>

      <div className="ml-6 sm:ml-60 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {publications.map((publication) => (
            <div key={publication.id} className="group relative">
             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
  <Image
    src="/mahdia.jpg" // Provide the correct path to your image file
    alt="mahdia"
    width={600} // Set both width and height to 600 pixels
    height={600} // Set both width and height to 600 pixels
  />
</div>


              <div className="mt-4 flex justify-between">
                <div>
                  <div className="text-sm font-serif  text-gray-700">
                    <div>
                     Le type: {publication.type}
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    La spécialitée: {publication.spécialité}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Le repas: {publication.repas}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Bon pour: {publication.bonpour}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Le prix: {publication.prix}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Titre:{publication.titre}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                   Description:  {publication.description}
                  </p>
                </div>
                <p className="text-sm font-serif font-medium text-gray-900">
                  {publication.tunisiaStates}
                </p>
             </div>
             <div>
                <div className="flex justify-center mt-5">
                <Link href={`/editeForm/${publication.clé}`} className="font-serif font-semibold px-6 py-3 leading-none text-blue-900 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green">Modifier</Link>

                <div className="flex items-center ml-2">
                  <Deletebtn id={publication._id} setPublication={setPublication} />
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
