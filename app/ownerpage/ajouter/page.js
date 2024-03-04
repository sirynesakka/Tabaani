"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";


const Ajouterplace = () => {
 
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [qName, setqName] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Non du manager: ", fName);
    console.log("Nom: ", lName);
    console.log("Quelle est votre type : ", qName);
    console.log("message ", message); 


    const res = await fetch("/api1/ajouter", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fName,
        lName,
        qName,
        message,
      }),
    });
   
    const { msg, success } = await res.json();
    setError(msg);
     setSuccess(success);

  if (success) {
    setfName("");
    setlName("");
    setmessage("");
  }
 } ;  

return (

      
      
   <div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">


    <form  onSubmit={handleSubmit}>
      <div class="-mx-3 flex flex-wrap">



        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]" >
              Nom du manager 
            </label>
            <input onChange={(e) => setfName(e.target.value)}
              value={fName}
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>




        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]">
              Nom 
            </label>
            <input  onChange={(e) => setlName(e.target.value)}
              value={lName}
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
          </div>
        </div>
        

      


        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]">
              Quelle est votre type :  
            </label>
            <input  onChange={(e) => setqName(e.target.value)}
              value={qName}
              type="text"
              name="lName"
              id="qName"
              placeholder="type"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "/>
          </div>
        </div>

</div>
 

<div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]">
              message  
            </label>
            <textarea  onChange={(e) => setmessage(e.target.value)}
              value={message}
              type="text"
              name="lName"
              id="message"
              placeholder="..."
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
          </div>
        </div>
  

     

      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>

      
    </form> 

    <div>
    <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e , index) => (
            <div key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div> 
      </div>


  </div>
</div>

    )
} 
export default Ajouterplace;