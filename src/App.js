import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Timings from "./pages/Timings";
import Itinerary from "./pages/Itinerary";
import Chatbox from "./components/Chatbox";
import Chat from "./pages/Chat";
import TourismCards from "./components/TourismCards";

function App() {
  return (
    <Router>
      <Navbar />  {/* Include the Header component here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header showImages={true} />  {/* Pass prop to show images */}
              <TourismCards />} /> {/* Directly render TourismCards */}
              <Home />
            </>
          }
        />
        <Route 
          path="/booking" 
          element={
            <>
              <Header showImages={false} />
              <Booking />
            </>
          }
        />
        <Route 
          path="/timings" 
          element={
            <>
              <Header showImages={false} />
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
              <Chatbox />
            </>
          }
        />
        <Route 
          path="/Chatbox" 
          element={
            <>
              {/* Pass false to hide images */}
              <Header showImages={false} />
              <Chat />
              <Chatbox />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
