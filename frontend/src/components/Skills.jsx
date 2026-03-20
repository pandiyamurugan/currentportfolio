import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiRedux, SiNextdotjs, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "React", value: 90, icon: <FaReact /> },
  { name: "JavaScript", value: 85, icon: <FaJs /> },
  { name: "CSS", value: 80, icon: <FaCss3Alt /> },
  { name: "Node.js", value: 80, icon: <FaNodeJs /> },
  { name: "MongoDB", value: 75, icon: <SiMongodb /> },
  { name: "Redux", value: 80, icon: <SiRedux /> },
  { name: "Next.js", value: 75, icon: <SiNextdotjs /> },
  { name: "Bootstrap", value: 85, icon: <SiBootstrap /> },
  { name: "Git", value: 85, icon: <FaGitAlt /> },
];

function Skills() {
  const [active, setActive] = useState(skills[0]);

  return (
    <div className="section section-05 position-relative py-4" id="skills">

      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-12 col-md-6 text-LEFT mb-4 mb-md-0" data-aos="fade-right">

  
<div data-aos="fade-up">
  <h2 className="mb-3 text-white">
  Technical <span style={{color:"rgb(1, 238, 255)"}}>Skills</span>
</h2>

<p style={{color:"white", margin:"0 auto"}}>
  I specialize in building modern web applications using the <strong style={{color:"rgb(255, 42, 134)"}}>MERN STACK</strong>, creating clean and responsive UIs, and developing scalable backend systems. I have strong knowledge in backend development and have worked on multiple tasks involving <strong style={{color:"rgb(255, 42, 134)"}}> Node.js,</strong><strong style={{color:"rgb(255, 42, 134)"}}> MongoDB, </strong>and <strong style={{color:"rgb(255, 42, 134)"}}> Express.js </strong>. I have experience handling complex projects in team environments, including my work at Elevate Coaching, as well as contributions to my personal projects where I implemented full-stack solutions. My expertise spans both frontend and backend, ensuring efficient, maintainable, and high-performing applications.
</p>
</div>
 
  <div  className="my-4"style={{ width: 100}}>
    <CircularProgressbar
    style={{color:"white"}}
      value={active.value}
      text={`${active.value}%`}
    />
    <h5 className="mt-3 text-center text-white activate-skill-name" >{active.name}</h5>
  </div>

</div>

         
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="row">
              {skills.map((s, i) => (
                <div
                  key={i}
                  
                  className="col-4 mb-3"
                  onClick={() => setActive(s)}
                >
                  <div
                  style={{border:"2px solid red"}}
                    className={`skill-card skill-icons text-center ${
                      active.name === s.name ? "active-skill" : ""
                    }`}
                  >
                    <div className="icon mb-2" style={{color:"red",fontSize:"40px"}}>{s.icon}</div>
                    <small className="fw-bold skills-rel-name" >{s.name}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;