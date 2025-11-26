import React, { useEffect, useState } from 'react';

const UserCauses = () => {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const response = await fetch('http://localhost:9090/api/causes/upcoming');
        if (!response.ok) {
          throw new Error("Failed to fetch causes");
        }
        const data = await response.json();
        setCauses(data);
      } catch (error) {
        console.error('Error fetching causes:', error);
        setError("Failed to load upcoming causes.");
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  if (loading) return <p className="text-center text-blue-600 mt-6">Loading causes...</p>;
  if (error) return <p className="text-center text-red-600 mt-6">{error}</p>;
  if (causes.length === 0) return <p className="text-center text-gray-600 mt-6">No upcoming causes found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Upcoming Causes</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{cause.title}</h3>
            <p className="text-gray-700 text-sm mb-3">{cause.description}</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Target:</strong> ₹{cause.targetAmount.toLocaleString('en-IN')}</p>
              <p><strong>Start:</strong> {new Date(cause.startDate).toLocaleDateString()}</p>
              <p><strong>End:</strong> {new Date(cause.endDate).toLocaleDateString()}</p>
            </div>
            {/* Optional status tag */}
            <div className="mt-3">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCauses;
