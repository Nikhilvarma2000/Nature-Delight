import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Navigation bar for consistent navigation across pages
import About from './components/About.jsx'; // About section of the website
import HomePage from './components/HomePage.jsx'; // Home page of the website
import Subscriptions from './components/Subscriptions.jsx'; // Subscription plans and details
import Contact from './components/Contact.jsx'; // Contact page with details
import BookNow from './components/BookNow.jsx'; // Booking form for user services

function App() {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <Navbar />
      <div className="min-h-screen bg-gray-50"> {/* Added a background color for better design */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          {/* About Page */}
          <Route path="/about" element={<About />} />
          {/* Subscriptions Section */}
          <Route path="/subscriptions" element={<Subscriptions />} />
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          {/* Booking Page */}
          <Route path="/book-now" element={<BookNow />} /> {/* Ensure the path is consistent */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
