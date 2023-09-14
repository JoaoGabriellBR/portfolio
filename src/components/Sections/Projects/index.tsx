"use client";

import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/utils/projects";

const Projects = () => {
  return (
    <section id="projetos" className="py-7 w-full">
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
