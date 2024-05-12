"use client"
import React, { useState } from "react";
import axios from "axios";

const DeletePubCon = ({ id, setPublication, ownerEmail }) => {
  const [deleteReason, setDeleteReason] = useState(""); // State to store delete reason

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette publication ?");
    if (confirmDelete) {
      const reason = prompt("Veuillez saisir la raison de la suppression :"); // Prompt for delete reason
      if (reason !== null) { // If user doesn't cancel the prompt
        setDeleteReason(reason); // Set the delete reason in state
        try {
          const response = await axios.delete(`/api1/publication?id=${id}`);
          console.log("Data Deleted successfully!");

          // Send email with delete reason
          const formData = new FormData();
          formData.append('ownerEmail', ownerEmail);
          formData.append('deleteReason', reason); // Append delete reason to form data

          const emailResponse = await axios.post("/api1/emailDeletePubCon", formData);

          // Assuming the response contains JSON data
          const emailData = await emailResponse.data;
          console.log(emailData.message);
          alert('Email envoyé avec succès');
          // Refresh the page
          setPublication(response.data.publications);
          console.log(response);
        } catch (error) {
          console.error("Error deleting:", error);
        }
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

export default DeletePubCon;
