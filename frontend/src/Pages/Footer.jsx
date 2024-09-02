// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 pt-24 pb-56">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center ">
          {/* Logo and Branding */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Alumni Nexus</h1>
            <p className="text-gray-400">© Alumni Nexus. <br></br>All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Prospects & Alumni in News</a></li>
              <li><a href="#about" className="hover:underline">Essential Alumni and Donor Data</a></li>
              <li><a href="#services" className="hover:underline">Alumni Network for Institutions</a></li>
              <li><a href="#contact" className="hover:underline">Alumni Network for Corporates</a></li>
            </ul>
          </div>
          {/*  */}
          

          {/* Contact Info */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-2">1234 Street Name, City, Country</p>
            <p className="mb-2">Email: contact@yourbrand.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

