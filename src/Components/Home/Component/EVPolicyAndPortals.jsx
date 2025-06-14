// import React from "react";

// const EVPolicyAndPortals = () => {
//   return (
//     <div className="px-10 py-8">
//       <div className="text-center mb-8">
//         {/* <h2 className="text-3xl font-bold text-green-600 uppercase">
//           Uttar Pradesh Electric Vehicle Policies and Our Portals
//         </h2> */}
//       </div>

//       {/* Main Div for Policies and Portals */}
//       <div className="flex justify-between items-start w-[100%]  ">
      
//         {/* Left Side - Policies with Background Cover */}
//         <div className="space-y-8 bg-cover bg-center rounded-lg w-[50%] " style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?electric-car')" }}>
//       <h1 class=" text-green-600 text-3xl font-extrabold tracking-wider text-center relative uppercase underline-animation">
//     <span className="text-orange-700">Our</span> Portals
//   </h1>
//           {/* First Row - 2 Policies */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Policy Card 1 */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 className="w-full h-48 object-cover"
//                 src="https://c7.alamy.com/comp/2XMW5NR/los-angeles-united-states-29th-july-2024-an-all-electric-police-vehicle-made-by-tesla-is-unveiled-during-a-press-conference-at-south-pasadena-city-hall-in-south-pasadena-photo-by-ringo-chiusopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2XMW5NR.jpg"
//                 alt="EV Policy"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   UP ELECTRIC VEHICLE POLICY 2022 & GO'S
//                 </h3>
//               </div>
//             </div>

//             {/* Policy Card 2 */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 className="w-full h-48 object-cover"
//                 src="https://i0.wp.com/netzeroindia.org/wp-content/uploads/2025/03/netzero_ev.jpg"
//                 alt="EV Charging"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   UP EV CHARGING INFRASTRUCTURE POLICY
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Second Row - 2 Policies */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Policy Card 3 */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 className="w-full h-48 object-cover"
//                 src="data:image/jpeg;base64,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"
//                 alt="EV Green Policy"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   GREEN HYDROGEN POLICY 2024 FOR EVS
//                 </h3>
//               </div>
//             </div>

//             {/* Policy Card 4 */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 className="w-full h-48 object-cover"
//                 src="data:image/jpeg;base64,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"
//                 alt="EV Charging"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   EV INFRASTRUCTURE DEVELOPMENT POLICY
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - EV Portals with Enhanced Styling */}

        
//         <div className="w-[50%] h-full">
//                   <h1 class=" text-green-600 text-3xl font-extrabold tracking-wider text-center relative uppercase ">
//     <span className="text-orange-700">Our</span> Portals
//   </h1>
//         <div className="space-y-8 p-8 bg-yellow-50 rounded-lg shadow-xl mt-17">
                 
//           {/* First Row - 2 Portals */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
//             {/* Portal Card 1 */}
//             <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center justify-between">
//               <span className="font-semibold text-gray-800">UP EV Charging Portal</span>
//               <button className="bg-green-500 text-white p-2 rounded-full">
//                 <span>→</span>
//               </button>
//             </div>

//             {/* Portal Card 2 */}
//             <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center justify-between">
//               <span className="font-semibold text-gray-800">UP EV Purchase Portal</span>
//               <button className="bg-green-500 text-white p-2 rounded-full">
//                 <span>→</span>
//               </button>
//             </div>
//           </div>

//           {/* Second Row - 2 Portals */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Portal Card 3 */}
//             <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center justify-between">
//               <span className="font-semibold text-gray-800">UP EV Subsidy Portal</span>
//               <button className="bg-green-500 text-white p-2 rounded-full">
//                 <span>→</span>
//               </button>
//             </div>

//             {/* Portal Card 4 */}
//             <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center justify-between">
//               <span className="font-semibold text-gray-800">EV Maintenance Portal</span>
//               <button className="bg-green-500 text-white p-2 rounded-full">
//                 <span>→</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EVPolicyAndPortals;

import React, { useEffect, useState } from "react";
import { FaPlug, FaShoppingCart, FaRegCheckCircle, FaTools } from "react-icons/fa";
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { Link } from "react-router-dom";

const EVPolicyAndPortals = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const top = window.scrollY;
    const section = document.getElementById("scroll-section");
    if (section) {
      const offset = section.offsetTop - window.innerHeight + 200;
      if (top > offset) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pl-6">
      {/* Main Div for Policies and Portals */}
      <div className="flex justify-between items-center w-full h-full">

        {/* Left Side - Policies Section */}
        <motion.div
          id="scroll-section"
          className="w-[50%] h-full"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-extrabold text-center mb-12 tracking-widest text-green-700">
            <span className="text-orange-700">Our</span> Policies
          </h1>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-6">
            {/* Policy Card 1 */}
            <motion.div
              className="h-[250px] relative bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500"
                src="https://c7.alamy.com/comp/2XMW5NR/los-angeles-united-states-29th-july-2024-an-all-electric-police-vehicle-made-by-tesla-is-unveiled-during-a-press-conference-at-south-pasadena-city-hall-in-south-pasadena-photo-by-ringo-chiusopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2XMW5NR.jpg"
                alt="EV Policy"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-700 transition-all duration-300 ">UP ELECTRIC VEHICLE POLICY 2022 & GO'S</h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            </motion.div>

            {/* Policy Card 2 */}
            <motion.div
              className="h-[250px] relative bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500"
                src="https://i0.wp.com/netzeroindia.org/wp-content/uploads/2025/03/netzero_ev.jpg"
                alt="EV Charging"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-700 transition-all duration-300 mb-4">UP EV CHARGING INFRASTRUCTURE POLICY</h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            </motion.div>
          </div>

          {/* Policy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <motion.div
              className="h-[250px] relative bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500"
                src="/policies/getOne.avif"
                alt="Green Hydrogen Policy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-700 transition-all duration-300 mb-4">GREEN HYDROGEN POLICY 2024 FOR EVS</h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            </motion.div>

            {/* Policy Card 4 */}
            <motion.div
              className="h-[250px] relative bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500"
                src="/policies_forth.jpeg"
                alt="EV Infrastructure Development"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-700 transition-all duration-300 mb-4">EV INFRASTRUCTURE DEVELOPMENT POLICY</h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - EV Portals Section */}
        <motion.div
          className="w-[50%] relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 p-10 text-white"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/1600x900/?electric-vehicles")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-extrabold text-center mb-12 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            <span className="text-orange-600">Our</span> Portals
          </h1>

          <div className="space-y-12 p-8 bg-opacity-75 bg-white rounded-xl shadow-xl mt-12 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Portal Card 1 */}
              <a href="https://invest.up.gov.in/">
                <motion.div
                  className="group relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-opacity-50 rounded-xl group-hover:bg-opacity-80 transition-all"></div>
                  <div className="z-10 flex justify-between items-center mb-6">
                    <span className="font-semibold text-2xl uppercase">invest up</span>
                    <FaPlug className="text-4xl group-hover:scale-110 transition-all" />
                  </div>
                  <p className="group-hover:text-yellow-200 transition-all text-lg">
                    Uttar Pradesh, with its inherent strengths, present demographics and future 
                  </p>
                  <button className="absolute bottom-4 right-4 bg-green-600 text-white p-4 rounded-full transform transition-all group-hover:bg-green-700 hover:scale-110">
                    →
                  </button>
                </motion.div>
              </a>

              {/* Portal Card 2 */}
              <a href="https://upneda.org.in/Index">
                <motion.div
                  className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-opacity-50 rounded-xl group-hover:bg-opacity-80 transition-all"></div>
                  <div className="z-10 flex justify-between items-center mb-6">
                    <span className="font-semibold text-2xl">UPNEDA</span>
                    <FaShoppingCart className="text-4xl group-hover:scale-110 transition-all" />
                  </div>
                  <p className="group-hover:text-yellow-200 transition-all text-lg">
                    Energy demand has been increasing steadily along with the development of the state.
                  </p>
                  <button className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full transform transition-all group-hover:bg-blue-700 hover:scale-110">
                    →
                  </button>
                </motion.div>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Portal Card 3 */}
              <a href="https://uppcl.org/uppcl/hi/">
                <motion.div
                  className="group relative bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-opacity-50 rounded-xl group-hover:bg-opacity-80 transition-all"></div>
                  <div className="z-10 flex justify-between items-center mb-6">
                    <span className="font-semibold text-2xl uppercase">uppcl</span>
                    <FaRegCheckCircle className="text-4xl group-hover:scale-110 transition-all" />
                  </div>
                  <p className="group-hover:text-yellow-200 transition-all text-lg">
                    It is the responsibility of UPPCL to supply managed, useful 
                  </p>
                  <button className="absolute bottom-4 right-4 bg-yellow-600 text-white p-4 rounded-full transform transition-all group-hover:bg-yellow-700 hover:scale-110">
                    →
                  </button>
                </motion.div>
              </a>

              {/* Portal Card 4 */}
              <a href="https://niveshmitra.up.nic.in/">
                <motion.div
                  className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-opacity-50 rounded-xl group-hover:bg-opacity-80 transition-all"></div>
                  <div className="z-10 flex justify-between items-center mb-6">
                    <span className="font-semibold text-2xl uppercase">niveshmitra</span>
                    <FaTools className="text-4xl group-hover:scale-110 transition-all" />
                  </div>
                  <p className="group-hover:text-yellow-200 transition-all text-lg">
                    Maintenance and support for electric vehicles.
                  </p>
                  <button className="absolute bottom-4 right-4 bg-red-600 text-white p-4 rounded-full transform transition-all group-hover:bg-red-700 hover:scale-110">
                    →
                  </button>
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div> 
      </div>
    </div>
  );
};

export default EVPolicyAndPortals;
