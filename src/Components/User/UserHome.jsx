import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [user, setUser] = useState(null);
  const AnimatedCounter = ({ target, prefix = "", duration = 1000 }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;
  
      const increment = end / (duration / 16); // 60fps approximation
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
  
      return () => clearInterval(counter);
    }, [target, duration]);
  
    return <span>{prefix}{count}</span>;
  };
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div className="text-center mt-10 text-red-600">User not logged in!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome, {user.user_Name} 👋
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Thanks for making the world a better place. Here's your dashboard overview.
      </p>

      {/* Motivational Quote */}
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-8 shadow">
        <p className="italic">
          “No one has ever become poor by giving.” — Anne Frank
        </p>
      </div>

      {/* Stats Section */}
      {/* Stats Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="bg-white p-6 rounded-lg shadow text-center">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Donations</h3>
    <p className="text-2xl font-bold text-green-600">
      ₹<AnimatedCounter target={100500} />
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow text-center">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">Causes Supported</h3>
    <p className="text-2xl font-bold text-blue-600">
      <AnimatedCounter target={7} />
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow text-center">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">Donations This Month</h3>
    <p className="text-2xl font-bold text-purple-600">
      ₹<AnimatedCounter target={2500} />
    </p>
  </div>
</div>


      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Your Donations</h2>
          <p className="text-gray-600">Feature coming soon. You’ll be able to track your donation history here.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Upcoming Charity Events</h2>
          <p className="text-gray-600">Stay tuned for events you can attend or support. Coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
