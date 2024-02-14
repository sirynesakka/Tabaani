"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";





const Searchinput = () => { 
     const [searchQuery , setSearchQuery] = useState("");
     const router = useRouter(); 

     
     const onSearch = (event, ReactFormEvent) => {
        event.preventDefault();  

        const enccodeSearchQuery = encodeURI(searchQuery);
        router.push('/search?q=${encodeSearchQuery}');

    
     }

    return(
        <div className="flex items-center text-center  max-w-md mx-auto mb-2 mt-40">
        <form  onSubmit={onSearch}>
        <input 
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-one mb-4 " 
        placeholder="what are you looking for "/> 
        </form>
        </div>
    )

} 
export default Searchinput; 