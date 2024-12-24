import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TourismCards.css';

 
const TourismCards = () => {
  // Array with 10 card data (image URL, title, and external link)
  const cardData = [
    { title: "Varanasi", image: "/assets/cards/varanasi.jpg", link: "https://www.tourmyindia.com/states/uttarpradesh/varanasi.html" },
    { title: "Kedarnath", image: "/assets/cards/kedarnath.jpg", link: "https://www.tourmyindia.com/chardham/kedarnath-dham.html" },
    { title: "Badrinath", image: "/assets/cards/badrinath.jpg", link: "https://www.tourmyindia.com/chardham/kedarnath-dham.html" },
    { title: "Ayodhya", image: "/assets/cards/Ayodhya.jpg", link: "https://www.tourmyindia.com/states/uttarpradesh/ayodhya.html" },
    { title: "Rishikesh", image: "/assets/cards/rishikesh.jpeg", link: "https://www.tourmyindia.com/states/uttarakhand/rishikesh.html" },
    { title: "Dwarka", image: "/assets/cards/dwarka.jpg", link: "https://www.tourmyindia.com/pilgrimage/dwarka.html" },
    { title: "Madurai", image: "/assets/cards/madurai.jpg", link: "https://www.tourmyindia.com/pilgrimage/madurai-meenakshi-temple.html" },
    { title: "Puri jagannath", image: "/assets/cards/puri.jpg", link: "https://www.tourmyindia.com/pilgrimage/puri.html" },
    { title: "golden-temple", image: "/assets/cards/golden-temple.webp", link: "https://www.tourmyindia.com/pilgrimage/golden-temple.html" },
    { title: "Rameswaram", image:"/assets/cards/rameswaram1.jpg", link: "https://www.tourmyindia.com/pilgrimage/rameswaram.html" },
    { title: "Arthunkal-church", image: "/assets/cards/arthunkal-church.webp", link: "https://www.tourmyindia.com/states/kerala/arthunkal-church.html" },
    { title: "Bhimashankar  ", image:"/assets/cards/bhimshankar.webp", link: "https://www.tourmyindia.com/pilgrimage/bhimshankar-temple.html" }
  ];

  // Function to chunk the card data into groups of 4
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(cardData, 4); // Split the cardData into rows of 4 cards

  return (
    <div className="container py-4">
      <h2 id='tittle'>Popular Hindu Pilgrimage
      Sites in India</h2>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {/* Add text between rows */}
          {rowIndex > 0 && (
            <div className="text-center py-3">
             {/*  <h3>hellooo</h3>
              <p>This is some text between row {rowIndex} and {rowIndex + 1}.</p> */}
            </div>
          )}

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {row.map((card, index) => (
              <div className="col" key={index}>
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-img-container">
                    <img src={card.image} className="card-img-top" alt={`Image for ${card.title}`} />
                    <a href={card.link} className="tourism-link position-absolute bottom-0 start-0 p-3" target="_blank" rel="noopener noreferrer">
                      {card.title}
                    </a>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourismCards;
