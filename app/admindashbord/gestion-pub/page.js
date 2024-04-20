"use client";
import React , {useState , useEffect} from "react"
import axios from "axios";
import Deletebtn from "../../components/deletebtn"
import Confirmer from "../../confirmationbtn/page"


export default function GesPub () {
    
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
                alert('Publication successfully confirmed');
            } else {
                // Handle other response statuses if needed
                console.error("Error confirming publication");
                alert('Error confirming publication');
            }
        } catch (error) {
            console.error("Error", error);
            alert("Error, please try again");
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
    
            alert('Message successfully sent');
           
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };
    
   

    return (
        <>
        <div className="pt-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
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
                            <div className="font-light text-neutral-500"><span className="font-bold">Owner Email:</span> {publication.ownerEmail}</div>
<div className="flex justify-center ml-6">
   
    <form onSubmit={(event) => handleSubmit(event, publication.ownerEmail , publication.clé)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-1 rounded " type="submit">Confirmer</button>
    </form>
    <div className=" flex items-center "> {/* Added margin to separate the buttons */}
        <Deletebtn id={publication._id} setPublication={setPublication} />
    </div>
</div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    

    
   
    )
}