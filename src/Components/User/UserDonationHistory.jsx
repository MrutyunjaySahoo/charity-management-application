import React, { useState, useEffect } from 'react';

const UserDonationHistory = ({ userId }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(`http://localhost:9090/donation/${userId}/donations`);
        if (!response.ok) {
          throw new Error("Failed to fetch donations");
        }

        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
        setError("Unable to load donation history.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, [userId]);

  if (loading) {
    return <div className="text-center text-blue-600 mt-6">Loading donation history...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-6">{error}</div>;
  }

  if (donations.length === 0) {
    return <div className="text-center text-gray-600 mt-6">No donations found!</div>;
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl w-full overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your Donation History</h2>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Cause</th>
            <th className="px-4 py-3">Payment Method</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id} className="border-t hover:bg-gray-50 transition">
              <td className="px-4 py-3 font-medium text-gray-800">₹{donation.amount}</td>
              <td className="px-4 py-3">{donation.cause}</td>
              <td className="px-4 py-3">{donation.paymentMethod}</td>
              <td className="px-4 py-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  Thank you!
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDonationHistory;
