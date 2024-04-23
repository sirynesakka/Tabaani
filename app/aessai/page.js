"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Deletebtn from "../components/deletebtn"
import { useUser } from "@auth0/nextjs-auth0/client";

const Aessai = () => {
    const [publications, setPublication] = useState([]);
    const { user } = useUser();
    const email = user?.email || "";

    const fetchPublication = async (email) => {
        try {
            const response = await axios.get(`/api1/ownerpublications?ownerEmail=${email}`);
            return response.data.publications;
        } catch (error) {
            console.error("Error", error);
            return [];
        }
    };

    useEffect(() => {
        if (email) {
            fetchPublication(email)
                .then(publications => {
                    setPublication(publications);
                });
        }
    }, [email]);

    return (
        <>
            {publications.map(publication => (
                <div key={publication.id} className="w-full ml-60 mt-5 bg-gray-100 px-5 py-5 text-left text-gray-800 break-words max-w-md rounded inline-block">
                    <div className="mx-auto text-xl font-semibold">
                        <strong>{publication.tunisiaStates}</strong>
                        <ul className="mt-2 list-disc px-2 pl-6">
                            <li>
                                <a className="block px-2 py-1 rounded">Le type : {publication.type}</a>
                            </li>
                            <li>
                                <a className="block px-2 py-1 rounded"> {publication.repas}</a>
                            </li>
                            <li>
                                <a className="block px-2 py-1 rounded"> {publication.spécialité}</a>
                            </li>
                            <li>
                                <a className="block px-2 py-1 rounded"> {publication.bonpour}</a>
                            </li>
                            <li>
                                <a className="block px-2 py-1 rounded"> {publication.titre}</a>
                            </li>
                            <li>
                                <a className="block px-2 py-1 rounded"> {publication.description}</a>
                            </li>
                            <div className="flex justify-center mt-5">
                                <Link href={`/editForm/${publication._id}`} className="font-bold px-6 py-3 leading-none text-blue-900 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green"> Modifier</Link>
                                <div className="flex items-center ml-2">
                                    <Deletebtn id={publication._id} setPublication={setPublication} />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
    
};

export default Aessai;
