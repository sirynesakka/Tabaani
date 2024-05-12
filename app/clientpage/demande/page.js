'use client'
import * as React from 'react';
import Mesdemandes from '../../components/mesdemande';
import Aside1 from '../../components/aside1';
import Navbar from '../../components1/Navbar';
import Footer from '../../components1/Footer';
import { useUser } from "@auth0/nextjs-auth0/client";
export default function RecipeReviewCard() {
    const { user } = useUser();
    const Clientsemail = user?.email || "";
    localStorage.setItem('Clientsemail', Clientsemail);
    console.log("Client est :   "  , Clientsemail) ; 
    return (
        <>
            <Navbar hasDashboardclient={true} />
            <div className="flex justify-center">
                <Mesdemandes className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3" />
            </div>
            <Footer/>
        </>
    );
}
