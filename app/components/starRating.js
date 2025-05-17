import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // Arrondir à 0,5 près

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <svg
          key={i}
          className="mx-1 w-4 h-4 fill-current text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(
        <svg
          key={i}
          className="mx-1 w-4 h-4 fill-current text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="gold" />
              <stop offset="50%" stopColor="gray" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" fill="url(#half-gradient)" />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="mx-1 w-4 h-4 fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
  }

  return (
    <div className="px-5 flex items-center">
      <div className="flex justify-center items-center">
        <div className="flex items-center mt-2 mb-4 px-8">
          {stars}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
