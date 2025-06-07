

import React, { useState } from "react";

const GallerySectionOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    { src: "/Gallery/bus.png", alt: "Image 1" },
    { src: "/Gallery/electric-car-charging-home-clean-energy-filling-technology.jpg", alt: "Image 2" },
    { src: "/Gallery/thrid.jpeg", alt: "Image 3" },
    { src: "/Gallery/forth.png", alt: "Image 4" },
    { src: "/Gallery/five.jpeg", alt: "Image 5" },
    { src: "/Gallery/six.jpeg", alt: "Image 6" },
       { src: "/Gallery/seven.jpg", alt: "Image 7" },
          { src: "/Gallery/eight.jpeg", alt: "Image 7" },
  ];

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" px-20 py-7">
      {/* Title Section */}
      <h1 className="text-green-600 text-4xl font-extrabold tracking-wider text-center relative uppercase z-10 mb-7">
    <span className="text-orange-700">Our</span> Gallery
  </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              onClick={() => openModal(image.src)}
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="text-white font-semibold text-lg"
                onClick={() => openModal(image.src)}
              >
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={currentImage} alt="Selected" className="w-full h-auto" />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-semibold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySectionOne;
