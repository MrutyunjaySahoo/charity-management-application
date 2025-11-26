import React from 'react';
import { Link } from 'react-router-dom';
import DonateHero from '../Pages/DonateHero';
const DonationCard = ({ title, image, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <img src={image} alt={title} className="w-full h-[200px] object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2 overflow-hidden">{description}</p>
                <Link to='/login'>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
                    Donate Now
                </button>
                </Link>
            </div>
        </div>
    );
};
 
export default DonationCard;
