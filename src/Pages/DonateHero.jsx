import React, { useState } from 'react';
import Swal from 'sweetalert2';
const DonateHero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    amount: '',
    cause: '',
    paymentMethod: '',
    user: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const donationData = {
      amount: formData.amount,
      cause: formData.cause,
      paymentMethod: formData.paymentMethod,
      user: {id: formData.userId }
    };

   
    try {
      const response = await fetch('http://localhost:9090/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donationData)
      });
      console.log(response);
      

      if (response.ok) {
    
        setFormData({
          amount: '',
          cause: '',
          paymentMethod: '',
          user: ''
        });
        Swal.fire({
          title: 'Success',
          text: 'Thank You for Your Donation',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      } else {
        throw new Error('Donation failed!');
      }
    } catch (error) {
      alert('Something went wrong! Please try again later.');
    }
  };

  return (
    <div>
      <section className="bg-gray-500 text-white py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-lg">
            Your contribution helps us provide education, food, and healthcare to those in need.
            Together, we can change lives!
          </p>
        </div>
      </section>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Make a Donation</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                min="1"
              />
            </div>

            <div>
              <label className="block text-gray-700">Cause</label>
              <input
                type="text"
                name="cause"
                value={formData.cause}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Method</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.user.id}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your user ID"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateHero;
