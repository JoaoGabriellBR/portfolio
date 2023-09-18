"use client";
import { useEffect } from "react";
import Header from "@/components/Sections/Header";
import Form from "@/components/Form";
import Footer from "@/components/Sections/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <ToastContainer />
      <main className="flex flex-col overflow-hidden min-h-screen">
        <Header />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
