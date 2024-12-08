import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">About Us</h2>
          <p className="text-sm">
            Nature's Delight provides fresh, organic fruit boxes delivered to your doorstep every
            month. Enjoy the goodness of natural, seasonal fruits from our farm to your table.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="text-sm">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:info@naturesdelight.com" className="text-yellow-400 hover:underline">info@naturesdelight.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-yellow-400 hover:underline">+1 234-567-890</a></li>
            <li>Address: 123 Organic Lane, Fruitville, CA 90001</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>© 2024 Nature's Delight. All Rights Reserved.</p>
        <p>
          Developed by <span className="text-yellow-400">Nikhil</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
