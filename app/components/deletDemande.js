import React from "react";
import axios from "axios";


const DeleteDemande = ({ id, setDemande,email }) => {
 
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet demande ?");
    if (confirmDelete) {
      try {
      const response=  await axios.delete(`/api1/demande?id=${id}`);
        console.log("Data Deleted successfully!");
       
        const formData = new FormData();
        formData.append('email', email);
  
        const emailResponse = await axios.post("/api1/emailowner", formData);
  
        // Assuming the response contains JSON data
        const emailData = await emailResponse.data;
        console.log(emailData.message);
  
        // If you want to update the UI after deletion, you might need to refetch the data
        // Assuming fetchData is a function passed as prop to refetch data
       
        // Refresh the page
        setDemande(response.data.demandes);
        console.log(response)
      } catch (error) {
        console.error("Error deleting:", error) ;
      }
    }
  };
 

  
  return (
    <button
      onClick={handleDelete}
      className="font-bold px-3 py-2 leading-none text-black-200 border border-red-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-red-500 from-white-900 to-red"
    >
      Annuler
    </button>
  );
};

export default DeleteDemande;
