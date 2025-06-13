import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-700 mb-6">Get updates on latest trends and exclusive offers straight to your inbox</p>
      <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default Newsletter
