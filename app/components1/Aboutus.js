import React from "react" 
import Image from "next/image"


const Aboutus = () => {
    return ( 
<div> 
<div className="relative grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto mt-10 md:mt-60 pb-20 md:pb-0">

              <div className="text-black md:pl-8">
                 <h1 className="text-2xl md:text-4xl leading-7 md:leading-10 font-bold md:w-2/3 mt-8 md:mt-0">Tabaani</h1>
                <p className=" mt-16 text-sm md:text-base leading-6 md:leading-8 font-normal md:w-4/5">
                 Une application web vous fournit des avis sur les restaurants et cafés de toute la Tunisie. Elle vous aide à faire des choix informés pour des sorties culinaires réussies
                 </p>
              
            </div>

  <div className="flex items-center w-full justify-center md:justify-end md:flex-col mt-8 md:mt-[-150px]">
    <div className="  h-full overflow-hidden relative">
      <img src="/ppp.png" className="h-full w-full object-cover rounded-lg shadow-lg" alt="" />
    </div>
  </div>

</div>
               
               
     </div> 

           
          



               
               
               
              
         













 

   


    ); 
}
export default Aboutus; 
