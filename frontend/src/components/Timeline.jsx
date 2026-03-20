import React from "react";

const data = [
  {
    title: "MERN Stack Developer",
    company: "Nexus Digitalia",
    year: "2025 - 2026 Present",
    desc: "Developed full-stack applications with authentication, APIs, and role-based access.",
  },
  {
    title: "Frontend Developer",
    company: "Clarisco",
    year: "2023 - 2025",
    desc: "Built responsive UI using React, Redux, and integrated REST APIs.",
  },
  {
    title: "MERN Certification",
    company: "Entri Elevate",
    year: "2025 - 2026",
    desc: "Hands-on training in MongoDB, Express, React, Node.",
  },
  {
    title: "B.E Mechanical Engineering",
    company: "KLN College",
    year: "2019 - 2022",
    desc: "CGPA: 7.96",
  },
];

function Timeline() {
  return (
    <div className="section  py-5" style={{background:"black"}} id="experience">
      <div className="container">
        <h2 className="my-5 text-center" data-aos="fade-up">
  <span style={{ color: "white" }}>Professional</span>{" "}
  <span style={{ color: "rgb(1, 238, 255)" }}>Experience & Education</span>
</h2>

<p
  className="text-center text-white mb-5"
  data-aos="fade-up"
  data-aos-delay="200"
  style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}
>
  A summary of my professional journey, including hands-on experience in full-stack development,
  industry-level projects, and technical certifications. This section highlights<strong style={{color:"rgb(255, 42, 134)"}}> My Work Experience </strong>,
  MERN stack expertise, and academic background, showcasing my ability to build scalable applications
  and adapt to real-world development environments.
</p>
        <div className="timeline">

          {data.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-content card-custom">
                <h5 style={{color:"rgb(1, 238, 255)"}}>{item.title}</h5>
                <small style={{color:"white"}}>{item.company} | {item.year}</small>
                <p className="mt-2" style={{color:"white"}}>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Timeline;