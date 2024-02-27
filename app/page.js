

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

      
       <Navbar/> 
    

    
<div className="h-[100vh] flex justify-center items-center flex-col text-center custom-img">
              <div>
              <Link href="/cities" > 
              <div>
                <button className="mt-16 text-black uppercase py-3 text-sm px-10 border border-blackhover:bg-opacity-10 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-300">Explorez</button>
               </div>
              
              
               </Link>
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