import React from "react";
 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p><strong>Email:</strong> dilarahossenara@gmail.com</p>
          <p><strong>Phone:</strong> +90 123 456 7890</p>
          <p><strong>Address:</strong> Istanbul, Turkey</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-red-500 hover:text-red-400">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <p>© 2024 TurkLearner. All Rights Reserved.</p>
          <p>
            <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          </p>
          <p>
            <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
