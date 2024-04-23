'use client'

import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import Modal from "../components/reservationForm";
import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";


const Affichage = () => {
  const [publication, setPublication] = useState();
  
  useEffect(() => {
    fetchPublication();
  }, []);

  const fetchPublication = async () => {
    // Récupérer la clé de la publication à partir du stockage local
    const clé = localStorage.getItem("clickedPublicationId");
    if (clé) {
      try {
        const response = await axios.get(`/api1/client?clé=${clé}`);
        setPublication(response.data.publication);

      } catch (error) {
        console.error("Error fetching publication:", error);
      }
    } console.log(publication)
  };
  return (
    <>
     {publication && (
      <div class="max-w-screen-xl mx-auto">
     
        <div class=" z-0 mt-10">
          <div className="font-bold underline text-2xl">{publication.titre}</div>
          <p className="text-gray-700 text-base mb-4 ">{publication.type}</p>
          <div class="block md:flex md:space-x-2 px-2 lg:p-0">
            <a
              class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
              style={{ height: "24em" }}
              href="#"
            >
              <div
                class="absolute left-0 bottom-0 w-full h-full z-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                class="absolute z-0 left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
            </a>

            <div class="w-full md:w-1/3 relative rounded">Map</div>
          </div>

          <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-8 py-4">
                <div className="font-bold mt-10 px-8  underline text-xl mb-2">
                  Description de l'endroit
                </div>
                <p className="text-gray-700 px-8 text-base">
                {publication.description}
                </p>

                <div className="font-bold mt-10 px-8 underline text-xl mb-2">
                  Review
                </div>
              </div>
              <div className=" px-5 flex items-center">
                <div class="flex justify-center items-center">
                  <div class="flex items-center mt-2 mb-4 px-8">
                    <svg
                      class="mx-1 w-4  h-4 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="mx-1 w-4  h-4 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="mx-1 w-4  h-4 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="mx-1 w-4  h-4 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="mx-1 w-4  h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold underline text-xl mb-2">
                  Les Détailles
                </div>
                <div className=" mt-4 text-gray-700 font-bold text-base">
                  Cuisine
                </div>
                <p className="text-gray-700 text-base">{publication.spécialité}</p>

                <div className="mt-4 text-gray-700 font-bold text-base">
                  Le repas proposé par cet endroit
                </div>
                <p className="text-gray-700 text-base">{publication.repas}</p>
                <div className=" mt-4 text-gray-700 font-bold text-base">
                  La spécialité de cet endroit
                </div>
                <p className="text-gray-700 text-base">{publication.spécialité}</p>
                <div className=" mt-4 text-gray-700 font-bold text-base">
                  Le prix
                </div>
                <p className="text-gray-700 text-base">{publication.prix}</p>
                <div className="mt-4 text-gray-700 font-bold text-base">
                  Cet endroit est bon pour
                </div>
                <p className="text-gray-700 text-base">{publication.bonpour}</p>
              </div>

              <div class="border border-dotted"></div>
              <div className="font-bold  px-6  underline text-xl mb-2">
                Pour plus de détails, veuillez contacter le 58927359
              </div>
            </div> 

            <div class="w-full lg:w-2/3 px-3">
              <div class="mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                  Pour réserver
                </h5>
                <div class="flex z-20 justify-center mt-11">
                  <div class="px-24 ">
                    <Modal />
                  </div>
                </div>
              </div>

              <div class="border border-dotted"></div>
            </div>
          </div>
        </div>

        <div class="max-w-xl py-16 px-8 flex justify-center mx-auto">
          <div class="w-full mt-16 md:mt-0 ">
            <form class="relative  h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 class="mb-6 text-2xl font-medium text-center">
                Ecrire 
              </h3>
              <textarea
                type="text"
                name="comment"
                class="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Ecrire votre commentaire "
                rows="5"
                cols="33"
              ></textarea>
              <button
                type="submit"
                value="Submit comment"
                name="submit"
                class=" text-white px-4 py-3 bg-blue-500  rounded-lg"
              >
                {" "}
                enregistrer
              </button>
            </form>
          </div>
        </div>

        <div class="max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5">
          <p class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0">
            All comments on this post
          </p>

          <div class="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <a href="#" class="flex items-center mt-6 mb-6 mr-6"></a>

            <div>
              <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                By James Amos
              </h3>
              <p class="text-sm font-bold text-gray-300">August 22,2021</p>
              <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Please help with how you did the migrations for the blog
                database fields.I tried mine using exactly what you instructed
                but its not working!!.
              </p>
            </div>
          </div>

          <div class="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <a href="#" class="flex items-center mt-6 mb-6 mr-6"></a>

            <div>
              <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                By James Amos
              </h3>
              <p class="text-sm font-bold text-gray-300">August 22,2021</p>
              <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Especially I dont understand the concepts of multiple
                models.What really is the difference between the blog model and
                blogApp model? Am stuck
              </p>
            </div>
          </div>
        </div>

        <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <Footer />
          
        </footer>
      </div>
        )}
    </>
  );
};
export default Affichage;
