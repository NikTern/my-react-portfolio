import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (!value) {
      error = 'This field is required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(`backend handles form data: ${formData}`);
  };

  return (
    <section className='mx-4'>
      <p></p>
      <h2 className='text-center'>Contact</h2>
      <form className='d-flex justify-content-start align-items-center flex-wrap' onSubmit={handleSubmit}>
        <div className="w-100"><label className='pr-2' htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        /></div>
        {errors.name && <div className="error text-danger fst-italic fs-6">{errors.name}</div>}
        <div className="w-100 pt-3"><label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        /></div>
        {errors.email && <div className="error text-danger fst-italic fs-6">{errors.email}</div>}
        <div className="w-100 pt-3"><label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        /></div>
        {errors.message && <div className="error text-danger fst-italic fs-6">{errors.message}</div>}
        <div className='w-100 d-flex justify-content-center'><button className='h-50' type="submit">Submit</button></div>
      </form>
    </section>
  );
}

export default Contact;
