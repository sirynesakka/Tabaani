'use client'

import React, { useState , useEffect} from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
const Aside2 = ({ onOptionsChange }) => {
  // État local pour stocker les options sélectionnées pour chaque groupe
  const [selectedOptions, setSelectedOptions] = useState({
    type: '',
    repas: '',
    spécialité: '',
    bonpour: '',
    prix: ''
  });
  
  const handleOptionChange = (optionName, value) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [optionName]: value
    }));
  };

  useEffect(() => {
    onOptionsChange(selectedOptions);
  }, [selectedOptions, onOptionsChange]);
  
  


  return (
    <>
    
    <div className="py-1 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
      <h2 className="border-b px-3 text-lg font-bold text-gray-800 dark:text-white">
        Filtres :
      </h2>

      <div className="px-3 py-6 flex flex-wrap">
        <div className="mr-8 mb-4">
          <div className="font-bold underline">Le type :</div>
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              label="Café"
              value="cafe"
              checked={selectedOptions.type === 'cafe'}
              onChange={(e) => {handleOptionChange('type', e.target.value); onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Réstaurant"
              value="restaurant"
              checked={selectedOptions.type === 'restaurant'}
              onChange={(e) =>{handleOptionChange('type', e.target.value);onOptionsChange(selectedOptions);} }
            />
          </FormGroup>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="px-3 py-6 flex flex-wrap">
        <div className="mr-8 mb-4">
          <div className="font-bold underline">Repas :</div>
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              label="Petit-déjeuner"
              value="petit-déjeuner"
              checked={selectedOptions.repas === 'petit-déjeuner'}
              onChange={(e) =>{ handleOptionChange('repas', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Brunch"
              value="brunch"
              checked={selectedOptions.repas === 'brunch'}
              onChange={(e) => {handleOptionChange('repas', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Déjeuner"
              value="déjeuner"
              checked={selectedOptions.repas === 'déjeuner'}
              onChange={(e) => {handleOptionChange('repas', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Diner"
              value="diner"
              checked={selectedOptions.repas === 'diner'}
              onChange={(e) => {handleOptionChange('repas', e.target.value);onOptionsChange(selectedOptions);}}
            />
          </FormGroup>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="px-3 py-6 flex flex-wrap">
        <div className="mr-8 mb-4">
          <div className="font-bold underline">Spécialité :</div>
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              label="Tunisienne"
              value="tunisienne"
              checked={selectedOptions.spécialité === 'tunisienne'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Asiatique"
              value="asiatique"
              checked={selectedOptions.spécialité === 'asiatique'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Fruits de mer"
              value="fruitsdemer"
              checked={selectedOptions.spécialité === 'fruits-de-mer'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Italien"
              value="italien"
              checked={selectedOptions.spécialité === 'italien'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Pizza"
              value="pizza"
              checked={selectedOptions.spécialité === 'pizza'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Café"
              value="café"
              checked={selectedOptions.spécialité === 'café'}
              onChange={(e) => {handleOptionChange('spécialité', e.target.value);onOptionsChange(selectedOptions);}}
            />
          </FormGroup>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="px-3 py-6 flex flex-wrap">
        <div className="mr-8 mb-4">
          <div className="font-bold underline">Bonpour :</div>
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              label="Famille"
              value="familles"
              checked={selectedOptions.bonpour === 'familles'}
              onChange={(e) => {handleOptionChange('bonpour', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Enfants"
              value="enfants"
              checked={selectedOptions.bonpour === 'enfants'}
              onChange={(e) => {handleOptionChange('bonpour', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Romantique"
              value="romantique"
              checked={selectedOptions.bonpour === 'romantique'}
              onChange={(e) => {handleOptionChange('bonpour', e.target.value);onOptionsChange(selectedOptions);}}
            />
          </FormGroup>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="px-3 py-6 flex flex-wrap">
        <div className="mr-8 mb-4">
          <div className="font-bold underline">Prix :</div>
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              label="Moyenne de gamme"
              value="Moyennedegamme"
              checked={selectedOptions.prix === 'Moyennedegamme'}
              onChange={(e) => {handleOptionChange('prix', e.target.value);onOptionsChange(selectedOptions);}}
            />
            <FormControlLabel
              control={<Radio />}
              label="Pas cher"
              value="pascher"
              checked={selectedOptions.prix === 'pascher'}
              onChange={(e) => {handleOptionChange('prix', e.target.value);onOptionsChange(selectedOptions);}}
            />
          </FormGroup>
        </div>
      </div>
    </div>
    </>
  );
};

export default Aside2 ;