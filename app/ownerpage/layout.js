"use client"
import '../globals.css'
import { Inter } from "next/font/google";
import  Sidebar from "../components1/Sidebar"


const inter = Inter({subsets:["latin"]}); 

export default function mainLayout({ children }) {
    return (
      <html lang="en">
        <Sidebar/> 
         
          <body className={inter.className}> {children}</body>
       
      </html>
    );
  }