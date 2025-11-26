import React, { useEffect, useState } from 'react';

const UserLeaderboard = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('http://localhost:9090/donation/leaderboard');
        if (!res.ok) throw new Error('Failed to fetch leaderboard');
        const data = await res.json();
        setDonors(data);
      } catch (err) {
        console.error(err);
        setError('Unable to load leaderboard.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}`;
  };

  if (loading) return <p className="text-center text-blue-600">Loading leaderboard...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Top Donors</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Total Donated (₹)</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, idx) => (
              <tr key={donor.userId} className="border-t">
                <td className="px-4 py-2 font-semibold">{getMedal(idx + 1)}</td>
                <td className="px-4 py-2">{donor.userName}</td>
                <td className="px-4 py-2">₹{donor.totalAmount.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLeaderboard;
