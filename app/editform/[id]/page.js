"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

const category = [
  { value: "client", label: "Cafe" },
  { value: "manager", label: "Restaurant" },
];

const category2 = [
  { value: "client", label: "Petit-déjeuner" },
  { value: "manager", label: "déjeuner" },
  { value: "manager", label: "Brunch" },
  { value: "manager", label: "Diner" },
];

const category3 = [
  { value: "client", label: "Tunisien" },
  { value: "manager", label: "Asiatique" },
  { value: "manager", label: "Fruits de mer " },
  { value: "manager", label: "Italien" },
  { value: "manager", label: "Pizza" },
  { value: "manager", label: "Café" },
];
const category4 = [
  { value: "client", label: "Moyenne de gamme" },
  { value: "manager", label: "Pas cher" },
];
const category5 = [
  { value: "client", label: "Familiale" },
  { value: "manager", label: "Romantique " },
  { value: "manager", label: "Pour enfants " },
];

const EditForm = ({
  id,
  category,
  category2,
  category3,
  category4,
  category5,
}) => {
  const [newCategory, setSelectedCategory] = useState(category);
  const [newCategory2, setSelectedCategory2] = useState(category2);
  const [newCategory3, setSelectedCategory3] = useState(category3);
  const [newCategory4, setSelectedCategory4] = useState(category4);
  const [newCategory5, setSelectedCategory5] = useState(category5);

  const router = useRouter();

  useEffect(() => {
    setSelectedCategory(category);
    setSelectedCategory2(category2);
    setSelectedCategory3(category3);
    setSelectedCategory4(category4);
    setSelectedCategory5(category5);
  }, [category, category2, category3, category4, category5]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api1/ajout/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          category: newCategory,
          category2: newCategory2,
          category3: newCategory3,
          category4: newCategory4,
          category5: newCategory5,
        }),
      });
      if (!res.ok) {
        throw new Error("failed to update");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mt-10 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-gray-700 text-sm font-bold" htmlFor="role">
          Sélectionner le type :
        </label>
        <div className="relative">
          <Select
            options={category}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(category) => setSelectedCategory(category.value)}
            onClick={(e) => setSelectedCategory(e.target.value)}
          />
        </div>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          les repas proposés dans votre établissement :
        </label>
        <div className="relative">
          <Select
            options={category2}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(category2) => setSelectedCategory2(category2.value)}
          />
        </div>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Quelle est la spécialité de votre établissement :
        </label>
        <div className="relative">
          <Select
            options={category3}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(category3) => setSelectedCategory3(category3.value)}
          />
        </div>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Les prix :
        </label>
        <div className="relative">
          <Select
            options={category4}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(category4) => setSelectedCategory4(category4.value)}
          />
        </div>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Bon pour :
        </label>
        <div className="relative">
          <Select
            options={category5}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(category5) => setSelectedCategory5(category5.value)}
          />
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditForm;
