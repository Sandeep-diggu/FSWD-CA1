import React from 'react';

const TestimonialCard = ({ name, review }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default TestimonialCard;

