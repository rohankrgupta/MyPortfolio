"use client";

import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Experiences from "./containers/Experiences";
import Projects from "./containers/Projects";
import UWM from "../assets/UWM.png";
import NITDGP from "../assets/NITDGP.webp";
import WBCHSE from "../assets/WBCHSE.png";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import Adobe from "../assets/AdobeRedLogo.png";
import IQAir from "../assets/IQAir.png";
import Leaps from "../assets/LeapsLogo.png";
import FancyTestimonialsSlider from "./components/Testimonials";
import { useEffect } from "react";

export default function Home() {
  const testimonials = [
    {}
    // {
    //   img: Adobe,
    //   quote:
    //     "He was a culture fit for our team at Adobe, but I also believe he would fit in anywhere where hard work and collaboration are valued.",
    //   name: "Kellen C. - ",
    //   role: "My Mentor at Adobe",
    // },
  ];

  const sections = [
    { id: "Experience", title: "Experience" },
    { id: "Projects", title: "Projects" },
    { id: "Blogs", title: "Education" },
    // { id: "Recommendations", title: "Recommendations" },
    { id: "Connect", title: "Connect" },
  ];

  const sendEmail = () => {
    window.location.href = "mailto:rohankrgupta2000@gmail.com";
  };

  const makeCall = () => {
    window.location.href = "tel:+"; 
  };

  return (
    <div className="w-full px-5 sm:px-10 md:px-[15%] lg:px-[25%] flex flex-col py-10">
      <Hero />
      <div
        id="nav"
        className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mb-5 text-[#96979A] px-5 py-2 rounded-md text-sm font-medium"
          >
            {section.title}
          </button>
        ))}
      </div>
      <h2 id="Experience" className="mt-10 mb-3 text-2xl font-bold">
        Experience
      </h2>
      <Experiences />
      <h2 id="Projects" className="mt-14 mb-3 text-2xl font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap w-full justify-between">
        <Projects />
      </div>
      <h2 id="Blogs" className="mt-14 mb-3 text-2xl font-bold">
        Education
      </h2>
      <Blog
        schoolLink="https://www.wisc.edu/"
        backgroundColor="#F8F8FA"
        imageSrc={UWM}
        imageAlt="UWM"
        degree="M.S. in Computer Science"
        school="University of Wisconsin Madison"
        time="2025 - Present"
        courseDescription={["",
          "• Relevant Coursework: Machine learning",
          "• Proficient in statistical analysis, hypothesis testing, and applying machine learning algorithms for predictive modeling.",
//           "• Developed skills in visual data processing and parallel programming for efficient large-scale data processing and ML tasks."
        ]}
      />
      <Blog
        schoolLink="https://nitdgp.ac.in/"
        school="National Institute of Technology Durgapur"
        imageAlt=""
        imageSrc={NITDGP}
        backgroundColor="#FFFFFF"
        degree="B.Tech.(Honours) in Computer Science Engineering, GPA: 3.69/4"
        time="Aug 2019 - May 2023"
        courseDescription={["",
          "• I have undertaken coursework in CS including DS and Algorithms, and Software Engineering and electives in Machine Learning, Data Analytics and Cryptography enabling me to be proficient in C/C++, Python, DBMS, OS.",
          "• I have done several projects in classification and regression models, deep learning, and image classification.",
          "• I was ranked in top 5% of the class among a cohort of 200 students majoring in Computer Science Engineering."]}
      />
      {/* <Blog
        schoolLink="https://medium.com/@juliuscecilia33/building-real-time-typing-indicators-in-java-19e245539794"
        school="Rahara Bhabanath Institution, India"
        imageSrc={WBCHSE}
        imageAlt="WBCHSE"
        backgroundColor="#F8F8FA"
        degree="Higher Secondary"
        time="2016 - 2017"
        courseDescription={["","Scored 91.6% and was top of my class."]}
      /> */}
      {/* <h2 id="Recommendations" className="mt-14 mb-3 text-2xl font-bold">
        Recommendations
      </h2>
      <FancyTestimonialsSlider testimonials={testimonials} /> */}
      <h2 id="Connect" className="mt-14 mb-3 text-2xl font-bold">
        Let&rsquo;s Connect
      </h2>
      <div className="flex flex-col">
        <button
          onClick={sendEmail}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Email me: rkgupta3@wisc.edu
        </button>
        {/* <button
          onClick={makeCall}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Call me: 562-332-4687
        </button> */}
      </div>
    </div>
  );
}
