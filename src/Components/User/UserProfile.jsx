import React, { useEffect, useState } from "react";
import myimage from '../../assets/images/MyImage.jpg';
import { FaUserEdit } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg animate-pulse">
        No user info available.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
        
       
        <div className="flex flex-col items-center mb-6">
          <img
            src={myimage}
            alt="User"
            className="h-26 w-28 rounded-full border-4 border-blue-400 shadow-lg hover:shadow-xl transition duration-300 object-fit"
          />
          <h2 className="mt-4 text-2xl font-bold text-blue-700">{user.user_Name}</h2>
          <span className={`text-sm mt-2 px-4 py-1 rounded-full font-medium ${
            user.role === "Admin"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}>
            {user.role}
          </span>
        </div>

       
        <div className="space-y-4 text-gray-700 text-[16px] font-medium px-2">
          <p><span className="font-semibold text-gray-800">User ID:</span> {user.id}</p>
          <p><span className="font-semibold text-gray-800">Email:</span> {user.email}</p>
          <p><span className="font-semibold text-gray-800">Registered As:</span> {user.role}</p>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-center">
          <button className="flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
            <FaUserEdit /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
