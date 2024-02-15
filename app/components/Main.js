
"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Searchinput from "./Searchinput";
import MySlider from "../components2/MySlider"
import Cadre from "../components2/cadre";






const Main = () => {
 

     
   return ( 
        
        
    <div>

    
             <div className="h-[100vh] flex justify-center items-center flex-col text-center custom-img">
                 <Searchinput/>
                 
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
                <h1 className="text-3xl font-bold text-center mt-[50px] mb-[50px] underline">
                    Top 6 Restaurants in Tunisia 
                    </h1>
                   
                    <MySlider/> 
                    
                    
                    

                    
            </div>

             
            
           

            
          
              
    </div> 
    )

}
export default Main; 