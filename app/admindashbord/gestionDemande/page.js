"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteDemPub from "../../components/deleteDemPub";
import Confirmer from "../../confirmationbtn/page";
import DisplayImage from "../../components/DisplayImage";
import { useRouter } from "next/navigation"; // Corrected import
import { useUser } from "@auth0/nextjs-auth0/client";

export default function GesDem() {
  const router = useRouter();
  const [publications, setPublications] = useState([]);
  const { isLoading, user } = useUser();
  const email = user?.email || "";

  const fetchPublications = async () => {
    try {
      const response = await axios.get("/api1/demandeAdmin");
      setPublications(response.data.publications);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []); // Dependency array is empty, so it runs once on component mount

  const checkUserRole = async () => {
    try {
      const params = { email };
      const response = await axios.get("/api1/checkRole", { params });
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
          if (role !== "admin") {
            // Compare role with "admin"
            router.replace("/403"); // Redirect to 403 page if user is not admin
          }
        }
      } catch (error) {
        console.error("Error verifying user role:", error);
      }
    };

    verifyUserRole();
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (event, ownerEmail, clé) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("email", ownerEmail);
    try {
      const response = await axios.put(`/api1/ownerpublications`, { clé });
      if (response.status === 200) {
        fetchPublications(); // Refetch publications after successful confirmation
        alert("Publication confirmée avec succès");
      } else {
        console.error("Erreur lors de la confirmation de la publication.");
        alert("Erreur lors de la confirmation de la publication.");
      }
    } catch (error) {
      console.error("Error confirming publication:", error);
      alert("Erreur, veuillez réessayer");
    }

    try {
      const response = await fetch("/api1/email", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData["message"]);
      alert("Email envoyé avec succès");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Erreur lors de l'envoi de l'email.");
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="ml-6 sm:ml-60 mt-9  text-green-900 text-center text-4xl font-semibold font-serif">
          Les Demandes d'ajout
        </div>

        <div className="ml-6 sm:ml-60 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                  <DisplayImage publication={publication} />
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
                      Description: {publication.description}
                    </p>
                    <p className="mt-1 text-sm font-serif  text-gray-500">
                      OwnerEmail: {publication.ownerEmail}
                    </p>
                  </div>
                  <p className="text-sm font-serif font-medium text-gray-900">
                    {publication.tunisiaStates}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <form
                    onSubmit={(event) =>
                      handleSubmit(
                        event,
                        publication.ownerEmail,
                        publication.clé
                      )
                    }
                  >
                    <button className="font-bold px-6 py-3 leading-none text-blue-900 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green" type="submit">Confirmer</button>
                  </form>
                  <div className="ml-2">
                    <DeleteDemPub
                      ownerEmail={publication.ownerEmail}
                      id={publication._id}
                      setPublication={setPublications}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
