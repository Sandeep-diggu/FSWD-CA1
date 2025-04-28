// TestimonialCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.jsx';

function TestimonialCard({ name, review, image }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt={`${name}'s avatar`} className="testimonial-image" />
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
}

export default TestimonialCard;
