import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";  
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Timings from "./pages/Timings";
import Itinerary from "./pages/Itinerary";
import Chatbox from "./components/Chatbox";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />  {/* Include the Header component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
      <Chatbox />
    </Router>
  );
}

export default App;
