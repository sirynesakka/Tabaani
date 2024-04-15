"use client"
import React from "react";
import Dateinput from "../components/dateinput";
import {useForm} from "react-hook-form"
import StyledInput2 from "../components/styledinput2"
import Stylednum from "../components/stylednum"
import Styledtime from "../components/styledtime";

const ReservationForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        // Handle form submission
    };
       
    return(
     <div>
        <form onSubmit={handleSubmit(onSubmit)} >
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
        type="Email"
          label="Email"
          name="email"
          placeholder="Entrer votre email "
          register={register}
          required={true}
          pattern={/^[a-zA-Z\s]+$/}
          message="Only letters are allowed"
        />
         <Stylednum
          label="Nombre de personne"
          name="num"
          register={register}
          required={true}
          pattern={/^[a-zA-Z\s]+$/}
          message="Only letters are allowed"
        />
          
          <Dateinput 
            label="Date de réservation"
            name="Date"
            register={register}
            required={true}
            pattern={/^[a-zA-Z\s]+$/}
            /> 
          
     
         <button
         onClick={onSubmit}
          
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
        >
          Enregistrer
        </button>


        </form>
     </div>
    )
}
export default ReservationForm;