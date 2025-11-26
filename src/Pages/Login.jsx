import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = () => {
  //const Swal = require('sweetalert2')
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userCredentials = {
      email: formData.email,
      password: formData.password,
    };
  
    try {
      const response = await fetch("http://localhost:9090/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
  
      const data = await response.json();//it converts json to js object
      console.log(data);
      
      
  
      if (response.ok) {; 
        localStorage.setItem("user", JSON.stringify(data.user))
       
        localStorage.setItem("userId", data.user.id);
       
        Swal.fire({
          title: 'Success',
          text: `${data.message}`,
          icon: 'success',
          confirmButtonText: 'ok'
        })
        navigate("/dashboard"); // Redirect after login
      } else {
        alert(data.message); // Show error message
      }
    }
    
    
    
    catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className='text-center'>New user?<Link to="/signup" className='font-semibold text-rose-600'>Register</Link></p>
        </form>

      </div>
     
    </div>
  );
};

export default Login;
