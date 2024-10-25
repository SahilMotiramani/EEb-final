import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post('http://localhost:5000/api/courses/inquire', formData)
      .then(response => {
        alert('Inquiry submitted successfully!');
        setFormData({ name : '', email : '', message : '' });
      })
      .catch(error => {
        alert('Error submitting the inquiry.');
      });
  };

  return (
    <footer>
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message : </label>
          <input type="text" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </footer>
  );
}

export default ContactForm;
