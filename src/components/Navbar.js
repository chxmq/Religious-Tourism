import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


>>>>>>> 5ac5a10 (first commit)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand" href="/home" id="nav-tittle">Religious Tourism</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/booking">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/timings">
                Timings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/itinerary">
                Itinerary
              </a>
            </li>
<<<<<<< HEAD
=======
            <li className="nav-item">
              <a className="nav-link" href="/itinerary">
              <i class="fa-solid fa-bolt" id="nav-icon"></i>
                  ChatBot
              </a>
            </li>
>>>>>>> 5ac5a10 (first commit)
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
