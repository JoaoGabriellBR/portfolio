"use client";

import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/utils/projects";
import { ProjectProps } from "@/utils/types";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projetos" className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[1.5rem] text-center font-bold"
        >
          Projetos
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
          {projects?.map((project: ProjectProps, index: number) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
