import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-900 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <a href="#">CharityApp</a>
                </div>

                {/* Desktop Menu */}
                            <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
            <a href="#about" className="text-white hover:text-blue-300">About</a>

            <Link to="/donate" className="text-white hover:text-blue-300">Donate</Link>
            <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
            <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
            </div>


                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 space-y-2 text-center bg-gray-900 py-2">
                   
                <Link to="/" className="block text-white hover:text-blue-600">Home</Link>
                <Link to="/about" className="block text-white hover:text-blue-300">About</Link>
                <Link to="/donate" className="block text-white hover:text-blue-300">Donate</Link>
                <Link to="/contact" className="block text-white hover:text-blue-300">Contact</Link>
                <Link to="/login" className="block text-white hover:text-blue-300">Login</Link>
                 </div>
            )}
        </nav>
    );
};

export default Navbar;
