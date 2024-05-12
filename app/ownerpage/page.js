'use client'
import React from "react";
import Head from 'next/head';
import { useUser } from "@auth0/nextjs-auth0/client";
const Ownerpage = () => {
const { user } = useUser();
  
  const Owneremail = user?.email || "";
  localStorage.setItem('Demandes', Owneremail);
    return (
        <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <Head>
                <style>{`
                    .purple_border {
                        box-shadow: 2px 2px 1px rgb(100, 30, 100);
                    }
                `}</style>
            </Head>
            <div className="mb-5 mt-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <div className="purple_border font-serif font-semibold text-center p-6 border border-black">
                    <p className="mb-3"> Bienvenue dans votre espace Manager ! </p>
                    <p className="mb-3">Un lieu conçu pour vous permettre de gérer efficacement vos tâches et vos responsabilités</p>
                    <p> Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                </div>
            </div>
        </div>
    );
};

export default Ownerpage;
