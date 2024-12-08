import React from 'react';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-r from-orange-400 to-yellow-500 p-8 flex flex-col justify-center items-center">
      {/* About Section Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-6">About Us</h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6 text-justify">
          Welcome to <span className="font-bold text-orange-600">Nature's Delight</span>, your one-stop destination for fresh, handpicked, and seasonal fruits delivered straight to your doorstep. 
          We believe in bringing you the best quality fruits that are packed with nutrients and bursting with flavor. Our monthly subscription boxes are carefully curated to offer you a variety of fruits that suit your taste, health needs, and seasonal preferences.
        </p>

        <p className="text-lg text-gray-700 mb-6 text-justify">
          Our mission is to promote healthy eating habits and help you live a better lifestyle by incorporating fresh fruits into your daily routine. With Nature's Delight, you're not just receiving fruits; you're investing in your health and well-being. Join us in our journey to make healthy eating more accessible and enjoyable for everyone!
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-600">Fresh & Organic</h3>
            <p className="text-gray-600 mt-2">Our fruits are sourced from trusted organic farms for the best quality and taste.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-600">Monthly Subscription</h3>
            <p className="text-gray-600 mt-2">Choose your subscription plan and receive fresh fruits every month.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-600">Health & Wellness</h3>
            <p className="text-gray-600 mt-2">Enjoy the nutritional benefits of seasonal fruits packed with vitamins and antioxidants.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
