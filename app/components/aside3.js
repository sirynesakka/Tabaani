'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { MdFavorite } from "react-icons/md";

export default function Aside3() {
    const [publications, setPublications] = useState([]);
    const [alt, setAlt] = useState(""); // State to store the alt value

    useEffect(() => {
        fetchPublicationsAndSetAlt();
    }, []);

    const fetchPublicationsAndSetAlt = async () => {
        try {
            const clickedImageAlt = localStorage.getItem("clickedImageAlt");
            setAlt(clickedImageAlt);
            const response = await axios.get(`/api1/localisation?tunisiaStates=${clickedImageAlt}`); // Replace "/your-api-endpoint" with your actual API endpoint
            setPublications(response.data.publications);
        } catch (error) {
            console.error("Error fetching publications:", error);
        }
    };

    const handlePublicationClick = (clé) => {
        // Store the clicked publication clé in localStorage
        localStorage.setItem("clickedPublicationId", clé);
        console.log("Clicked Publication clé:", clé); // Log the clicked publication ID to console
    };

    return (
        <>
            {publications.map(publication => (
                <div key={publication.clé} className="inline-block mx-2">
                    <Link href="/affichage" key={publication.clé}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handlePublicationClick(publication.clé)}>
                            <img className="w-full" src="/djerba.jpg" alt="Paella dish" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl">{publication.titre}</div>
                                <p className="text-gray-700 text-base mb-4 ">{publication.type}</p>
                                <p className="text-gray-700 text-base">{publication.description}</p>
                            </div>
                            <div className="px-6 py-4">
                                <MdFavorite />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}
