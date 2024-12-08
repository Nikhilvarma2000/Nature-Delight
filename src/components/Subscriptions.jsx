import React from 'react';

const Subscriptions = () => {
  return (
    <div id="subscriptions" className="py-16 bg-yellow-400 text-white mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-black">Our Subscription Plans</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {/* Subscription Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/mixed-cut-fruits-arranged-transparent-glass-bowl-with-white-background-isolated_527904-454.jpg?ga=GA1.1.954747927.1733648076&semt=ais_hybrid"
              alt="Subscription 1"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-lg mb-4">Perfect for small families or individuals who enjoy fresh fruits.</p>
            <p className="text-xl font-semibold mb-4">₹1799/month</p>
            <div className="flex justify-center gap-4">
              {/* Book Now Button with Google Form link */}
              <a
                href="https://forms.gle/F7RyZ1FiL5iD59Qh6"  // Your Google Form link here
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button
                  className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-black hover:text-yellow-400 transition-all duration-300"
                >
                  Book Now
                </button>
              </a>

              {/* Call Now Button */}
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-all duration-300"
                onClick={() => window.open('tel:+916300104828')} // Add your phone number here
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Subscription Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/mixed-fruit-salad-arranged-transparent-rectangle-tableware-garnished-with-mint-leaf_527904-471.jpg?ga=GA1.1.954747927.1733648076"
              alt="Subscription 2"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-lg mb-4">Ideal for families and health-conscious individuals.</p>
            <p className="text-xl font-semibold mb-4">₹2,099/month</p>
            <div className="flex justify-center gap-4">
              {/* Book Now Button with Google Form link */}
              <a
                href="https://forms.gle/F7RyZ1FiL5iD59Qh6"  // Your Google Form link here
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button
                  className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-black hover:text-yellow-400 transition-all duration-300"
                >
                  Book Now
                </button>
              </a>

              {/* Call Now Button */}
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-all duration-300"
                onClick={() => window.open('tel:+916300104828')} // Add your phone number here
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Subscription Card 3 (Family Plan - Coming Soon) */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/cut-fruits-mix-arranged-transparent-glass-container-with-white-background_527904-5.jpg?ga=GA1.1.954747927.1733648076"
              alt="Subscription 3"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Family Plan</h3>
            <p className="text-lg mb-4">For large families who enjoy a variety of seasonal fruits.</p>
            <p className="text-xl font-semibold mb-4"></p>
            <div className="flex justify-center gap-4">
              {/* Coming Soon Message */}
              <span className="bg-gray-500 text-white py-2 px-6 rounded-full font-bold text-lg">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
