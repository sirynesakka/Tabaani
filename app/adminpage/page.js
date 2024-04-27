"use client" 
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import Temoignages from "../components1/Temoignages";
import Footer from "../components1/Footer";
import MySlider from "../components1/MySlider";
import Aboutus from "../components1/Aboutus";
import Navbar from "../components1/Navbar";


export default function Admin() { 
   
     return (
<div>

      
       <Navbar hasDashboardadmin={true} /> 
    

    
       <div class=" relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://images.pexels.com/photos/16722267/pexels-photo-16722267/free-photo-of-lumineux-ville-restaurant-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative  flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-semibold font-serif leading-tight mb-4">Votre Guide Ultime Des Bonnes Adresses</h1>
    <a href="/clientpage/cities" class="bg-green-50 text-gray-900 hover:bg-green-800 py-2 px-6 rounded-full text-lg font-semibold font-serif transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Explorer</a>
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
                   <h1 className=" py-10  text-3xl font-bold text-center mt-[50px] mb-[50px] underline">
                   Les 6 meilleurs restaurants en Tunisie
                    </h1>
                   <MySlider className="z-1" />  
                   <Temoignages /> 
                    <Footer/> 
                    
 </div>

</div>

        
      
  );
}