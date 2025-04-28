import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-8">
      <TestimonialCard 
        name="Emily Watson" 
        review="This service was amazing! Highly recommended." 
      />
      <TestimonialCard 
        name="James Anderson" 
        review="Fantastic experience — would definitely come back again!" 
      />
    </div>
  );
}

export default App;
