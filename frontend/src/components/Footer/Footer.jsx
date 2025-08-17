import Logo from "./../../assets/images/logoooooo.png";
import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-5 py-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <img
                src={Logo}
                alt="Travel and Tourism Logo"
                className="h-20 md:h-24 md:mr-12 rounded-lg shadow-lg"
              />
              <div className="flex flex-col mt-8 text-center md:text-left">
                <p className="mb-2 text-lg">Address: 123 Travel Street, City, Country</p>
                <p className="mb-2 text-lg">Phone: +91-9504834193</p>
                <p className="mb-2 text-lg">Email: info@travelandtourism.com</p>
                <p className="text-lg font-semibold">&copy; 2023 Travel and Tourism. All rights reserved.</p>
              </div>
            </div>

            <Newsletter />

            {/* Social Media Links */}
            <div className="flex md:flex-col gap-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
