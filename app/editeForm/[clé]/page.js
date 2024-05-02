"use client"
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "../../components/styledselect";
import StyledInput from "../../components/styledinput";
import axios from "axios";
import ImageUploadForm from "../../components/imageUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import StyledInput2 from "../../components/styledinput2";
import CostumSelect from "../../components/select";


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

export default function Editeform({ onFormClose })  {
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [publications , setPublication] = useState([]);
  
   
  

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

  const fetchPublication = async (email) => {
    try {
      const response = await axios.get(
        `/api1/ownerpublications?ownerEmail=${email}`
      );
      console.log("API Response Data:", response.data);
      return response.data.publications;
    } catch (error) {
      console.error("Error", error);
      return [];
    }
  };

  useEffect(() => {
    if (email) {
      fetchPublication(email).then((publications) => {
        setPublication(publications);
      });
    }
  }, [email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
 
} = useForm({
  defaultValues: {
    type: publications.type, // Access type property of publications, or set to empty string if undefined
    repas: publications.repas,
    spécialité: publications.spécialité,
    prix: publications.prix,
    bonpour: publications.bonpour,
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
 

  return (
    <div>
        
        <form onSubmit={handleSubmit(onSubmit)} id="main-form" >
      <div class=" mb-6 underline text-center  font-bold font-custom">Veuillez entrer votre établissement</div>

        <div className=" mb-2 block mb-2 text-sm font-bold text-gray-700 underline ">
          Sélectionner le type de votre établissement:{" "}
        </div>
        <CostumSelect  
           name="type"
          control={control}
          options={type}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
      

        <div className="mb-2 block mb-2 text-sm font-bold text-gray-700 underline">
          Où est situé votre endroit ?{" "}
        </div>
        <CostumSelect  
           name="cities"
          control={control}
          options={cities.map(city => ({ value: city, label: city }))}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
       
        <div className="mb-2 block mb-2 text-sm font-bold text-gray-700 underline">
          Les repas proposées dans votre établissement
        </div>
        <CostumSelect  
           name="repas"
          control={control}
          options={repas}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
 
        <div className="mb-2 block mb-2 text-sm font-bold text-gray-700 underline">
          Quelle est la spécialité de votre établissement?
        </div>
        <CostumSelect  
           name="spécialité"
          control={control}
          options={spécialité}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
    

        <div className="mb-2 block mb-2 text-sm font-bold text-gray-700 underline">
          Les prix:{" "}
        </div>
        <CostumSelect  
           name="prix"
          control={control}
          options={prix}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
       
        <div className="mb-2 block mb-2 text-sm font-bold text-gray-700 underline">
          Bon pour:{" "}
        </div>
        <CostumSelect  
           name="bonpour"
          control={control}
          options={bonpour}
          required={true}
          message="Sélectionner le type"
          errors={errors.type && "Sélectionner le champ type"}
          className="block w-full px-4 py-2 pr-8 mt-1 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-400"
        />
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
         <StyledInput
  label="Description"
  name="description"
  placeholder="Votre description"
  register={register}
  required={true}
  pattern={/[\s\S]*/} // This pattern allows any character including line breaks
  message="Please enter a valid description"
/>
</div>
  



    <div className="mb-4">
       <ImageUploadForm />
       </div>
        <button
          onClick={notify}
          form="main-form"
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
        >
          Enregistrer les modifications
        </button>
        <ToastContainer />
        
      </form>
     
    </div>
  );
};


