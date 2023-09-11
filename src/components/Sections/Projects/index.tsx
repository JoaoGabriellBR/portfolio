"use client";
import { useState } from "react";
import Image from "next/image";
import worldNews from "@/assets/1.png";
import solarToy from "@/assets/2.png";
import finans from "@/assets/finans.png";
import reactNotes from "@/assets/4.png";
import ProjectItem from "@/components/ProjectItem";

const Projects = () => {

  const projects = [
    {
      name: "Finans",
      technologies: "REACT NODE TYPESCRIPT POSTGRESQL",
      site: "https://siteappfinans.netlify.app",
      repository: "https://github.com/JoaoGabriellBR/finans",
      gradient: "bg-gradient-to-r from-[#F4CDAD] to-[#FCE9C7]",
    },
    {
      name: "React Notes",
      technologies: "REACT NODE JAVASCRIPT MYSQL",
      site: "https://siteappfinans.netlify.app",
      repository: "https://github.com/JoaoGabriellBR/finans",
      gradient: "bg-gradient-to-r from-[#B6E4F9] to-[#E4CEF2]",
    },
    {
      name: "World News",
      technologies: "REACT NEXT TAILWINDCSS POSTGRESQL",
      site: "https://siteappfinans.netlify.app",
      repository: "https://github.com/JoaoGabriellBR/worldnews",
      gradient: "bg-gradient-to-r from-[#F2A679] to-[#DBC4F2]",
    },
    {
      name: "Solar Toy",
      technologies: "REACT MATERIAL UI VITE",
      site: "https://siteappfinans.netlify.app",
      repository: "https://github.com/JoaoGabriellBR/solartoy",
      gradient: "bg-gradient-to-r from-[#DCB4F1] to-[#EEB7D8]",
    },
    {
      name: "Super Mario Game",
      technologies: "TYPESCRIPT SASS",
      site: "https://siteappfinans.netlify.app",
      repositorry: "https://github.com/JoaoGabriellBR/SuperMarioGame",
      gradienry: "bg-gradient-to-r from-[#AEE6F2] to-[#E1D7FD]",
    },
  ];

  return (
    <section className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <h1 className="text-[1.5rem] text-center font-bold">Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
          {projects?.map((project: any, index: number) => (
            <ProjectItem
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
