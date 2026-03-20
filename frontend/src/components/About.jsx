import React from "react";

function About() {
  return (
    <div className="section section-02" style={{background:"black"}} id="about">
      <div className="container">
        <div className="row align-items-center py-4">

         
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0" data-aos="fade-right">
            <img className="images-01" src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/07/christin-hume-mfb1b1s4smc-unsplash.jpg"  alt="profile"/>

          </div>

        
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div data-aos="fade-up">
             <h2 className="fw-bold mb-3 text-white">About <span style={{color:"rgb(1, 238, 255)"}}> Me</span></h2>
             <h3 className="text-white my-4">
              Frontend Developer <span style={{color:"rgb(1, 238, 255)"}}>| MERN Stack Developer</span>
            </h3>
            <p style={{color:"white"}}>
              <strong style={{color:"rgb(255, 42, 134)"}}> React JS </strong> Developer with <strong style={{color:"rgb(255, 42, 134)"}}> 2+ years of experience </strong> 
              in building scalable and responsive web applications using 
              React.js and Next.js.
            </p>

            <p style={{color:"white"}}>
              Strong expertise in <strong>Hooks, Redux, and performance optimization</strong>. 
              Experienced in backend development using <strong style={{color:"rgb(255, 42, 134)"}}> Node.js,</strong><strong style={{color:"rgb(255, 42, 134)"}}> Express.js,</strong> 
              and <strong style={{color:"rgb(255, 42, 134)"}}> MongoDB </strong> for full-stack applications.
            </p>

            <p style={{color:"white"}}>
              Passionate about creating clean UI, writing maintainable code, 
              and delivering high-quality user experiences.
            </p>

            
            <div className="mt-3">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-secondary me-2">Node.js</span>
              <span className="badge bg-success me-2">MongoDB</span>
              <span className="badge bg-warning text-dark">Next.js</span>
            </div>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;