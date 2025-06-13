import React from 'react'

const testimonials = [
  {
    name: 'Richa Mishra',
    comment: 'Amazing quality products and super fast delivery. Highly recommend DapperDen!',
    image: 'https://photosmint.com/wp-content/uploads/2025/03/Indian-Beauty-DP.jpeg'
  },
  {
    name: 'Aniket Singh',
    comment: 'The styles are trendy and affordable. I love shopping here!',
    image: 'https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Vikas Kashyap',
    comment: 'Customer service was excellent. Will definitely come back for more.',
    image: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915905.jpg?semt=ais_hybrid&w=740'
  }
]

const Testimonials = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-3">"{testimonial.comment}"</p>
            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
