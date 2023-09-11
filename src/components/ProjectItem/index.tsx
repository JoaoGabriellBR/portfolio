"use client";

import { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";

const ProjectItem = ({ project }: any) => {

  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = `${isHovered ? "text-white" : "text-black"} w-6 h-6 font-bold`;
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isHovered
          ? "bg-transparent border-solid border-2 border-white"
          : project.gradient
      } h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-500 ease-in-out`}
    >
      <div className="w-full flex flex-row justify-end items-center space-x-3">
        <button>
          <VscGithub className={iconStyle} />
        </button>
        <button>
          <GoLinkExternal className={iconStyle} />
        </button>
      </div>

      <div className={`${isHovered ? 'text-white' : 'text-black'} flex flex-col justify-between items-center space-y-10 text-center`}>
        <h1 className="text-[2.5rem] font-black">{project.name}</h1>
        <p className="text-[0.6rem] font-bold tracking-[.15rem]">
          {project.tecnologias}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
