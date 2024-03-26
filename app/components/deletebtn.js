"use client"
import React from "react"
import { useRouter } from "next/navigation";

export default function Deletebtn (id) {
    const router = useRouter();
    
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api1/ajout?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
    return(
        <button onClick={removeTopic}  class="bg-red-400 hover:bg-red-600 text-white font-bold py px-3 rounded-md shadow-md"> Supprimer </button>
    )
}