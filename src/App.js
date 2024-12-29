import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";  
import Booking from "./pages/Booking";
import Timings from "./pages/Timings";
import Itinerary from "./pages/Itinerary";
import Chatbox from "./components/Chatbox";
import TourismCards from "./components/TourismCards";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />  {/* Include the Header component here */}
      <Routes>
        <Route path="/" element={<TourismCards />} /> {/* Directly render TourismCards */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
      <Chatbox />
    </Router>
  );
}

export default App;
