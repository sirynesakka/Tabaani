import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main"

import SearchPage from "./search/page";
import Searchinput from "./components/Searchinput";

export default function Home() {
  return (
    <div >
       <h1></h1>
       <Navbar/> 
       <Main/> 
       <SearchPage/>
       
          
        </div> 
        
      
  );
}