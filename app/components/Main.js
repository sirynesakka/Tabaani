
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
              <div>
                <button className="mt-16 text-white  uppercase py-3 text-sm px-10 border border-red  hover:bg-blue-200 hover:bg-opacity-10">Explorez</button>
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