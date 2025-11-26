import React, { useState } from 'react';
import {
  FaHome, FaUser, FaHistory,
  FaCalendarAlt, FaTrophy, FaCog, FaSignOutAlt
} from 'react-icons/fa';

import UserHome from './UserHome';
import UserProfile from './UserProfile';
import UserDonationHistory from './UserDonationHistory';
import UserCauses from './UserCauses';
import UserLeaderboard from './UserLeaderBoard';
import UserSettings from './UserSettings'
import Swal from 'sweetalert2';

const UserDashboardSidebar = () => {
  const [activePage, setActivePage] = useState('Home');
  const userId = localStorage.getItem('userId');

  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Profile', icon: <FaUser /> },
    { name: 'Donation History', icon: <FaHistory /> },
    { name: 'Upcoming Events', icon: <FaCalendarAlt /> },
    { name: 'Leaderboard', icon: <FaTrophy /> },
    { name: 'Settings', icon: <FaCog /> },
    { name: 'Logout', icon: <FaSignOutAlt /> },
  ];
  

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <UserHome />;
      case 'Profile':
        return <UserProfile/>;
      case 'Donation History':
        return <UserDonationHistory  userId={userId}/>;
      case 'Upcoming Events':
        return <UserCauses/>;
      case 'Leaderboard':
        return <UserLeaderboard/>;
      case 'Settings':
        return <UserSettings userId={userId}/>;
        case 'Logout':
          localStorage.clear();
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
          return Swal.fire({
                    title: 'Success',
                    text: `logged out successfully`,
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
        
      default:
        return <h2 className="text-2xl font-semibold">Page Not Found</h2>;
    }
  };

  return (
    <div className="flex min-h-screen">
     
      <div className="w-1/5 bg-gray-900 text-white p-6">
        <h3 className="text-3xl font-bold mb-8">Dashboard</h3>
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-blue-600 transition ${
                activePage === item.name ? 'bg-blue-700' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-4/5 p-8 bg-gray-200">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
