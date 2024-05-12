// ImageEdit component
import React from "react";
import axios from "axios";

const ImageEdit = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file) {
      try {
        const cléDePub = localStorage.getItem("publicationKey");
        if (!cléDePub) {
          console.error("Missing 'publicationKey' in local storage");
          return;
        }

        const formData = new FormData();
        formData.append("img", file);
        formData.append("cléDePub", cléDePub); // Change to match API parameter name

        const response = await axios.put("/api1/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Response:", response);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.warn("No file selected.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="fileInput"
        onChange={handleSubmit}
        accept="image/*"
      />
      
    </form>
  );
};

export default ImageEdit;
