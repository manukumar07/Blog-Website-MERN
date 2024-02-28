// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Mern-Blog. All rights reserved.
        </p>
        <p className="text-sm mt-90">
          {" "}
          {/* Adjusted margin-top to 4 */}
          Built with <span className="text-red-500">❤</span>Manu Kumar Pal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
