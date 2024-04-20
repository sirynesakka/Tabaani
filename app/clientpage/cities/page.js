import React from "react";
import Navbar from "../../components1/Navbar";
import Card from "../cities/Card"; 
import Footer from "../../components1/Footer";

const Cities  = () => {
    return ( 
        <div>
          <Navbar hasDashboardclient={true} /> 
           <Card/> 
           <Footer/> 

        </div>

    )
} 
export default Cities; 