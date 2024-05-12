'use client'
import React from "react";
import Navbar from "../../components1/Navbar";
import Card from "../cities/Card"; 
import Footer from "../../components1/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
const Cities  = () => {
    const { user } = useUser();
  
  const Clientemail = user?.email || "";
  localStorage.setItem('Clientemail', Clientemail);
  console.log("Clientemail est :   "  , Clientemail) ; 
    return ( 
        <div>
          <Navbar hasDashboardclient={true} /> 
           <Card/> 
           <Footer/> 

        </div>

    )
} 
export default Cities; 