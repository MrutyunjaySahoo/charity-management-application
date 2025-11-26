import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <section className="bg-gray-100 py-12 px-4 sm:px-8">
  <h3 className="text-3xl font-semibold text-center mb-10">What Our Donors Say</h3>
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {[
      {
        name: "subh Shah",
        feedback: "Donating here was simple and transparent. Love how you show real impact!",
      },
      {
        name: "Sneha Verma",
        feedback: "My small donation helped a family get food. This platform is amazing!",
      },
      {
        name: "Rohit Nair",
        feedback: "Secure payments, clear updates – this is how all charity should be.",
      },
      {
  name: "Priya Kulkarni",
  feedback: "I love how easy it is to support causes I care about. The team is truly dedicated to making a difference!",
},
{
  name: "Ankit Mehra",
  feedback: "A reliable and transparent platform. I received updates about where my donation went. Highly recommend!",
},
{
  name: "Fatima Sheikh",
  feedback: "Beautifully designed and so easy to use. I feel like I'm part of a real change here!",
}

    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition"
      >
        <p className="text-gray-700 mb-4 italic">“{item.feedback}”</p>
        <h4 className="font-semibold text-blue-700 text-right">– {item.name}</h4>
      </div>
    ))}
  </div>
</section>
      
    </div>
  )
}

export default Testimonial
