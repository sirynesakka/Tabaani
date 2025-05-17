"use client";
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ onChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // Function to handle rating change
  const handleRatingChange = (value) => {
    setRating(value);
    // Save the rating value to localStorage
    localStorage.setItem('rating', value);
    // Pass the rating value to the parent component
    onChange(value);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index} className="block mr-2">
            <input
              type="radio"
              name="star"
              value={currentRating}
              onClick={() => handleRatingChange(currentRating)}
            />
            <FaStar
              size={20}
              color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p className="ml-2">Your rating is {rating}</p>
    </div>
  );
};

export default Rating;
