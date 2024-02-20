
"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Cadre from "../components2/cadre";
import Temoignages from "../components3/page";
import Footer from "../components4/page";
import MySlider from "../components2/MySlider"
import Aboutus from "../conponent5/page";





const Main = () => {
 

     
   return ( 
        
        
    <div>

    
<div className="h-[100vh] flex justify-center items-center flex-col text-center custom-img">
     <div className="bg-white w-full md:w-[50%] lg:w-[25%] pr-[4px] rounded-[6px] mt-4 md:mt-10 flex flex-col md:flex-row items-center">
     <input type="text" className="bg-white outline-none w-full md:w-3/4 text-black py-3 md:py-4 pl-4 md:pl-6 rounded-full md:rounded-[40px] mb-4 md:mb-0" placeholder="chercher la ville" />
    <button className="bg-black py-2 md:py-3 px-4 md:px-6 text-white rounded-full md:rounded-[12px]">Recherche</button>
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
    )

}
export default Main; 