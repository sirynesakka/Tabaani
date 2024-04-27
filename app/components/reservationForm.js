 "use client"
 import { useState } from 'react';
 import Dateinput from "./dateinput";
import {useForm} from "react-hook-form"
import StyledInput2 from "./styledinput2"
import Stylednum from "./stylednum"
import TimePicker from "./styledtime"
import StyledNumber from './styledNumber';



const Modal = () => {
  
const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
    };

    const closeModal = () => {
        setModalOpen(false);
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
      } = useForm({defaultValues: {
        nom: "",
        email:"",
        telnum:"",
        date: new Date() ,
        nombre:0,
        num:0,
        heure:"",

      }});

      const onSubmit = async (data) => {
        try {
         
          const response = await fetch("/api1/demande", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nom: data.nom,
              email: data.email,
              date: data.date,
              nombre: data.nombre,
              num: data.num,
              heure: data.heure,
              telnum : formatPhoneNumber(data.telnum),
              
            }),
          });
    
          if (response.ok) {
            
           
            // Redirect to publication page after 3 seconds
            window.location.href = '/clientpage/demande';
            
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
        <button
          className="bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-800 transition"
          onClick={openModal}
        >
          Réservation
        </button>
      
        {modalOpen && (
          <>
            <div className="fixed bg-gray-100 inset-0 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-md max-w-md p-6">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full p-2 absolute top-2 right-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
      
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
                      Enregistrer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </>
      
    );
};

export default Modal;
