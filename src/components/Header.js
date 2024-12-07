import React, { useEffect, useState } from "react";


function Header() {
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
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeImage, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      id="header"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    ></header>
  );
}

export default Header;
