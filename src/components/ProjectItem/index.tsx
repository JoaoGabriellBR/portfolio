"use client";

import { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

interface Project {
  name: string;
  technologies: string;
  site: string;
  repository: string;
  gradient: string;
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const iconStyle = `${
    isHovered ? "text-white" : "text-black"
  } w-6 h-6 font-bold hover:opacity-80`;
  const handleChange = (value: boolean) => setIsHovered(value);

  return (
    <div
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      className={`${
        isHovered
          ? "bg-transparent border-solid border-2 border-white"
          : `bg-gradient-to-r ${project.gradient}`
      } h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-500 ease-in-out`}
    >
      <div className="w-full flex flex-row justify-end items-center space-x-3">
        <Link href={String(project.repository)}>
          <button>
            <VscGithub className={iconStyle} />
          </button>
        </Link>
        <Link href={String(project.site)}>
          <button>
            <GoLinkExternal className={iconStyle} />
          </button>
        </Link>
      </div>

      <div
        className={`${
          isHovered ? "text-white" : "text-black"
        } flex flex-col justify-between items-center space-y-10 text-center`}
      >
        <h1 className="text-[2.5rem] font-black">{project.name}</h1>
        <p className="text-[0.6rem] font-bold tracking-[.15rem]">
          {project.technologies}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
