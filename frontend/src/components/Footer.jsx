import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3">
      <div className="container">

        <div className="row text-center text-md-start align-items-center">

         
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold" style={{ color: "#01eeff" }}>
              Pandiyarajan M
            </h5>
          </div>

          
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <p className="mb-0 fw-bold" style={{ fontSize: "18px" }}>
              Frontend Developer | MERN Stack Developer
            </p>
          </div>

        
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 social-icons">
              
              <a
                href="https://github.com/pandiyamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/pandiya-rajan-708832272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaLinkedin size={28} />
              </a>

            </div>
          </div>

        </div>

      
        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        

      </div>
    </footer>
  );
}

export default Footer;