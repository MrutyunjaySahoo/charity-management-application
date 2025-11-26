import React, { useState, useEffect } from 'react';

const Settings = ({ userId }) => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9090/user/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        setError('Failed to fetch user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const response = await fetch(`http://localhost:9090/user/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) throw new Error('Update failed');
      setSuccessMsg('User details updated successfully!');
    } catch (error) {
      setError('Failed to update user details');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center">Loading user settings...</p>;
  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">User Settings</h2>

      {successMsg && <p className="text-green-600 text-center mb-4">{successMsg}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name:</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            value={userDetails.user_Name || ''}
            onChange={(e) => setUserDetails({ ...userDetails, user_Name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2"
            value={userDetails.email || ''}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password:</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2"
            value={userDetails.password || ''}
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default Settings;
