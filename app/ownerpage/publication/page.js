"use client";
import React , {useState , useEffect} from "react"
import axios from "axios";
import Deletebtn from "../../components/deletebtn"
import Link  from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";





export default function Pub () {
    
    const [publications , setPublication] = useState([]);
    const { user } = useUser();
    const email = user?.email || ""; // Treat email as a string, default to empty string if user is null or email is undefined

    const fetchPublication = async (email) => {
        try {
            const response = await axios.get(`/api1/ownerpublications?ownerEmail=${email}`); // Replace "/your-api-endpoint" with your actual API endpoint
             return response.data.publications;
        } catch (error) {
            console.error("Error", error);
            return []; // Return an empty array in case of an error
        }
    }

    useEffect(() => {
        if (email) {
            fetchPublication(email)
                .then(publications => {
                    setPublication(publications);
                });
        }
    }, [email]); // Trigger useEffect whenever email changes


   

    return (
        <>
   
    <div>
       <div className="pt-8  pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
            {publications.map(publication => (
                <div key={publication.id} className="flex flex-col gap-2 w-full ">
                    <div className="aspect-square w-full relative overflow-auto rounded-xl relative grid grid-cols-1 gap-4 md:ml-60 ">
                        <div className="absolute bottom-1 left-6 right-6 ">
                            <div className="font-semibold z-0 text-blue-900 text-lg">{publication.tunisiaStates}</div>
                            <div className="font-light text-blue-900"><span className="font-bold ">Le type:</span> {publication.type}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Repas:</span> {publication.repas}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Spécialité:</span> {publication.spécialité}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Bon pour:</span> {publication.bonpour}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Prix:</span> {publication.prix}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Titre:</span>  {publication.titre}</div>
                            <div className="font-light text-blue-900"><span className="font-bold">Description:</span>  {publication.description}</div>
                           
                            <div className="flex justify-center mt-5">
                                <Link href={`/editForm/${publication._id}`}className="font-bold px-6 py-3 leading-none text-blue-900 border border-green-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-green-500 from-white-900 to-green" > Modifier</Link>
                               <div className=" flex items-center ml-2">
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