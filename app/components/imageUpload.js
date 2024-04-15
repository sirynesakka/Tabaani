
import React from "react";
import  axios from "axios";

const ImageUploadForm = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const file = event.target.files[0];
let formData = new FormData()
formData.append("img",file);
  console.log(file);
      if (file) {

      }

      try {
        const response = await axios.post(
          "/api1/image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    
  

  
    return (
        <input type="file" name="fileInput" onChange={handleSubmit} accept="image/*" />
    );
  };
  
  export default ImageUploadForm;