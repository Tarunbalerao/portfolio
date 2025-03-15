import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display a success message
    toast.success('Message sent successfully!');
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-lg text-center mb-8">Feel free to reach out to me!</p>
        <form className="mt-4 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded p-2 mb-4 w-full bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded p-2 mb-4 w-full bg-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 rounded p-2 mb-4 w-full bg-gray-700 text-white"
            rows="4"
            required
          />
          <button className="bg-purple-500 text-white rounded p-2 w-full hover:bg-purple-600 transition duration-200">Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;