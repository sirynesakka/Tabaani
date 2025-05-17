"use client"
import React, { useState } from "react";
import Model from "../components/model";
import Formajouter from "../components/formpage";

const Ajoutbtn = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  return (
    <>
       <div className=" z-10 flex justify-center items-center ">
      <div className="w-full sm:w-auto">
        <button
          onClick={openModel}
          className="bg-gray-900 text-white inline-flex items-center rounded-md py-2 px-4 text-sm font-medium sm:py-3 sm:px-6 lg:text-lg"
          aria-current="page"
        >
          Ajouter publication
        </button>
        <Model isOpen={isModelOpen} onClose={closeModel}>
          <Formajouter onFormClose={closeModel} />
        </Model>
      </div>
    </div>
    </>
  );
};

export default Ajoutbtn;
