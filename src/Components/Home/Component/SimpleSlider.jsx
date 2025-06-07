// import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function SimpleSlider() {
//   // Slider settings
//   var settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Loop the slider infinitely
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Show 1 slide at a time
//     slidesToScroll: 1, // Scroll 1 slide at a time
//     autoplay: true, // Automatically slide
//     autoplaySpeed: 4000, // Slide every 4 seconds
//     nextArrow: <SampleNextArrow />, // Custom right arrow
//     prevArrow: <SamplePrevArrow />, // Custom left arrow
//   };

//   // Custom right arrow for navigation
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} absolute z-20 top-1/2 right-5 transform -translate-y-1/2 bg-black p-3 rounded-full text-white cursor-pointer`}
//         style={{ ...style }}
//         onClick={onClick}
//       >
//         <i className="fas fa-chevron-right"></i>
//       </div>
//     );
//   }

//   // Custom left arrow for navigation
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} absolute top-1/2 left-5 transform -translate-y-1/2 bg-green-700 p-3 rounded-full text-white cursor-pointer`}
//         style={{ ...style }}
//         onClick={onClick}
//       >
//         <i className="fas fa-chevron-left"></i>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-96">
//       {/* Profile Section (absolute over the slider) */}
//       <div className="absolute  h-52 inset-0 flex flex-col items-end justify-between gap-64 z-10 space-x-8 bg-opacity-50  px-6 py-8">
//         {/* CM Yogi Adityanath Profile */}
//         <div className="flex items-center bg-green-700 space-x-4  p-4 rounded-full shadow-xl">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQQLlA-EDpH3ucf9ZpqbuicYtnYRo5u4pD4JHGIfBKQzaFsFULM3-oJ-nKYzeZB2BzC-0f6TYNAwiPXUxU"
//             alt="CM Yogi Adityanath"
//             className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
//           />
//           <div className="text-left">
//             <h3 className="text-2xl font-semibold  text-white uppercase">Yogi Adityanath</h3>
//             <p className="text-lg  text-white">Hon'ble Chief Minister, Uttar Pradesh</p>
//             <p className=" text-white mt-2 max-w-xs">
//               Yogi Adityanath is the current Chief Minister of Uttar Pradesh, leading initiatives to promote development, education, and infrastructure across the state.
//             </p>
//           </div>
//         </div>

//         {/* Ak Sharma Profile */}
//         <div className="flex items-center bg-green-700 space-x-4  p-4 rounded-full shadow-xl">
//           <img
//             src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYTKxn5hzkXWZzNRdscnQNoTrD5WWjDvy4XNYrkzis94X7C78WsDFXf0JbdElZgHPdjDwR0bul2giYoeY-5qQO8w"
//             alt="Ak Sharma"
//             className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
//           />
//           <div className="text-left">
//             <h3 className="text-2xl font-semibold text-white uppercase">Ak Sharma</h3>
//             <p className="text-lg  text-white">Hon'ble Minister, Uttar Pradesh</p>
//             <p className=" text-white mt-2 max-w-xs">
//               Ak Sharma is the Hon'ble Minister in the Government of Uttar Pradesh, known for his contribution to governance, social welfare, and policy-making.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Image Slider Section */}
//       <Slider {...settings}>
//         <div>
//           <div
//             className="relative bg-cover bg-center h-screen"
//             style={{
//               backgroundImage: "url('Banner_Images/electric-vehicle-parking.jpg')",
//             }}
//           >
//             <div className="absolute inset-0 bg-opacity-50"></div>
//             <div className="container relative z-10 flex justify-center items-center h-full"></div>
//           </div>
//         </div>
//         <div>
//           <div
//             className="relative bg-cover bg-center h-screen"
//             style={{
//               backgroundImage:
//                 "url('Banner_Images/ChatGPT Image Jun 6, 2025, 12_54_00 PM.png')",
//             }}
//           >
//             <div className="absolute inset-0 bg-opacity-50"></div>
//             <div className="container relative z-10 flex justify-center items-center h-full"></div>
//           </div>
//         </div>
//         <div>
//           <div
//             className="relative bg-cover bg-center h-screen"
//             style={{
//               backgroundImage:
//                 "url('Banner_Images/ev-electric-car-vehicle-charging-sustainable-lca-green-energy-esg-technology (1).jpg')",
//             }}
//           >
//             <div className="absolute inset-0 bg-opacity-50"></div>
//             <div className="container relative z-10 flex justify-center items-center h-full"></div>
//           </div>
//         </div>
//         <div>
//           <div
//             className="relative bg-cover bg-center h-screen"
//             style={{
//               backgroundImage:
//                 "url('Banner_Images/ev-electric-car-vehicle-charging-sustainable-lca-green-energy-esg-technology.jpg')",
//             }}
//           >
//             <div className="absolute inset-0 bg-opacity-50"></div>
//             <div className="container relative z-10 flex justify-center items-center h-full"></div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }


import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  // Slider settings
  var settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slider infinitely
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 4000, // Slide every 4 seconds
    nextArrow: <SampleNextArrow />, // Custom right arrow
    prevArrow: <SamplePrevArrow />, // Custom left arrow
  };

  // Custom right arrow for navigation
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute z-20 top-1/2 right-5 transform -translate-y-1/2 bg-black p-3 rounded-full text-white cursor-pointer`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  // Custom left arrow for navigation
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 left-5 transform -translate-y-1/2 bg-green-700 p-3 rounded-full text-white cursor-pointer`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  return (
    <div className="relative z-0 ">





{/* Profile Section (absolute over the slider) */}


<div className="absolute  right-0     flex flex-col items-center justify-center gap-12 z-10  bg-opacity-50 px-6 py-8">
  {/* CM Yogi Adityanath Profile */}
  <div className=" bg-white flex items-center space-x-4 p-2 rounded-full shadow-2xl transition-all w-96 "   style={{
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  }}>
    <img
      src="https://upneda.org.in/MediaGallery/StaffDirectory/Yogi_Adityanath.png"
      alt="CM Yogi Adityanath"
      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
    />
    <div className="text-left">
      <h3 className="text-xl font-semibold text-black uppercase ">Yogi Adityanath</h3>
      <p className="text-md text-black">Hon'ble Chief Minister, Uttar Pradesh</p>
      {/* <p className="text-black mt-2 max-w-xs text-sm ">
        Yogi Adityanath is the current Chief Minister of Uttar Pradesh, leading initiatives to promote development, education, and infrastructure across the state.
      </p> */}
    </div>
  </div>

  {/* Ak Sharma Profile */}
   <div className="bg-white flex items-center space-x-4 p-2 rounded-full shadow-2xl transition-all hover:scale-105 w-96 "   style={{
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  }}>
    <img
      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYTKxn5hzkXWZzNRdscnQNoTrD5WWjDvy4XNYrkzis94X7C78WsDFXf0JbdElZgHPdjDwR0bul2giYoeY-5qQO8w"
      alt="Ak Sharma"
      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
    />
    <div className="text-left">
      <h3 className="text-xl font-semibold text-black uppercase">Ak Sharma</h3>
      <p className="text-md text-black">Hon'ble Minister, Uttar Pradesh</p>
      {/* <p className="text-black mt-2 max-w-xs text-sm">
        Ak Sharma is the Hon'ble Minister in the Government of Uttar Pradesh, known for his contribution to governance, social welfare, and policy-making.
      </p> */}
    </div>
  </div>

  {/* Dr. Somendra Tomar Profile */}
  <div className="bg-white flex items-center space-x-4 p-2 rounded-full shadow-2xl transition-all w-96 "   style={{
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  }}>
    <img
      src="https://upneda.org.in/MediaGallery/StaffDirectory/Somendra_Tomer_ji.png"
      alt="Dr. Somendra Tomar"
      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
    />
    <div className="text-left">
      <h3 className="text-xl font-semibold text-black uppercase">Dr. Somendra Tomar</h3>
      <p className="text-md text-black">Hon'ble Minister, Uttar Pradesh</p>
      {/* <p className="text-black mt-2 max-w-xs text-sm">
        Dr. Somendra Tomar, Additional Sources of Energy, is the Hon'ble Minister in the Government of Uttar Pradesh, known for his contribution to governance, social welfare, and policy-making.
      </p> */}
    </div>
  </div>
</div>






      {/* Image Slider Section */}
      <Slider {...settings} className="slider-container">
        <div>
          

          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage: "url('Banner_Images/main.png')",
              height: "700px", // Set height for each slide
            }}
          >
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="container relative z-10 flex justify-center items-center h-full"></div>
          </div>
        </div>
        <div>
          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('Banner_Images/ChatGPT Image Jun 6, 2025, 12_54_00 PM.png')",
              height: "700px", // Set height for each slide
            }}
          >
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="container relative z-10 flex justify-center items-center h-full"></div>
          </div>
        </div>
        <div>
          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('Banner_Images/ev-electric-car-vehicle-charging-sustainable-lca-green-energy-esg-technology (1).jpg')",
              height: "700px", // Set height for each slide
            }}
          >
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="container relative z-10 flex justify-center items-center h-full"></div>
          </div>
        </div>
        <div>
          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('Banner_Images/ev-electric-car-vehicle-charging-sustainable-lca-green-energy-esg-technology.jpg')",
              height: "700px", // Set height for each slide
            }}
          >
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="container relative z-10 flex justify-center items-center h-full"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
