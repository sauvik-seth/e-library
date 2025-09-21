import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide free resources to help B.Sc. students excel in their studies. Our mission
            is to make quality educational materials accessible to everyone, breaking down
            barriers to learning and fostering academic success.
          </p>
          <p className="text-lg text-gray-600">
            With a vast collection of carefully curated books across Physics, Chemistry,
            Mathematics, Computer Science, and Biology, we're here to support your academic
            journey every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;