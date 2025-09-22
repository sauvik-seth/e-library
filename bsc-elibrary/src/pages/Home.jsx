import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CategoryList from "../components/CategoryList"; // Import the new CategoryList component
import ELibraryServices from "../components/ELibraryServices";
import Contact from "../components/Contact"; // Import the Contact component
// import Books from '../components/Books';
import Reviews from '../components/Reviews';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Hero />
      <Features />
      <CategoryList /> {/* Add the CategoryList component here */}
      <ELibraryServices />
      {/* <Books /> */}
      <Reviews />
      <Contact /> {/* Render the Contact component here */}
    </>
  );
};

export default Home;