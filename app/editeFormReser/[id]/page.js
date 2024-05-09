"use client"
import { useState, useEffect} from 'react';
import Dateinput from "../../components/dateinput";
import {useForm} from "react-hook-form"
import StyledInput2 from "../../components/styledinput2"
import Stylednum from "../../components/stylednum"
import TimePicker from "../../components/styledtime"
import StyledNumber from '../../components/styledNumber';
import { useParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

const Modal = () => {
const {id} = useParams();
const [demandes , setDemande] = useState([]);
const router = useRouter();

  

  
  

   const fetchDemande = async () => {
    try {
        const response = await axios.get(`/api1/demande/${id}`);
        setDemande(response.data.demande);
    } catch (error) {
        console.error("Error fetching demande:", error);
    }
};

useEffect(() => {
    fetchDemande(); 
}, []);

   const {
       register,
       handleSubmit,
       formState: { errors },
       control,
     } = useForm();

     const onSubmit = async (data) => {
       try {
        
         const response = await axios.put(`/api1/demande/${id}`, {
            ...data,
             nom: data.nom,
             email: data.email,
             date: data.date,
             nombre: data.nombre,
             num: data.num,
             heure: data.heure,
             telnum : formatPhoneNumber(data.telnum),
             
           
         });
   
         if (response.status === 200) {
          window.alert("Modification enregistrée avec succès !"); // Display success message
          setTimeout(() => {
            router.push("/clientpage/demande");
          }, 500);
          // Redirect or perform any other actions upon successful update
        } else {
           console.error("Error posting data to server");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };  


      const formatPhoneNumber = (phoneNumber) => {
       if (!phoneNumber.startsWith("+216")) {
           return "+216" + phoneNumber;
       }
       return phoneNumber;
   };

   return (
       <>
       
     
      
         <>
           <div className="fixed bg-gray-100 inset-0 flex justify-center items-center">
             <div className="bg-white rounded-lg shadow-md max-w-md p-6">
             
     
               <div className="border-b font-bold text-black text-center py-2 rounded-t-lg">
 Veuillez réserver votre place
</div>

     
               <div className="mt-4">
                 <form onSubmit={handleSubmit(onSubmit)}>
                   <StyledInput2
                     type="text"
                     label="Nom"
                     name="nom"
                     placeholder="Entrer votre nom "
                     register={register}
                     required={true}
                     pattern={/^[a-zA-Z\s]+$/}
                     message="Only letters are allowed"
                   />
                   <StyledInput2
                     type="text"
                     label="Email"
                     name="email"
                     placeholder="Entrer votre email "
                     register={register}
                     required={true}
                     pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                     message="Only letters are allowed"
                   />
                    <StyledNumber
                      label="Enter Number"
                      name="telnum"
                      placeholder="Enter a number"
                      register={register}
                      required={true}
                      message="This field is required"
                   />
                   
                   
<label className="block text-sm font-medium leading-6 text-gray-900" >
       heures 
     </label>
     <TimePicker 
     control={control}
     required 
      name="heure" />

     <Stylednum
                     label="Durée (en heures)"
                     name="num"
                     register={register}
                     required={true}
                     pattern={/^[a-zA-Z\s]+$/}
                     message="required"
                   /> 

                   <Stylednum
                     label="Nombre de personnes"
                     name="nombre"
                     register={register}
                     required={true}
                     pattern={/^[a-zA-Z\s]+$/}
                     message="required"
                   />

     
                   <Dateinput
                     label="Date de réservation"
                     name="date"
                     register={register}
                     required={true}
                     pattern={/^[a-zA-Z\s]+$/}
                   />
     
                   <button
                   
                   className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
                   >
                     Enregistrer les modifications
                   </button>
                 </form>
               </div>
             </div>
           </div>
         </>
      
     </>
     
   );
};

export default Modal;
