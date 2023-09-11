"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { FiDownload } from "react-icons/fi";

const Jumbotron = () => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const titleStyle = "font-extrabold text-6xl md:text-8xl ml-0 md:ml-[10rem]";

  return (
    <section className="w-full">
      <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6 pb-[10rem] flex flex-col justify-center items-center md:items-start text-center md:text-start space-y-5">
        <p className="text-neutral-400 font-black ml-0 md:ml-[10rem] tracking-[.15rem]">
          JOÃO GABRIEL SILVA
        </p>
        <h1 className={titleStyle}>Desenvolvedor</h1>
        <h1 className={titleStyle}>Full Stack</h1>
        {/* <Button type={!isMouseOn && "outline"} onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
                    Currículo
                    <FiDownload className="ml-2 w-[1.2rem] h-[1.2rem] font-bold"/>
                </Button> */}
      </div>
    </section>
  );
};

export default Jumbotron;
