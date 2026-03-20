import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    name: "BANI Telegram App",
    desc: "Rewards-based platform with daily tasks, points system, and user engagement features integrated with backend services.",
  },
  {
    name: "Bitnevex Crypto Exchange",
    desc: "Developed trading, staking, crypto loans, and portfolio management with real-time data and secure modules.",
  },
  {
    name: "Alphanics Blockchain",
    desc: "QR-based authentication platform with secure admin panel and privacy-focused collaboration features.",
  },
  {
    name: "Clarisco Website",
    desc: "SEO-optimized responsive corporate website with reusable UI components and performance optimization.",
  },
  {
    name:"Local Event Hub ",
    desc: "Full-stack MERN application for event discovery with category & location filtering, featuring authentication, REST APIs, and event booking system."
  }
 
];

export default function ProjectsSwiper() {
  return (
    <div className="section-04 position-relative py-5" id="projects">
      <div className="container py-5">
        <h2 className="text-center text-white mb-2" data-aos="fade-up">
  Professional <span style={{ color: "rgb(1, 238, 255)" }}>Work Experience Projects</span>
</h2>

<p
  className="text-center text-white mt-3 mb-4"
  data-aos="fade-up"
  data-aos-delay="200"
  style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}
>
  These are real-world projects I worked on during my professional experience at companies like <strong style={{color:"rgb(255 42 134)"}}> Clarisco </strong> and <strong style={{color:"rgb(255 42 134)"}}>
    Nexus Digitalia. </strong>
  I contributed to building full-stack applications, developing scalable backend systems, and creating modern, responsive user interfaces using the <strong style={{color:"rgb(255 42 134)"}}> MERN STACK. </strong>
</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
          className="mySwiper"
          style={{ alignItems: "stretch" }}
        >
          {projects.map((project, index) => (
           <SwiperSlide
  key={index}
  style={{
    display: "flex",
    height: "100%"
  }}
>
  <div
    className="card-custom d-flex flex-column justify-content-center project-tit-head"
    style={{
      height: "100%", 
      justifyContent: "space-between"
    }}
  >
    <h4 className="py-4" style={{ color: "rgb(1, 238, 255)" }}>
      {project.name}
    </h4>

    <p className="text-white mt-4 ">
      {project.desc}
    </p>
  </div>
</SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          {/* <div className="swiper-button-prev text-white"></div>
          <div className="swiper-button-next text-white"></div> */}
        </Swiper>
      </div>
    </div>
  );
}