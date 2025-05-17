
import React , {useEffect}from "react";
import  axios from "axios";
import { v4 as uuidv4 } from 'uuid';


const ImageUploadForm = () => {
 
   
  
   
    const handleSubmit = async (event) => {
      event.preventDefault();
      const file = event.target.files[0];


  console.log(file);
      if (file) {

      }

      try {
        let formData = new FormData()
        const clé = uuidv4();
        formData.append("img",file);
        formData.append("clé", clé);
        localStorage.removeItem('cléDePub');

        // Set the new value of 'cléDePub' in local storage
        localStorage.setItem('cléDePub', clé);
        const response = await axios.post(
          "/api1/image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        console.log(clé);
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