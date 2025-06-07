// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// const ClientLogos = () => {
//   const clientLogos = [
//     { src: 'https://upneda.org.in/MediaGallery/Logo/CMO.png', alt: 'CMO' },
//     { src: 'https://upneda.org.in/MediaGallery/logo/egazette.png', alt: 'eGazette' },
//     { src: 'https://upneda.org.in/MediaGallery/Logo/Mygov.svg', alt: 'MyGov' },
//     { src: 'https://upneda.org.in/MediaGallery/Logo/mnre.png', alt: 'MNRE' },
//     { src: 'https://upneda.org.in/MediaGallery/logo/rti-icon.png', alt: 'RTI' },
//     { src: 'https://upneda.org.in/MediaGallery/logo/indiaGov.png', alt: 'IndiaGov' },
//     { src: 'https://upneda.org.in/MediaGallery/logo/gov_up.png', alt: 'Gov Up' },
//     { src: 'https://upneda.org.in/MediaGallery/logo/egazette.png', alt: 'eGazette' },
//   ];

//   return (
//     <section className="py-16 bg-green-800">
//       <div className="max-w-[96%] mx-auto px-4">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase">
//             Our Prestigious Clients<span className="dot">.</span>
//           </h2>
//         </div>

//         <Swiper
//           spaceBetween={30}
//           slidesPerView={5}
//           loop={true}
//           breakpoints={{
//             1024: {
//               slidesPerView: 5,
//             },
//             768: {
//               slidesPerView: 3,
//             },
//             480: {
//               slidesPerView: 2,
//             },
//           }}
//           className="sponsors-carousel"
//         >
//           {clientLogos.map((logo, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <div className="card bg-white shadow-xl p-6 rounded-xl hover:scale-105 transition-all duration-300">
//                 <figure className="flex justify-center">
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="w-auto h-20 object-contain hover:opacity-90 transition-opacity duration-300"
//                   />
//                 </figure>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ClientLogos = () => {
  const clientLogos = [
    { src: 'https://upneda.org.in/MediaGallery/Logo/CMO.png', alt: 'CMO' },
    { src: 'https://upneda.org.in/MediaGallery/logo/egazette.png', alt: 'eGazette' },
    { src: 'https://upneda.org.in/MediaGallery/Logo/Mygov.svg', alt: 'MyGov' },
    { src: 'https://upneda.org.in/MediaGallery/Logo/mnre.png', alt: 'MNRE' },
    { src: 'https://upneda.org.in/MediaGallery/logo/rti-icon.png', alt: 'RTI' },
    { src: 'https://upneda.org.in/MediaGallery/logo/indiaGov.png', alt: 'IndiaGov' },
    { src: 'https://upneda.org.in/MediaGallery/logo/gov_up.png', alt: 'Gov Up' },
    { src: 'https://upneda.org.in/MediaGallery/logo/egazette.png', alt: 'eGazette' },
  ];

  return (
    <section className="py-16 bg-green-800 px-10">
      <div className="max-w-[96%] mx-auto ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase">
            Our Prestigious Clients<span className="dot">.</span>
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true} // Loop the slider infinitely
          autoplay={{
            delay: 2000, // 2 seconds delay between slides
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
          }}
          className="sponsors-carousel"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="card bg-white shadow-xl p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <figure className="flex justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto h-20 object-contain hover:opacity-90 transition-opacity duration-300"
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
