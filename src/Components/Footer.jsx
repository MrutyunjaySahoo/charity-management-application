import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#donate" className="hover:text-gray-300">Donate</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2 - Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@charityapp.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p>Stay updated with our latest initiatives.</p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg text-black"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2025 CharityApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
