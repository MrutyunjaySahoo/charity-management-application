import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formdata, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    const details={
      fullName:formdata.fullName,
      email:formdata.email,
      message:formdata.message
    }
    e.preventDefault(); // prevent page 
    try{
   const response=await fetch("http://localhost:9090/api/contact",{method:"post",
      headers: {
        "Content-Type": "application/json",//his informs the server that the body of the request is in JSON format.
      },
      body: JSON.stringify(formdata),
    } );
    if(response.ok)
    {
 Swal.fire({
          title: 'Success',
          text: "Your Query Has Sumbitted",
          icon: 'success',
          confirmButtonText: 'ok'
        })
    }
  }
  catch(error)
  {
    alert("something went wrong!!!!!!!")
    console.log(error);
    
  }
    // Here you can also make a POST request to your backend
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              onChange={(e) =>
                setFormData({ ...formdata, [e.target.name]: e.target.value })
              }
              value={formdata.fullName}
            />
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData({ ...formdata, [e.target.name]: e.target.value })
              }
              value={formdata.email}
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              onChange={(e) =>
                setFormData({ ...formdata, [e.target.name]: e.target.value })
              }
              value={formdata.message}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
