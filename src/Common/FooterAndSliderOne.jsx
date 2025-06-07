// import React from "react";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// const FooterAndSliderOne = () => {
//   return (
//     <footer className="bg-green-800 text-white py-12 mt-1">
//       <div className="max-w-[97%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         {/* First Section: Website Info and Social Media */}
//         <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
//           <h1 className="font-bold text-2xl text-center md:text-left">Department of Additional Sources of Energy</h1>
//           <p className="text-sm text-center md:text-left">
//             Uttar Pradesh New & Renewable Energy Development Agency
//           </p>
//           <p className="text-xs text-center md:text-left">
//             This is the Official Website of Uttar Pradesh New and Renewable Energy Development Agency, Government of Uttar Pradesh, India.
//             Content on this website is published and managed by Uttar Pradesh New and Renewable Energy Development Agency, Government of Uttar Pradesh, India.
//             For any query regarding this website, Please contact the "Web Information Manager"
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 justify-center md:justify-start mt-6">
//             <a href="#" className="text-white hover:text-yellow-400">
//               <FaFacebook size={28} />
//             </a>
//             <a href="#" className="text-white hover:text-yellow-400">
//               <FaInstagram size={28} />
//             </a>
//             <a href="#" className="text-white hover:text-yellow-400">
//               <FaYoutube size={28} />
//             </a>
//           </div>
//         </div>

//         {/* Second Section: Policies */}
//         <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4 mt-8 md:mt-0">
//           <h2 className="text-lg font-semibold">Policies</h2>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-400">Accessibility Statement</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Website Policies</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Security Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Disclaimer</a></li>
//           </ul>
//         </div>

//         {/* Third Section: Support Links */}
//         <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4 mt-8 md:mt-0">
//           <h2 className="text-lg font-semibold">Support</h2>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-400">Feedback</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Sitemap</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Archive</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Help</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="border-t border-green-600 mt-4 pt-4 text-xs text-center text-gray-400">
//         <p className="mt-2">Last Update on Website : Friday, 6 June, 2025</p>
//         <span className="text-white">Visitor No. : 1264707</span>
//       </div>
//     </footer>
//   );
// };

// export default FooterAndSliderOne;


import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterAndSliderOne = () => {
  return (
    <footer className="bg-green-800 text-white py-12 mt-1">
      <div className="max-w-[97%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-48">
        {/* First Section: Website Info and Social Media */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">

         {/* Logo added here */}
        <div className="flex justify-center mb-2">
          <img 
            src="/uprev.png" 
            alt="Logo" 
            className="w-52 h-20 object-contain"
          />
        </div>
        <h1 className="font-bold text-2xl text-center md:text-left uppercase">Department of Electric Vehicle</h1>

          <p className="text-sm text-center md:text-left">
 Uttar Pradesh Renewable and EV Infrastructure Limited
          </p>
         <p className="text-xs text-center md:text-left">
  This is the Official Website of Uttar Pradesh Electric Vehicle Development Agency, Government of Uttar Pradesh, India.
  Content on this website is published and managed by Uttar Pradesh Electric Vehicle Development Agency, Government of Uttar Pradesh, India.
  For any query regarding this website, please contact the "Web Information Manager".
</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start mt-6">
            <a href="#" className="text-white hover:text-yellow-400">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        {/* Second Section: Policies */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4 mt-8 md:mt-0">
          <h2 className="text-lg font-semibold">Policies</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Accessibility Statement</a></li>
            <li><a href="#" className="hover:text-yellow-400">Website Policies</a></li>
            <li><a href="#" className="hover:text-yellow-400">Security Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Disclaimer</a></li>
          </ul>
        </div>

        {/* Third Section: Support Links */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4 mt-8 md:mt-0">
          <h2 className="text-lg font-semibold">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Feedback</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sitemap</a></li>
            <li><a href="#" className="hover:text-yellow-400">Archive</a></li>
            <li><a href="#" className="hover:text-yellow-400">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-green-600 mt-4 pt-4 text-xs text-center text-gray-400">
       
        <p className="mt-2">Last Update on Website : Friday, 6 June, 2025</p>
        <span className="text-white">Visitor No. : 1264707</span>
      </div>
    </footer>
  );
};

export default FooterAndSliderOne;
