import React from "react";
import axios from "axios";

const Deletebtn = ({ id, fetchData }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api1/ajout?id=${id}`);
      console.log("Data Deleted successfully!");
      fetchData(); // Assuming fetchData is a function passed as prop to refetch data
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-400 hover:bg-red-500 text-white font-bold py- px-3 focus:outline-none focus:shadow-outline"
    >
      Supprimer
    </button>
  );
};

export default Deletebtn;
