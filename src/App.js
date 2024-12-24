import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";  
<<<<<<< HEAD
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Timings from "./pages/Timings";
import Itinerary from "./pages/Itinerary";
import Chatbox from "./components/Chatbox"; // Chatbox should be always visible
=======
import Booking from "./pages/Booking";
import Timings from "./pages/Timings";
import Itinerary from "./pages/Itinerary";
import Chatbox from "./components/Chatbox";
import TourismCards from "./components/TourismCards";
>>>>>>> 5ac5a10 (first commit)

function App() {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header showImages={true} />  {/* Pass prop to show images */}
              <Home />
            </>
          }
        />
        <Route 
          path="/booking" 
          element={
            <>
              <Header showImages={true} />
              <Booking />
            </>
          }
        />
        <Route 
          path="/timings" 
          element={
            <>
              <Header showImages={true} />
              <Timings />
            </>
          }
        />
        <Route 
          path="/itinerary" 
          element={
            <>
              {/* Pass false to hide images */}
              <Header showImages={false} />
              <Itinerary />
            </>
          }
        />
      </Routes>

      {/* Chatbox is always visible */}
=======
      <Header />  {/* Include the Header component here */}
      <Routes>
        <Route path="/" element={<TourismCards />} /> {/* Directly render TourismCards */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
>>>>>>> 5ac5a10 (first commit)
      <Chatbox />
    </Router>
  );
}

export default App;
