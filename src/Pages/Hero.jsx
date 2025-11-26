import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/Image1.jpg'
import image2 from '../assets/images/Image6.jpg'
import image3 from '../assets/images/Image3.jpg'
import image4 from '../assets/images/Image4.jpg'
import image5 from '../assets/images/Image5.jpg'

const Hero = () => {
    const images = [ image3,image2,image1,image4,image5];
  

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] md:h-[630px] overflow-hidden ">
        <img
          src={images[currentImageIndex]}
          alt="Charity"
          className="w-full h-full object-cover   transition-all duration-1000"
        />
      
        {/* Optional text overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Support the Needy</h1>
          <p className="text-lg md:text-2xl">Your small donation can bring a big change!</p>
        </div>
      </div>
      

    
    );
};

export default Hero;
