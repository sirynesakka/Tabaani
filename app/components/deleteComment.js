import React from "react";
import axios from "axios";


const Deletecomment = ({ id, setComment }) => {
 
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce commentaire ?");
    if (confirmDelete) {
      try {
      const response=  await axios.delete(`/api1/comments?id=${id}`);
        console.log("Data Deleted successfully!");
         // Assuming fetchData is a function passed as prop to refetch data
       
        // Refresh the page
        setComment(response.data.comments);
        console.log(response)
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-gray-500 hover:text-gray-700"
    >
      Supprimer
    </button>
  );
};

export default Deletecomment;
