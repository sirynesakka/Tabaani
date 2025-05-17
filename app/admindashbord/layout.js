"use client"
import '../globals.css'
import { Inter } from "next/font/google";
import  Sidebaradmin from "../components1/Sidebaradmin"


const inter = Inter({subsets:["latin"]}); 

export default function mainLayout({ children }) {
    return (
      <html lang="en">
        <Sidebaradmin /> 
         
          <body className={inter.className}> {children}</body>
       
      </html>
    );
  }