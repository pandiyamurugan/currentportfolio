import React ,{useState} from "react";

import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
function Hero() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
     
         <div>

      <nav className="navbar custom-navbar fixed-top">
        <div className="container d-flex justify-content-between align-items-center">

       
          <a className="navbar-brand d-flex flex-column" href="#hero">
            <div className="d-flex align-items-center gap-2">
              <FaUserCircle size={28} />
              <span className="fw-bold text-white">Pandiyarajan M</span>
            </div>
            <small style={{ fontSize: "12px", color: "#01eeff" }}>
              Frontend Developer | MERN Stack Developer
            </small>
          </a>

       
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
          </div>

        
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certification">Certification</a></li>
          </ul>

        </div>
      </nav>

    </div>

      <div className="section section-01" id="hero">
        <div className="container">
          <div className="row align-items-center justify-content-between py-4 g-4">

            <div
              className="col-12 col-md-5 text-center mt-4 mt-md-0 order-1 order-md-2"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <img
                className="images-01"
                src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-95808.jpg"
                alt="Profile"
              />
            </div>

          
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center order-2 order-md-1">
              <h2 className="fw-bold text-white" data-aos="fade-up">
                Hello it's Me
              </h2>

              <h1 className="fw-bold all-btn" data-aos="fade-up" data-aos-delay="200">
                Pandiyarajan M
              </h1>

              <h3 className="text-white my-2" data-aos="fade-up" data-aos-delay="400">
                Frontend Developer | MERN Stack Developer
              </h3>

             <p className="mt-2 text-white" data-aos="fade-up" data-aos-delay="600">
  <span className="fw-bold" style={{ color: "rgb(255, 42, 134)" }}>
    React JS Developer with 2+ years of experience
  </span>{" "}
  building scalable and responsive web applications.
  <br /><br />
  Skilled in developing full-stack applications using{" "}
  <span className="fw-bold" style={{ color: "rgb(255, 42, 134)" }}>
    MERN Stack (MongoDB, Express.js, React, Node.js)
  </span>.

  <br /><br />

  Strong hands-on experience in:
</p>

{/* 🔥 Skills Highlight Section */}
<div className="d-flex flex-wrap gap-2 mt-2 mb-2">

  <span className="skill-badge">React.js</span>
  <span className="skill-badge">Next.js</span>
  <span className="skill-badge">Redux</span>
  <span className="skill-badge">JavaScript</span>

  <span className="skill-badge">Node.js</span>
  <span className="skill-badge">Express.js</span>
  <span className="skill-badge">MongoDB</span>

  <span className="skill-badge">Bootstrap</span>
  <span className="skill-badge">Tailwind CSS</span>

</div>

              {/* Links */}
              <div className="mt-3" data-aos="fade-up" >
                <a
                  href="https://github.com/pandiyamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="all-link-btns-01 me-2"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/pandiya-rajan-708832272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="all-link-btns"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;