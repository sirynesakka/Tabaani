"use client"

import { Inter } from "next/font/google";
import Dashboard from "./dashboard";



export default function mainLayout({ children }) {
    return (
      <html lang="en">
        
         
          <body>   
          <div> {children} </div> 
       </body>
       
      </html>
    );
  }