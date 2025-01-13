import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 animate-fade-in">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-chocolate"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#d2691e] text-white py-3 rounded-lg hover:bg-[#612a03] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
