import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Welcome to our Turkish language learning platform! We are passionate about helping people connect, learn, and grow through language.
            </p>
    
            {/* About the Creator */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Am I?</h2>
              <p className="text-gray-600 text-lg">
                I am a dedicated web developer and tech enthusiast who loves creating meaningful, interactive, and user-friendly platforms. This Turkish language learning website is one of my passion projects aimed at making language learning fun and accessible for everyone.
              </p>
            </section>
    
            {/* Other Projects */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Projects</h2>
              <ul className="list-disc pl-6 text-gray-600 text-lg">
                <li>
                  <strong>GadgetHeaven:</strong> An e-commerce platform for gadgets, designed to provide a seamless shopping experience with advanced filtering and categorization.
                </li>
                <li>
                  <strong>Socks Shop:</strong> A playful and interactive online store for funky socks, with a focus on vibrant UI and smooth user navigation.
                </li>
                <li>
                  <strong>Robotics Projects:</strong> Developing software to integrate Node.js with robotic systems for advanced automation solutions.
                </li>
              </ul>
            </section>
    
            {/* Skills */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 text-lg">
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Tailwind CSS</span>
                <span>Firebase</span>
                <span>HTML & CSS</span>
              </div>
            </section>
    
            {/* Mission Statement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                Our mission is to empower individuals around the globe with the ability to communicate effectively in Turkish, fostering cultural understanding and personal growth. We strive to deliver high-quality content, practical exercises, and an engaging learning experience for everyone.
              </p>
            </section>
          </div>
        </div>
      );
    };

export default AboutUs;