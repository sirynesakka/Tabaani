"use client"
import { useSearchParams } from "next/navigation";




const SearchPage = () => {

    const search = useSearchParams();
     const searchQuery = search ? search.get('q') : null ; 
     const encodeSearchQuery = encodeURI(searchQuery || "");



    console.log("SEARCH PARAMS", encodeSearchQuery);
    
    
    
    return( 
    <div>
        
    </div>

    )

} 
export default SearchPage;