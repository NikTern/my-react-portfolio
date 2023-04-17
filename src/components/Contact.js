import React, { useState } from 'react';

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(`backend handles form data: ${formData}`);
      };
      
    return(
        <section className='mx-4'>
          <p></p>
        <h2 className='text-center'>Contact</h2>
        <form className='d-flex justify-content-evenly align-items-center' onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='h-50' type="submit">Submit</button>
        </form>
      </section>
    )
}

export default Contact