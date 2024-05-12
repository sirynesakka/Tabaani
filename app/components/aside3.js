'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { MdFavorite } from "react-icons/md";
import DisplayImage from "../components/DisplayImage";

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
            {publications.map(publication => (
                <div key={publication.clé} className="inline-block mx-2" onClick={() => handlePublicationClick(publication.clé)}>
                    <Link href="/clientpage/affichage" key={publication.clé}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <DisplayImage publication={publication} />
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
};

export default Aside3;
