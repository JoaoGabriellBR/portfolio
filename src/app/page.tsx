"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Sections/Header";
import Jumbotron from "@/components/Sections/Jumbotron";
import AboutMe from "@/components/Sections/AboutMe";
import Skills from "@/components/Sections/Skills";
import Qualifications from "@/components/Sections/Qualifications";
import Projects from "@/components/Sections/Projects";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      {showBackToTop && (
        <button
          className="fixed bottom-5 right-4 bg-neutral-800 text-white p-3 rounded-full"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp className="text-[1.2rem]" />
        </button>
      )}
    </main>
  );
};

export default Home;
