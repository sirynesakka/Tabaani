"use client";
import React , {useState , useEffect} from "react"
import axios from "axios";
import Image from "next/image";
import DeleteDemPub from "../../components/deleteDemPub"
import Confirmer from "../../confirmationbtn/page"
import DisplayImage from "../../components/DisplayImage";


export default function GesDem () {
    
    const [publications , setPublication] = useState([]);

   
    const fetchPublication = async () => {
        try {
            const response = await axios.get("/api1/demandeAdmin");
            setPublication(response.data.publications);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchPublication(); 
    }, []); 

    async function handleSubmit(event, ownerEmail ,clé ) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Append the ownerEmail to the formData
        formData.append('email', ownerEmail );
        try {
            const response = await axios.put(`/api1/ownerpublications`, { clé });
            if (response.status === 200) {
                // Publication successfully confirmed, update UI accordingly
                // For example, you may want to refetch the publications list
                fetchPublication();
                alert('Publication confirmée avec succès');
            } else {
                // Handle other response statuses if needed
                console.error("Erreur lors de la confirmation de la publication.");
                alert('Erreur lors de la confirmation de la publication.');
            }
        } catch (error) {
            console.error("Error", error);
            alert("Erreur, veuillez réessayer");
        }
        try {
            const response = await fetch('/api1/email', {
                method: 'post',
                body: formData,
            });
    
            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Email envoyé avec succès');
           
        } catch (err) {
            console.error(err);
            alert("Erreur lors de l'envoie de l'email.");
        }
    };
    
   

    return (
        <>
        <div className="bg-white">
      <div className="ml-6 sm:ml-60 mt-9  text-green-900 text-center text-4xl font-semibold font-serif">
        Les Demandes d'ajout 
      </div>

      <div className="ml-6 sm:ml-60 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {publications.map((publication) => (
            <div key={publication.id} className="group relative">
             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
             <DisplayImage publication={publication} />
</div>


              <div className="mt-4 flex justify-between">
                <div>
                  <div className="text-sm font-serif  text-gray-700">
                    <div>
                     Le type: {publication.type}
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    La spécialitée: {publication.spécialité}
                  </p>
                  <p className="mt-1 text-sm font-serif text-gray-500">
                    Le repas: {publication.repas}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Bon pour: {publication.bonpour}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Le prix: {publication.prix}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                    Titre:{publication.titre}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                   Description:  {publication.description}
                  </p>
                  <p className="mt-1 text-sm font-serif  text-gray-500">
                   OwnerEmail:  {publication.ownerEmail}
                  </p>
                </div>
                <p className="text-sm font-serif font-medium text-gray-900">
                  {publication.tunisiaStates}
                </p>
             </div>
             <div className="flex justify-center mt-4">
    <form onSubmit={(event) => handleSubmit(event, publication.ownerEmail , publication.clé)} >
        <button className="font-bold px-6 py-3 leading-none text-blue-900 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green" type="submit">Confirmer</button>
    </form>
    <div className="ml-2"> {/* Added margin to separate the buttons */}
        <DeleteDemPub ownerEmail={publication.ownerEmail}id={publication._id} setPublication={setPublication} />
    </div>
</div>
         </div>
          ))}
        </div>
      </div>
    </div> 
    </>
    

    
   
    )
}