import React from "react" 
import Image from "next/image"


const Aboutus = () => {
    return ( 
<div> 
            <div className="py-5 relative overflow-hidden bg-white"></div> 
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
               <div className="w-full flex flex-col items-end pr-16">
                  <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
                    <div className="h-full mt-auto overflow-hidden relative">
                    <img src="https://picsum.photos/800/600" className="h-full w-full object-contain" alt=""/>
                    </div>
              </div>
            </div> 

           
                <div className="relative z-20 pl-12">
                    
                    <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Explore</button>
               </div>
         













 </div> 

   


    ); 
}
export default Aboutus; 
