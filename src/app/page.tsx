"use client";
import { useEffect } from "react";
import Header from "@/components/Sections/Header";
import Jumbotron from "@/components/Sections/Jumbotron";
import AboutMe from "@/components/Sections/AboutMe";
import Skills from "@/components/Sections/Skills";
import Qualifications from "@/components/Sections/Qualifications";
import Projects from "@/components/Sections/Projects";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-sine",
    });
  });

  return (
    <main className="flex flex-col overflow-hidden min-h-screen">
      <div className="bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed">
        <Header />
        <Jumbotron />
      </div>
      <div className="space-y-[5rem] md:space-y-[7rem]">
        <AboutMe />
        <Skills />
        <Qualifications />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
