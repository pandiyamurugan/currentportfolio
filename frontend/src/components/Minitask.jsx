import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function ProjectsSection() {

  const projects = [
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.yoPhqDW6A3Z_ofFGHku1pgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.4&o=7&rm=3",
      title: "Project 1",
      desc: "Backend Personal Task Manager"
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.yoPhqDW6A3Z_ofFGHku1pgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.4&o=7&rm=3",
      title: "Project 2",
      desc: "Backend Simple Inventory Management"
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.yoPhqDW6A3Z_ofFGHku1pgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.4&o=7&rm=3",
      title: "Project 3",
      desc: "Backend Database Task"
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.yoPhqDW6A3Z_ofFGHku1pgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.4&o=7&rm=3",
      title: "Project 4",
      desc: "Backend Ecommerce Product Dashboard"
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.yoPhqDW6A3Z_ofFGHku1pgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.4&o=7&rm=3",
      title: "Project 5",
      desc: "Backend Customer Relationship Management"
    },
  ];

  return (
    <section className="section section-projects py-5" id="certification">

      <div className="container">

        <h2 className="text-center text-white mb-4" data-aos="fade-up">
          Entri Elevate{" "}
          <span style={{ color: "rgb(1, 238, 255)" }}>
            Experience
          </span>
        </h2>

        <p className="text-white text-center mb-5" style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.7" }} data-aos="fade-up" data-aos-delay="200" > I successfully completed a <strong style={{color:"rgb(255, 42, 134)"}}> MERN STACK Development </strong>program at Elevate Coaching Center, where I built a strong foundation in full-stack web development. <br /><br /> Throughout the course, I completed several practical assignments and mini projects that focused on both frontend and backend development. These projects involved building different types of applications, where I worked on API development, database integration, authentication, and server-side logic. <br /><br /> As part of my hands-on training, I developed a full-stack <strong style={{ color: "rgb(255, 42, 134)" }}> "LOCAL EVENTS HUB - smart Event Discovery & Recommendation Platform" </strong> project, where I implemented features such as event creation, user interaction, and data handling using MongoDB, Express.js, React, and Node.js. <br /><br /> This experience enhanced my ability to design, develop, and deploy scalable web applications while working on real-world development scenarios. </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="project-card text-center p-3">

                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />

                <h5
                className="fw-bold"
                  style={{
                    color: "rgb(1, 238, 255)",
                    marginTop: "15px",
                  }}
                >
                  {project.title}
                </h5>

                <p className="fw-bold" style={{ color: "white" }}>
                  {project.desc}
                </p>

                <p style={{ color: "white", fontSize: "14px" }}>
                  Assignment / Mini Project
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}