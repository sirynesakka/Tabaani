"use client";
import React , {useState , useEffect} from "react"
import Container from "../components/container"
import EmptyState from "../components/EmptyState"
import axios from "axios";
import ListingCard from "../components/ListingCard"




export default function Pub () {
    const isEmpty = true ;
    const [ajout , setAjout] = useState([]);

    useEffect(() => {
        fetchAjout(); 
    }, []);
    const fetchAjout = async () => {
        try {
            const response = await axios.get("/api1/ajout");
            setAjout(response.data.ajout);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchAjout(); 
    }, []); 


   

    return (
    <div>
          <Container/> 
          <div    className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
            text-center 
          ">  
     {ajout.map(ajout => (
            <ListingCard
            
              key={ajout.id}
              data={ajout}
            />
          ))}

          </div>
    </div>
   
    )
}