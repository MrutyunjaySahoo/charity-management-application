import React from 'react';
import DonationCard from './DonationCard';
import eduaction from'../assets/images/education.jpg'
import health from'../assets/images/health.jpg'
import food from'../assets/images/image4.jpg'
import water from'../assets/images/water.jpg'
import women from '../assets/images/women.jpg'
import disaster from'../assets/images/disaster.jpg'
import animal from '../assets/images/animal.jpg'
import elder from '../assets/images/elder.jpg'

const DonationCardSection = () => {
    const donationFields = [
        {
            title: "Education for Children",
            image: eduaction, // Use your local image path
            description: "Help provide quality education to underprivileged children."
        },
        {
            title: "Healthcare Services",
            image: health, // Use your local image path
            description: "Support healthcare initiatives for communities."
        },
        {
            title: "Food for the Needy",
            image: food, // Use your local image path
            description: "Donate to feed families struggling with poverty."
        },
        {
            title: "Clean Water Projects",
            image: water, // Use your local image path
            description: "Help provide access to clean and safe drinking water."
        },

        {
            title: "Women Empowerment",
            image: women, // Use your local image path
            description: "Support skill development and livelihood programs for women in rural areas."
        },
        {
        title: "Disaster Relief",
        image: disaster, // Use your local image path
        description: "Provide emergency aid and rehabilitation for natural disaster victims."
        },
        {
        title: "Animal Welfare",
        image: animal, // Use your local image path
        description: "Help rescue and shelter stray or injured animals and to protect their lives."
        },
        {
      title: "Elderly Care",
      image: elder, // Use your local image path
     description: "Support senior citizens with shelter, food, and medical assistance."
}


    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Where Your Donation Goes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {donationFields.map((field, index) => (
                        <DonationCard
                            key={index}
                            title={field.title}
                            image={field.image}
                            description={field.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationCardSection;
