import React from 'react'

const Contact = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
