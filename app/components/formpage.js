import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import StyledSelect from "../components/select";
import Model from "../models/model";
import StyledInput from "../components/styledinput";
import axios from "axios";
import ImageUploadForm from "../components/imageUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import StyledInput2 from "./styledinput2";

const type = [
  { value: "cafe", label: "Cafe" },
  { value: "restaurant", label: "Réstaurant" },
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

const Formajouter = ({ onFormClose }) => {
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const notify = () => {
    toast.success("Form submitted successfully.");
  };
  const { user } = useUser();
  const { email } = user || {};
  const body = JSON.stringify({ email });
  
  const confirmation = "x";
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("/api1/cities");
        const citiesData = response.data.cities;
        // Extract city names from citiesData
        const cityNames = citiesData.map(city => city.name);
        setCities(cityNames);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [])


  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      type: { value: "cafe", label: "Cafe" },
      repas: { value: "petit-déjeuner", label: "Petit-déjeuner" },
      spécialité: { value: "tunisienne", label: "Tunisienne" },
      prix: { value: "pas cher", label: "Pas cher" },
      bonpour: { value: "enfants", label: "Enfants" },
    
      ownerEmail: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api1/publication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerEmail: email,
          type: data.type.value,
          repas: data.repas.value,
          spécialité: data.spécialité.value,
          prix: data.prix.value,
          bonpour: data.bonpour.value,
          tunisiaStates: data.cities.value,
          titre: data.titre,
          description: data.description,
          confirmer :confirmation ,
        }),
      });

      if (response.ok) {
        
       
        // Redirect to publication page after 3 seconds
        setTimeout(() => {
          router.push("/ownerpage/publication");
        }, 500);
        onFormClose();
      } else {
        console.error("Error posting data to server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="main-form" >
        <div className=" mb-4 block mb-2 text-sm font-bold text-gray-700 underline ">
          Sélectionner le type de votre établissement:{" "}
        </div>
        <StyledSelect
          name="type"
          control={control}
          options={type}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
        <div className="mb-3 block mb-2 text-sm font-bold text-gray-700 underline">
          Où est situé votre endroit ?{" "}
        </div>
        <StyledSelect
          name="cities"
          control={control}
          options={cities.map(city => ({ value: city, label: city }))}
          required={true}
          message="Sélectionner le repas"
          errors={
            errors.cities && "Sélectionner le champ endroit "
          }
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
        <div className="mb-3 block mb-2 text-sm font-bold text-gray-700 underline">
          Les repas proposées dans votre établissement
        </div>
        <StyledSelect
          name="repas"
          control={control}
          options={repas}
          required={true}
          message="Sélectionner le repas"
          errors={errors.repas && "Sélectionner le champ repas"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />

        <div className="mb-3 block mb-2 text-sm font-bold text-gray-700 underline">
          Quelle est la spécialité de votre établissement?
        </div>
        <StyledSelect
          name="spécialité"
          control={control}
          options={spécialité}
          required={true}
          message="Sélectionner la spécialitée "
          errors={
            errors.spécialité && "Sélectionner le champ spécialitée"
          }
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />

        <div className="mb-3 block mb-2 text-sm font-bold text-gray-700 underline">
          Les prix:{" "}
        </div>
        <StyledSelect
          name="prix"
          control={control}
          options={prix}
          required={true}
          message="Sélectionner le prix"
          errors={errors.prix && "Sélectionner le champ prix"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />

        <div className="mb-3 block mb-2 text-sm font-bold text-gray-700 underline">
          Bon pour:{" "}
        </div>
        <StyledSelect
          name="bonpour"
          control={control}
          options={bonpour}
          required={true}
          message="Sélectionner "
          errors={
            errors.bonpour && "Sélectionner le champs bon pour  "
          }
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />

        <StyledInput2
        type="text"
          label="Titre"
          name="titre"
          placeholder="Entrer le titre "
          register={register}
          required={true}
          pattern={/^[a-zA-Z\s]+$/}
          message="Only letters are allowed"
        />

<StyledInput
  label="Description"
  name="description"
  placeholder="Votre description"
  register={register}
  required={true}
  pattern={/[\s\S]*/} // This pattern allows any character including line breaks
  message="Please enter a valid description"
/>

       <ImageUploadForm />
        <button
          onClick={notify}
          form="main-form"
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
        >
          Enregistrer
        </button>
        <ToastContainer />
        
      </form>
    
    </div>
  );
};

export default Formajouter;
