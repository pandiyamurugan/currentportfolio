import React from "react";
import "../App.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contactform() {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <div
        className="container"
        style={{
          borderRadius: "30px",
       
        }}
      >
        <div className="row align-items-center">

         
          <div
  className="col-md-6 col-12"
  data-aos="fade-left"
  data-aos-delay="200"
>
  <div className="mt-4">

   
    <div className="d-flex align-items-start text-white mb-4 contact-item">
      <span className="icon-wrapper location me-3">
        <FaMapMarkerAlt />
      </span>
      <span>Chennai, Tamil Nadu, India</span>
    </div>

    
    <div className="d-flex align-items-start text-white mb-4 contact-item">
      <span className="icon-wrapper phone me-3">
        <FaPhoneAlt />
      </span>
      <a href="tel:+917339054742" style={linkStyle}>
        +91 7339054742
      </a>
    </div>

    
    <div className="d-flex align-items-start text-white mb-4 contact-item">
      <span className="icon-wrapper mail me-3">
        <FaEnvelope />
      </span>
      <a href="mailto:pandiyarajanmurugan00@gmail.com" style={linkStyle}>
        pandiyarajanmurugan00@gmail.com
      </a>
    </div>

   
    <div className="d-flex align-items-start text-white mb-4 contact-item">
      <span className="icon-wrapper github me-3">
        <FaGithub />
      </span>
      <a
        href="https://github.com/pandiyamurugan"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
        className="break-text"
      >
        github.com/pandiyamurugan
      </a>
    </div>

   
    <div className="d-flex align-items-start text-white mb-2 contact-item">
      <span className="icon-wrapper linkedin me-3">
        <FaLinkedin />
      </span>
      <a
        href="https://www.linkedin.com/in/pandiya-rajan-708832272/"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
        className="break-text"
      >
        linkedin.com/in/pandiya-rajan-708832272
      </a>
    </div>

  </div>
</div>
          
         
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h2 className="my-5 text-start" data-aos="fade-up">
              <span style={{ color: "white" }}>Let’s </span>
              <span style={{ color: "rgb(1, 238, 255)" }}>talk</span>
            </h2>

           <p
  className="text-start text-white mb-5"
  data-aos="fade-up"
  data-aos-delay="200"
  style={{ lineHeight: "1.7" }}
>
  I am open to <span className="fw-bold" style={{color:""}}> Frontend Developer </span> and 
  <span className="fw-bold" style={{color:""}}> MERN Stack Developer </span> opportunities.
  If you have any suitable roles or would like to discuss potential opportunities, 
  feel free to contact me using the form or reach out directly. 
  I will get back to you as soon as possible.
</p>

            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3 custom-input"
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3 custom-input"
                style={inputStyle}
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="form-control mb-3 custom-input"
                style={inputStyle}
              ></textarea>

              <button
                className="btn w-100"
                style={buttonStyle}
              >
                Send Message
              </button>
            </form>
          </div>

          

        </div>
      </div>
    </div>
  );
}

/* STYLES */

const inputStyle = {
  borderRadius: "30px",
  padding: "16px 15px",
  border: "1px solid #1390c8",
  background: "rgba(87, 144, 152, 0.42)",
  color: "white",
};

const buttonStyle = {
  background: "#6a5af9",
  color: "#fff",
  borderRadius: "30px",
  padding: "10px",
};

const iconStyle = {
  marginRight: "10px",
  color: "#01eeff",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Contactform;