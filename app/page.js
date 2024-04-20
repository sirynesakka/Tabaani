

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

  <div className="min-h-screen flex justify-center items-center text-center relative">
  <Image 
    src="/pp.png"
    alt="logo" 
    layout="fill"
    objectFit="cover"
  />
  <div className="absolute top-1/ left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
    <p className="text-4xl font-bold">Découvrez, Savourez:</p>
    <p className="text-2xl">Votre Guide Ultime Des Bonnes Adresses</p>
  </div>
  {/* Your other content here */}
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