import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        
        <a className="navbar-brand d-flex flex-column align-items-start" href="#hero">
          <div className="d-flex align-items-center gap-2">
            <FaUserCircle size={28} />
            <span className="fw-bold">Pandiyarajan M</span>
          </div>

          <small style={{ fontSize: "12px", color: "#01eeff" }}>
            Frontend Developer | MERN Stack Developer
          </small>
        </a>

       
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto text-center text-lg-start ">

            <li className="nav-item">
              <a className="nav-link px-3 fw-bold" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3 fw-bold" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3 fw-bold" href="#experience">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3 fw-bold" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3 fw-bold text-capitalize" href="#certification">Certification</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;