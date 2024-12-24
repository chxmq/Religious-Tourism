import React, { useEffect, useState } from "react";

<<<<<<< HEAD
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
=======

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/images/five.jpg",
    "/assets/images/one.webp",
    "/assets/images/four.avif",
    "/assets/images/goldentemple.jpg",
    "/assets/images/two.jpg",
    "/assets/images/seven.jpg",
    "/assets/images/religious-tour-packages33.jpg",
    "/assets/images/himalay1.jpg",
    "/assets/images/tajmahal2.jpg",
    "/assets/images/three.avif",
    "/assets/images/six.jpg",
   "/assets/images/three.avif",
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
    <div>
    <header
      id="header"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    ></header>

<div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
  <div
    style={{
      display: "flex",
      flexDirection: "row", // Side-by-side layout
      justifyContent: "space-between", // Space between the two divs
      alignItems: "flex-start", // Align items to the top
      width: "100%",
      padding: "0 50px" // Optional padding to add space on the sides
    }}
  >
    {/* First div (left) */}
    <div
      style={{
        width: "auto", // Adjust width to fit the content
        height:"100%",
        textAlign: "left",
        color: "#ff6612",
        paddingTop:"100px",
        lineHeight:"20px",
        fontSize:"500px"
      }}
    >
      <h1>Explore faith, culture, <br></br>and history through<br></br> Religious Tourism <br></br>experiences in India.</h1>
    </div>

    {/* Second div (right) */}
    <div
      style={{
        width: "50%", // Adjust width to fit the content
        textAlign: "left",
      }}
    >
      <p>
        India, a big country, has been a land where many religions have flourished for years and centuries. A number of these religions have originated here, with many others finding their way to the country from across the world. With an abundance of religious places to travel, India is the perfect destination for pilgrimage tourism. Not only attracting dedicated devotees, these holy places in India also bring in tourists from all over the world who come to the country on their journey of spiritual tourism. From temples, to shrines, mosques, and churches, India has pilgrimage destinations belonging to multiple religions. A pilgrimage tour, unlike other tours, does not involve much adventure and chaos, but rather, offers a chance to slow down and reflect on oneself. Although, depending on the pilgrimage destination, the journey may turn out to be challenging, with greater rewards at the end. India, primarily has followers of religions of Hinduism, Buddhism, Jainism, Sikhism, Christianity, and Islam, among others, sites of which provide visitors a relaxing and serene atmosphere. Out of these, the Indian subcontinent has been blessed with the origin and development of Hinduism, Buddhism, Jainism, and Sikhism, over centuries, leading to their spread across the world, with Christianity and Islam, having made themselves home here, accumulating ardent devotees for them as well.
      </p>
    </div>
  </div>
</div>

      </div>
      
>>>>>>> 5ac5a10 (first commit)
  );
}

export default Header;
