"use client"
import Modal from "../models/modal"
import useRentModal from "../hooks/userentmodal";
import { useMemo, useState } from "react";
import Heading from "../components/heading"
import {categories}  from "../components/category"
import {categories2}  from "../components/category2"
import CategoryInput from "../components/categoryInput"
import {useForm} from "react-hook-form"
import CountrySelect from "../components/countryselect"



const STEPS ={
    CATEGORY : 0,
    LOCATION : 1,
    INFO : 2,
    IMAGES :3,
    DESCRIPTION : 4,
    PRICE : 5,
}
const Rentmodal = () => {
    const rentmodal = useRentModal(); 
     const [step, setStep] = useState(STEPS.CATEGORY);

     const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
      reset
    } = useForm({
      defaultValues: {
        category: "",
        location: null,
        guestCount: 1,
        roomCount: 1,
        bathroomCount: 1,
        imageSrc: "",
        price: 1,
        title: "",
        description: ""
      }
    })


    const category = watch('category');
    const location = watch('location');



    const setCustomValue = (id, value) => {
      setValue(id, value, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true
      })
    }

    const onBack = () => {
        setStep((value) => value - 1);
      }
    
      const onNext = () => {
        setStep((value) => value + 1);
      }
      const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
          return 'Create'
        }
        return 'Next'
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
          return undefined
        }
    
        return 'Back'
      }, [step]);



      let bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Ajouter une place "
            subtitle="Sélectionnez une catégorie."
          />
            <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      > 
       {categories.map((item) => (
          <div key={item.label} className="col-span-1">
             <CategoryInput
              onClick={(category) => 
              setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
           
          </div>
        ))}
       
      </div>
       
          </div> 
      
      )
      if (step === STEPS.LOCATION) {
        bodyContent = (
          <div className="flex flex-col gap-8">
          <Heading
            title="Où est situé votre endroit ?"
            subtitle="Aidez les invités à vous trouver !"
          /> 
          <CountrySelect 
          value={location} 
          onChange={(value) => setCustomValue('location', value)} />
       
           
          
            
           
          </div>
        )
      }




      if (step === STEPS.INFO) {
        bodyContent = (
          <div  className="flex flex-col gap-8">
              <Heading
          title="Indiquez quelques informations de base sur votre endroit"
          subtitle="Quels équipements proposez-vous ?"
          subtitle2="Les repas proposés dans votre établissement"
        /> 
        {categories2.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
              setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
             
           
          </div>
        ))} 
         
           
             
         
         

        
        
        
        
        </div>

     

        

        )

      }



    return (
        

        <Modal 
        isOpen={rentmodal.isOpen}
        title="Bienvenue ! "
        actionLabel="submit"
        secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        onSubmit={onNext}
        onClose={rentmodal.onClose}
        body={bodyContent} />



        
    )
} 
export default Rentmodal;