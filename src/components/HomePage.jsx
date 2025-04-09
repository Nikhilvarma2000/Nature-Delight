import React from 'react';
import ND1Image from '../components/images/ND1.jpg';  // Adjust path if necessary

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 to-orange-500 text-white min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6">
          <div className="flex flex-col items-start space-y-6 w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight transition-transform transform duration-500 ease-in-out hover:scale-105">
              Get Your Monthly Fruit Box Now!
            </h1>
            <p className="text-lg text-gray-100 transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100">
              Fresh, healthy, and organic fruits delivered to your doorstep every month. Experience
              the joy of eating natural and seasonal fruits, straight from the farm to your table!
            </p>
            {/* Button Container */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"> {/* Flexbox for responsive layout */}
              {/* Book Now Button */}
              <a
                href="https://forms.gle/F7RyZ1FiL5iD59Qh6"  // Google Form link
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium text-lg sm:text-xl transition-all duration-300 hover:bg-yellow-500 transform hover:scale-110"
              >
                Book Now
              </a>
              {/* Call Now Button */}
              <a
                href="tel:+916300104828"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-medium text-lg sm:text-xl transition-all duration-300 hover:bg-green-700 transform hover:scale-110"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            {/* Use the imported image here */}
            <img
              src={ND1Image}
              alt="Nature's Delight"
              className="w-full h-auto rounded-lg shadow-xl transition-transform transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-gray-300 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="text-lg">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
          <ul className="text-lg space-y-4">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:naturesdelight@gmail.com" className="text-yellow-400 hover:underline">
                naturesdelight@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+916300104828" className="text-yellow-400 hover:underline">
                +916300104828
              </a>
            </li>
            <li>
              <strong>Address:</strong> Bandlaguda IN Nagole, Hyderabad, India.
            </li>
          </ul>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://th.bing.com/th/id/OIP.Vf2WZE8uCXZV1kzVYMxM6gHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://th.bing.com/th/id/OIP.OiRP0Wt_nlImTXz5w45aRQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/naturesdelight2024/profilecard/?igsh=bXBsNWJrZHVoeW5t" target="_blank" rel="noopener noreferrer">
              <img src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=Og1ujXM2C1AJHQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa5%2fInstagram_icon.png&ehk=1%2fZWXYn2nN%2fR80TOtcKH5SsdLkkUvMLrB%2fHUXRDHk9I%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>© 2024 Nature's Delight. All Rights Reserved.</p>
          <p>
            Developed by <span className="text-yellow-400">Nikhil</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
