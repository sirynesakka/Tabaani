import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StyledSelect from "./select";
import StyledInput from "./styledinput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import StyledInput2 from "./styledinput2";

const type = [
  { value: "cafe", label: "Cafe" },
  { value: "restaurant", label: "Restaurant" },
];

const repas = [
  { value: "petit-déjeuner", label: "Petit-déjeuner" },
  { value: "déjeuner", label: "Déjeuner" },
  { value: "brunch", label: "Brunch" },
  { value: "diner", label: "Diner" },
];

const spécialité = [
  { value: "tunisienne", label: "Tunisienne" },
  { value: "asiatique", label: "Asiatique" },
  { value: "fruits de mer", label: "Fruits de mer" },
  { value: "italien", label: "Italien" },
  { value: "pizza", label: "Pizza" },
  { value: "café", label: "Café" },
];
const prix = [
  { value: "Moyenne de gamme", label: "Moyenne de gamme" },
  { value: "pas cher", label: "Pas cher" },
];

const bonpour = [
  { value: "familles", label: "Famille" },
  { value: "enfants", label: "Enfants" },
  { value: "romantique", label: "Romantique" },
];


const Editeform = ({ initialData, onFormClose }) => {
  const router = useRouter();
  const { user } = useUser();
  const { email } = user || {};
  const body = JSON.stringify({ email });

  const { register, handleSubmit, setValue  } = useForm({
    defaultValues: {
      type: "",
      repas: "",
      spécialité: "",
      prix: "",
      bonpour: "",
    ownerEmail: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`/api1/publication/${initialData.id}`, {
        ...data,
        ownerEmail: email,
      });

      if (response.ok) {
        // Redirect after successful update
        router.push("/ownerpage/pubAttente");
        onFormClose();
      } else {
        console.error("Error updating data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Set values for select and input fields
    setValue("type", initialData.type);
    setValue("repas", initialData.repas);
    // Set values for other fields as needed
  }, [initialData, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Select fields */}
        <StyledSelect
          name="type"
          options={type}
          register={register}
          required={true}
        />
        <StyledSelect
          name="repas"
          options={repas}
          register={register}
          required={true}
        />
         <StyledSelect
          name="spécialité"
          options={spécialité }
          register={register}
          required={true}
        />
         <StyledSelect
          name="prix"
          options={prix}
          register={register}
          required={true}
        />
         <StyledSelect
          name="bonpour"
          options={bonpour}
          register={register}
          required={true}
        />

        
        {/* Input fields */}
        <StyledInput2
         
          label="Titre"
          name="titre"
          defaultValue={initialData.titre}
          register={register}
          required={true}
        />
         <StyledInput
   
          label="description"
          name="description"
          defaultValue={initialData.description}
          register={register}
          required={true}
        />
        {/* Other input fields */}

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Editeform ;
