
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // State for button loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_z7j7qs1", // Replace with actual Service ID
        "template_paxuw3w", // Replace with actual Template ID
        formData,
        "z5OxbCwseiAfDRWqJ" // Replace with actual Public Key
      );

      console.log("Email sent successfully:", response);
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-lg text-center mb-8">Feel free to reach out to me!</p>
        <form 
          className="mt-4 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg" 
          onSubmit={handleSubmit}
        >
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
          <button
            type="submit"
            className="bg-purple-500 text-white rounded p-2 w-full hover:bg-purple-600 transition duration-200"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;