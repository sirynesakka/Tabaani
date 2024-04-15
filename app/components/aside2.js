import React from "react";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Aside2 = () => {
  return (
    <div className="h-screen py-1 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
    <h2 className=" border-b px-3 text-lg font-bold text-gray-800 dark:text-white">
      Filtres :
    </h2>
  
    <div className="px-3 py-6 flex flex-wrap">
      <div className="mr-8 mb-4">
        <div className="font-bold underline">le type :</div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2">Café</div>
          
        </div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2 ">Réstaurant</div>
        </div>
      </div>
     </div>

  <div className="border-b"></div>

  <div className="px-3  py-6 flex flex-wrap">
      <div className="mr-8 mb-4">
        <div className="font-bold underline">Repas :</div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2">Petit-déjeuner</div>
        </div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2 ">Brunch</div>
          
        </div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2 ">Déjeuner</div>
        
        </div>
        <div className="px-6 flex flex-row items-center">
        <Checkbox {...label} />
          <div className="mr-2 ">Diner</div>
         
        </div>
      </div>
     </div>

     <div className="border-b"></div>

<div className="px-3  py-6  flex flex-wrap">
    <div className="mr-8 mb-4">
      <div className="font-bold underline">Spécialité :</div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2">Tunisienne</div>
      
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Asiatique</div>
        
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Fruits de mer</div>
      
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Italien</div>
        
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Pizza</div>
       
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Café</div>
       
      </div>
    </div>
   </div>

   <div className="border-b"></div>

<div className="px-3  py-6  flex flex-wrap">
    <div className="mr-8 mb-4">
      <div className="font-bold underline">Bonpour :</div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2">Famille</div>
      
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Enfants</div>
       
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Romantique</div>
      
      </div>
    </div>
   </div>


   <div className="border-b"></div>

<div className="px-3  py-6  flex flex-wrap">
    <div className="mr-8 mb-4">
      <div className="font-bold underline">Prix :</div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2">Moyenne de gamme</div>
       
      </div>
      <div className="px-6 flex flex-row items-center">
      <Checkbox {...label} />
        <div className="mr-2 ">Pas cher</div>
        
      </div>
     
    </div>
   </div>


  </div>
  
  );
};

export default Aside2;
