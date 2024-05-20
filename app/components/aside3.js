'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import DisplayImage from "../components/DisplayImage";
import StarRating from "./starRating"

const Aside3 = ({ options }) => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [clickedImageAlt, setClickedImageAlt] = useState(localStorage.getItem("clickedImageAlt"));

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                console.log("Fetching data...");
                const params = { ...options, tunisiaStates: clickedImageAlt }; // Combine options and clickedImageAlt
                const response = await axios.get('/api1/get', { params });
                console.log("Data fetched successfully:", response.data);
                setPublications(response.data.publications);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [options, clickedImageAlt]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const handlePublicationClick = (clé) => {
        localStorage.setItem("clickedClédepub", clé);
        console.log(clé);
    };

    return (
        <>
       <div className="flex justify-center items-center ">
    <div className="max-w-lg mx-auto text-4xl  uppercase text-center  font-semibold font-serif "> {/* Centrer le contenu à l'intérieur d'un conteneur max-w-lg et le placer au centre de la page */}
    Les trois meilleurs cafés et restaurants dans cette ville {/* Contenu à centrer */}
    </div>
</div>
        <div class="flex flex-wrap ">
        {publications.map(publication => ( 
        <div class="max-w-2xl mx-auto mt-24">
    <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
 
        <div class="relative flex-shrink-0 w-24 h-28">
       
        <DisplayImage publication={publication} class="w-full h-full object-cover object-center"  />
        </div>
        

        <div class=" flex-grow gap-2 py-2">

            <p class="text-xl font-bold">{publication.titre}</p>

            <p class="text-gray-500">
            {publication.type}
            </p>
            <StarRating rating={publication.rating} />
          
            

        </div>

    </div>

</div>
    ))}
    </div>


         <div className="border-b-4 py-4"></div>
            {publications.map(publication => (
                <div key={publication.clé} className="inline-block py-4 mx-4" onClick={() => handlePublicationClick(publication.clé)}>
                    <Link href="/clientpage/affichage" key={publication.clé}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <DisplayImage publication={publication} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl">{publication.titre}</div>
                                <p className="text-gray-700 text-base mb-4 ">{publication.type}</p>
                                <p className="text-gray-700 text-base">{publication.description}</p>
                            </div>
                            <div className="px-6 py-4">
                            <StarRating rating={publication.rating} />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Aside3;
