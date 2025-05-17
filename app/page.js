

"use client" 
import Image from "next/image";
import Navbar from "../app/components1/Navbar";
import React, { useEffect } from "react";
import Link from "next/link";
import Temoignages from "../app/components1/Temoignages";
import Footer from "../app/components1/Footer";
import MySlider from "../app/components1/MySlider"
import Aboutus from "../app/components1/Aboutus";



export default function Home() { 
   
     return (
<div>

      
<div>
  <Navbar />

  <div className=" relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.pexels.com/photos/16722267/pexels-photo-16722267/free-photo-of-lumineux-ville-restaurant-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative  flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-semibold font-serif leading-tight mb-4">Votre Guide Ultime Des Bonnes Adresses</h1>
    <Link href="/api/auth/login" class="bg-green-50 border-2 border-green-800  text-green-900 hover:bg-red-60 py-2 px-6 rounded-full text-lg font-semibold font-serif transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Créer votre compte</Link>
  </div>
</div>
</div>


        <div>

            <link
             rel="stylesheet"
           type="text/css"
            charSet="UTF-8"
             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
          <link
            rel="stylesheet"
             type="text/css"
             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
         </div> 

            <div>
              
                   <Aboutus/>
                   <h1 className=" py-10  text-3xl font-semibold font-serif text-center mt-[50px] mb-[50px] underline">
                   Les 6 meilleurs restaurants en Tunisie
                    </h1>
                   <MySlider className="z-1" />  
                   <Temoignages /> 
                    <Footer/> 
                    
     
      





       </div>







 </div>

        
      
  );
}