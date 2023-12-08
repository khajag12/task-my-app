"use client"

import { useState } from 'react';

const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    country: '',
    number: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Add your validation logic here
    if (formData.fullname.trim() === '') {
      newErrors.fullname = 'Username is required';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    if(formData.country.trim() === ''){
        newErrors.country = 'Country is required';
    }

    if(formData.number.trim() === ''){
        newErrors.number = 'Contact number is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // You can implement a more sophisticated email validation if needed
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //return emailRegex.test(email);
    if(email.includes("@")){
        return true;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Call your signup API or handle form submission here
      console.log('Form submitted:', formData);
      // Reset the form after successful submission
      setFormData({
        fullname: '',
        email: '',
        password: '',
        country: '',
        number: '',
      });
      setErrors({});
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useSignUpForm;
