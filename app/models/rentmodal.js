"use client";
import Modal from "../models/modal";
import useRentModal from "../hooks/userentmodal";
import { useMemo, useState } from "react";
import Heading from "../components/heading";
import { categories } from "../components/category";
import Category2, { categories2 } from "../components/category2";
import { categories3 } from "../components/category3";
import { categories4 } from "../components/category4";
import { categories5 } from "../components/category5";
import CategoryInput from "../components/categoryInput";
import { useForm } from "react-hook-form";
import CountrySelect from "../components/countryselect";
import Imageup from "../components/image";
import Input from "../components/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useUser } from "@auth0/nextjs-auth0/client";

const STEPS = {
  CATEGORY: 0,
  LOCATION: 1,
  REPAS: 2,
  SPECIALITE: 3,
  PRICE: 4,
  TYPE: 5,
  IMAGES: 6,
  DESCRIPTION: 7,
};
const Rentmodal = () => {
  const rentmodal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const { email } = user || {};
  const body = JSON.stringify({ email });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: "ffff",
      category2: "",
      category3: "",
      category4: "",
      category5: "",
      location: null,
      imageSrc: "",
      title: "",
      description: "",
      ownerEmail: "",
    },
  });

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category changes
  const handleCategoryChange = (e, category) => {
    const isChecked = e.target.checked;

    setSelectedCategories((prevSelectedCategories) => {
      if (isChecked) {
        // Add the category to the selected categories
        return [...prevSelectedCategories, category];
      } else {
        // Remove the category from the selected categories
        return prevSelectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        );
      }
    });
  };

  const category = watch("category");
  const category2 = watch("category2");
  const category3 = watch("category3");
  const category4 = watch("category4");
  const category5 = watch("category5");
  const description = watch("description");

  const location = watch("location");
  const imageSrc = watch("imageSrc");

  const ownerEmail = email;

  const setCustomValue = (id1, value1, id2, value2) => {
    setValue(id1, value1, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setValue(id2, value2, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }

    setIsLoading(true);
    const formData = { ...data, email };

    axios
      .post("/api1/ajout", formData)
      .then(() => {
        console.log("Form submitted successfully!");
        toast.success("La publication est ajoutée avec succès!"); // Display success message
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentmodal.onClose();
        router.push("/ownerpage/publication");
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
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
                setCustomValue("category", category, "ownerEmail", ownerEmail)
              }
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Où est situé votre endroit ?"
          subtitle="Aidez les invités à vous trouver !"
        />
        <CountrySelect
          value={location}
          onChange={(value) =>
            setCustomValue("location", value, "ownerEmail", ownerEmail)
          }
        />
      </div>
    );
  }

  if (step === STEPS.REPAS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Indiquez quelques informations de base sur votre endroit"
          subtitle="Quels équipements proposez-vous ?"
          subtitle2="Les repas proposés dans votre établissement"
        />{" "}
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
          {categories2.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category2) =>
                  setCustomValue(
                    "category2",
                    category2,
                    "ownerEmail",
                    ownerEmail
                  )
                }
                selected={category2 === item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.SPECIALITE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading subtitle2="Quelle est la spécialité de votre établissement?" />
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
          {categories3.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category3) =>
                  setCustomValue(
                    "category3",
                    category3,
                    "ownerEmail",
                    ownerEmail
                  )
                }
                selected={category3 === item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading subtitle2=" Les Prix" />
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
          {categories4.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category4) =>
                  setCustomValue(
                    "category4",
                    category4,
                    "ownerEmail",
                    ownerEmail
                  )
                }
                selected={category4 === item.label}
                label={item.label}
                icon={item.icon}
                required
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.TYPE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading subtitle2=" Bon pour " />
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
          {categories5.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category5) =>
                  setCustomValue(
                    "category5",
                    category5,
                    "ownerEmail",
                    ownerEmail
                  )
                }
                selected={category5 === item.label}
                label={item.label}
                icon={item.icon}
                required
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Ajoutez une photo de votre lieu"
          subtitle="Montrez aux invités à quoi ressemble votre lieu !"
        />
        <Imageup
          onChange={(value) =>
            setCustomValue("imageSrc", value, "ownerEmail", ownerEmail)
          }
          value={imageSrc}
          required
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Comment décririez-vous votre espace ?"
          subtitle="L'efficacité dans la concision!"
        />
        <Input
          id="title"
          label="Titre"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }
  return (
    <>
      <Modal
        isOpen={rentmodal.isOpen}
        title="Bienvenue ! "
        actionLabel="Suivant"
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        onSubmit={handleSubmit(onSubmit)}
        onClose={rentmodal.onClose}
        body={bodyContent}
      />

      <div>{user && JSON.stringify({ email: user.email }, null, 2)}</div>
    </>
  );
};
export default Rentmodal;
