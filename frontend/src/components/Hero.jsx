import React from "react";

function Hero() {
  return (
    <div className="section section-01" id="hero">
      <div className="container">
        <div className="row align-items-center justify-content-between py-4 ">
        

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

            <h2 
              className="fw-bold text-white"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Hello it's Me
            </h2>

            <h1 
              className="fw-bold all-btn"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Pandiyarajan M
            </h1>

            <h3 
              className="text-white my-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Frontend Developer | MERN Stack Developer
            </h3>

            <p 
  className="mt-3 text-white"
  data-aos="fade-up"
  data-aos-delay="600"
>
  <span className="fw-bold" style={{color:"rgb(255, 42, 134)"}}> React JS Developer with 2+ years of experience </span> 
  building scalable and responsive web applications using modern frontend technologies.
  <br /><br />

  Hands-on experience in <span className="fw-bold" style={{color:"rgb(255, 42, 134)"}}> MERN Stack development </span> through 
  real-world project implementation, including an 
  <span className="fw-bold" style={{color:"rgb(255, 42, 134)"}}> E-commerce Product Management System </span> built using 
  MongoDB, Express.js, React, and Node.js.
  <br /><br />

  Successfully completed <span className="fw-bold" style={{color:"rgb(255, 42, 134)"}}> MERN Stack training </span> at 
  Entri Elevate Coaching Center, with strong understanding of 
  <span className="fw-bold" style={{color:"rgb(255, 42, 134)"}}> API development, authentication, and database integration </span>.
</p>

            <div 
              className="mt-3"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                href="https://github.com/pandiyamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="all-link-btns-01"
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
  );
}

export default Hero;