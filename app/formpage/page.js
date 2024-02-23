import React from "react"; 
import ContactForm from "../formpage/ContactForm"

const FormPage = () => {
    return (
        <div className="p-4 max-w-3xl mx-auto ">
            <h1 className="text-3xl font-bold"> Contact us </h1>
            <p> Please fill in the form below </p> 
            <ContactForm/> 
            
        </div>
    )
} 
export default FormPage ; 