"use client";

import { useState } from "react";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import finans from "@/assets/finans.png";

interface Project {
  name: string;
  technologies: string;
  site: string;
  repository: string;
  gradient: string;
};

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ( { project }: ProjectItemProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  // const iconStyle = `${isHovered ? "text-white" : "text-black"} w-6 h-6 font-bold`;
  const iconStyle = `text-white w-6 h-6 font-bold`;
  const handleChange = (value: boolean) => setIsHovered(value);

  return (
    <div
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      className={`
        ${isHovered && 'border-solid border-2 border-white'} bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed 
        h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-500 ease-in-out`}
      
      // className={`${
      //   isHovered
      //     ? "bg-transparent border-solid border-2 border-white"
      //     : `bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed`
      // } h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-500 ease-in-out`}
    >
      <div className="w-full flex flex-row justify-end items-center space-x-3">
        <button>
          <VscGithub className={iconStyle} />
        </button>
        <button>
          <GoLinkExternal className={iconStyle} />
        </button>
      </div>

      {/* <div className={`${isHovered ? 'text-white' : 'text-black'} flex flex-col justify-between items-center space-y-10 text-center`}> */}
      <div className={`text-white flex flex-col justify-between items-center space-y-10 text-center`}>
        {/* <h1 className="text-[2.5rem] font-black">{project.name}</h1>
         */}
            <Image
                    src={finans}
                    alt="Logo João Gabriel Silva"
                    width={300}
                    height={300}
                />
        <p className="text-[0.6rem] font-bold tracking-[.15rem]">
          {project.technologies}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
