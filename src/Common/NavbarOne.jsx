import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaFileAlt, FaBuilding, FaCamera, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const NavbarOne = () => {
  const [homeHovered, setHomeHovered] = useState(false);  // Track Home hover state
  const [centralHovered, setCentralHovered] = useState(false);  // Track Central hover state
  const [discomsHovered, setDiscomsHovered] = useState(false);  // Track Discoms hover state
  const [mediaHovered, setMediaHovered] = useState(false);  // Track Media hover state

  const dropdownVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.nav
    // bg-gradient-to-b from-green-600 via-green-400 to-green-100
      className="bg-gradient-to-r from-green-600 via-green-400 to-green-100 text-white py-1 px-10 mt-1 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center">
        <motion.ul className="flex space-x-10 text-lg font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          {/* HOME */}
          <li
            className="relative group flex items-center"
            onMouseEnter={() => setHomeHovered(true)}
            onMouseLeave={() => setHomeHovered(false)}
          >
            <FaHome className="mr-2" />
            <a className="hover:text-yellow-500 cursor-pointer z-20 uppercase">Home</a>
            {homeHovered && (
              <motion.ul
                className="absolute top-5 left-0 mt-2 bg-white text-black rounded-md shadow-md z-10 w-48"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownVariants}
              >
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">State</li>
                {/* CENTRAL - with sub-dropdown */}
                <li
                  className="relative group flex items-center"
                  onMouseEnter={() => setCentralHovered(true)}
                  onMouseLeave={() => setCentralHovered(false)}
                >
                  <a className="hover:text-yellow-500 cursor-pointer px-4 py-2 uppercase">Central</a>
                  {centralHovered && (
                    <motion.ul
                      className="absolute left-48 top-0 mt-2 bg-white text-black rounded-md shadow-md z-10 w-48"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={dropdownVariants}
                    > 
              <Link to="/data-table">
  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ministry of Power (MOP)</li>
</Link>

                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ministry of Health Industry (MOHI)</li>
                    </motion.ul>
                  )}
                </li>
              </motion.ul>
            )}
          </li>

          {/* POLICIES */}
          <Link to="/policies">
          <li className="hover:text-yellow-500 cursor-pointer flex items-center uppercase">
            <FaFileAlt className="mr-2" />
            <a>Policies</a>
          </li>
          </Link>

          {/* DISCOMS */}
          <li
            className="relative group flex items-center"
            onMouseEnter={() => setDiscomsHovered(true)}
            onMouseLeave={() => setDiscomsHovered(false)}
          >
            <FaBuilding className="mr-2" />
            <a className="hover:text-yellow-500 cursor-pointer uppercase">DISCOMS</a>
            {discomsHovered && (
              <motion.ul
                className="absolute top-5 left-0 mt-2 bg-white text-black rounded-md shadow-md z-10 w-48"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownVariants}
              >
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">MVVNL</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">PVVNL</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">PuVVNL</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">DVVNL</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer uppercase">UPPCL</li>
              </motion.ul>
            )}
          </li>

          {/* TENDER */}
          <li className="hover:text-yellow-500 cursor-pointer flex items-center uppercase">
            <FaFileAlt className="mr-2" />
            <a>Tender</a>
          </li>

          {/* DOCUMENT */}
          <li className="hover:text-yellow-500 cursor-pointer flex items-center">
            <FaFileAlt className="mr-2" />
            <a>Document</a>
          </li>

          {/* MEDIA */}
          <li
            className="relative group flex items-center"
            onMouseEnter={() => setMediaHovered(true)}
            onMouseLeave={() => setMediaHovered(false)}
          >
            <FaCamera className="mr-2" />
            <a className="hover:text-yellow-500 cursor-pointer uppercase">Media</a>
            {mediaHovered && (
              <motion.ul
                className="absolute left-0  top-5 mt-2 bg-white text-black rounded-md shadow-md z-10 w-64"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownVariants}
              >
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Photo Gallery</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Video Gallery</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">News & Events</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Press Release</li>
              </motion.ul>
            )}
          </li>

          {/* CONTACT US */}
          <li className="hover:text-yellow-500 cursor-pointer flex items-center uppercase">
            <FaPhoneAlt className="mr-2" />
            <a>Contact Us</a>
          </li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default NavbarOne;
