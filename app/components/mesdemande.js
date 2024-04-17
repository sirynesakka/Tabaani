import React, {useState, useEffect}from "react";
import axios from "axios";

const Mesdemandes = () => {

    const [demandes , setDemande] = useState([]);
  

  
    const fetchDemande = async () => {
        try {
            const response = await axios.get("/api1/demande");
            setDemande(response.data.demandes);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchDemande(); 
    }, []); 

    return(
        <div>  <h1
        class="mt-0  text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-slate-400 to-stone-500">
        Mes Demandes
    </h1>
      <div className="flex justify-center">
       
<table class="border-collapse w-full max-w-screen-lg">
    <thead>
   
        <tr>
           
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nom</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Heures</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Durée</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nombre de personnes</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
        </tr>
    </thead>
    <tbody>
    {demandes.map(demande=>(
              <tr key={demande.id} class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">name</span>
                  {demande.nom}
              </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">email</span>
                  <span class="rounded bg-blue-400 py-1 px-3 text-xs font-bold">{demande.email}</span>
                </td>
              <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">heures</span>
                  <span class="rounded bg-grey-400 py-1 px-3 text-xs font-bold">{demande.heure}</span>
              </td>
              <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">durée</span>
                  <span class="rounded bg-grey-400 py-1 px-3 text-xs font-bold">{demande.num}</span>
              </td>
              <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nombre de personnes</span>
                  <span class="rounded bg-grey-400 py-1 px-3 text-xs font-bold">{demande.nombre}</span>
              </td>
              <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">date</span>
                  <span class="rounded bg-grey-400 py-1 px-3 text-xs font-bold">{demande.date}</span>
              </td>
          </tr>
        ))}
      
        
    </tbody>
</table>
</div>
</div>

    )
};
export default Mesdemandes;