"use client";
import React , {useState , useEffect} from "react"
import axios from "axios";
import Deletebtn from "../../components/deletebtn"
import Link  from "next/link";





export default function Pub () {
    
    const [publications , setPublication] = useState([]);
  

  
    const fetchPublication = async () => {
        try {
            const response = await axios.get("/api1/publication");
            setPublication(response.data.publications);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchPublication(); 
    }, []); 


   

    return (
        <>
   
    <div className="z-0">
       <div className="pt-8 z-0 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
            {publications.map(publication => (
                <div key={publication.id} className="flex flex-col z-0 gap-2 w-full">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl relative grid grid-cols-1 gap-4 md:ml-60">
                        <div className="absolute bottom-1 left-0 right-0 p-4">
                            <div className="font-semibold z-0 text-lg">{publication.tunisiaStates}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Le type:</span> {publication.type}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Repas:</span> {publication.repas}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Spécialité:</span> {publication.spécialité}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Bon pour:</span> {publication.bonpour}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Prix:</span> {publication.prix}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Titre:</span> {publication.titre}</div>
                            <div className="font-light text-neutral-500"><span className="font-bold">Description:</span> {publication.description}</div>
                           
                            <div className="flex justify-center mt-5">
                                <Link href={`/editForm/${publication._id}`}className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > Modifier</Link>
                               <div className=" flex items-center">
                                <Deletebtn  id={publication._id} setPublication={setPublication} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </div>
        
    </>
    

    
   
    )
}