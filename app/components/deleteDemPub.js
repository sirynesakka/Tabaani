import React from "react";
import axios from "axios";


const DeleteDemPub = ({ id, setPublication,ownerEmail }) => {
 
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet publication ?");
    if (confirmDelete) {
      try {
      const response=  await axios.delete(`/api1/demandeAdmin?id=${id}`);
        console.log("Data Deleted successfully!");
         // Assuming fetchData is a function passed as prop to refetch data
         const formData = new FormData();
        formData.append('ownerEmail', ownerEmail);

        const emailResponse = await axios.post("/api1/emailDeleteAdmin", formData);
        
        // Assuming the response contains JSON data
        const emailData = await emailResponse.data;
        console.log(emailData.message);
        alert('Email envoyé avec succès');
        // Refresh the page
        setPublication(response.data.publications);
        console.log(response)
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="font-serif font-semibold px-6 py-3 leading-none text-blue-900 border border-red-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-red-500 from-white-900 to-red"
    >
      Supprimer
    </button>
  );
};

export default DeleteDemPub;
