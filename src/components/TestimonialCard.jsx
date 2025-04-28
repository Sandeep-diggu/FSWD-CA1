import React from 'react';

const TestimonialCard = ({ name, review }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10">
            <h2 className="text-xl font-semibold mb-4">Testimonial</h2>
            <p className="text-gray-700 mb-4">"{review}"</p>
            <p className="text-gray-500">- {name}</p>
        </div>
    );
};

export default TestimonialCard;
