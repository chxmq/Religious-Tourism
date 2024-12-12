import React, { useEffect, useState } from "react";

function Header({ showImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/images/ladakh.jpg",
    "/assets/images/himalay1.jpg",
    "/assets/images/tajmahal2.jpg",
    "/assets/images/himalay2.jpg",
    "/assets/images/mysore.jpg",
    "/assets/images/tajmahal1.jpg",
    "/assets/images/temple1.jpg",
  ];

  useEffect(() => {
    if (showImages) {
      const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const interval = setInterval(changeImage, 3000);

      return () => clearInterval(interval);
    }
  }, [showImages, images.length]);

  return (
    <header
      id="header"
      style={{
        backgroundImage: showImages
          ? `url(${images[currentImageIndex]})`
          : "none", // Hide background images when false
      }}
    ></header>
  );
}

export default Header;
