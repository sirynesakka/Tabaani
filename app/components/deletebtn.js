import React from "react";
import axios from "axios";


const Deletebtn = ({ id, setPublication }) => {
 
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet publication ?");
    if (confirmDelete) {
      try {
      const response=  await axios.delete(`/api1/publication?id=${id}`);
        console.log("Data Deleted successfully!");
         // Assuming fetchData is a function passed as prop to refetch data
       
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
      className="bg-red-200 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Supprimer
    </button>
  );
};

export default Deletebtn;
