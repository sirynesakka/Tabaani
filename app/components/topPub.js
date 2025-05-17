import React from "react";
import DisplayImage from "../components/DisplayImage";
import StarRating from "./starRating"

const TopPublications = ({ publications }) => {
    // Trier les publications par rating décroissant
    const sortedPublications = publications.sort((a, b) => b.rating - a.rating);
    
    // Sélectionner les 3 premières publications
    const topPublications = sortedPublications.slice(0, 3);
  
    return (
      <div className="flex flex-wrap">
        {topPublications.map(publication => (
          <div key={publication.id} className="max-w-2xl mx-auto mt-24">
            <div className="flex gap-3 bg-white border-green-600 border-2 rounded-xl overflow-hidden items-center justify-start">
              <div className="relative flex-shrink-0 w-24 h-28">
                <DisplayImage publication={publication} className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex-grow gap-2 py-2">
                <p className="text-xl font-bold">{publication.titre}</p>
                <p className="text-gray-500">{publication.type}</p>
                <StarRating rating={publication.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default TopPublications;