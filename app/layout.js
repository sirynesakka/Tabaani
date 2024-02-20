"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {AppProps } from "@auth0/nextjs-auth0/client"; 
import { Component } from "react";





export default function mainLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      
        <body> 
        
        <div> {children} </div> 
     </body>
     </UserProvider>
    </html>
  );
}
