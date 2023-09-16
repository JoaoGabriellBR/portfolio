"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { ProjectItemProps } from "@/utils/types";

const ProjectItem = ({ project }: ProjectItemProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const iconStyle = `text-white w-6 h-6 font-bold`;
  const handleChange = (value: boolean) => setIsHovered(value);

  return (
    <div
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      className={`bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed 
        h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-500 ease-in-out`}
    >
      {isHovered && (
        <div className="w-full flex flex-row justify-end items-center space-x-3">
          <Link href={String(project.repository)} target="blank">
            <button>
              <VscGithub className={iconStyle} />
            </button>
          </Link>
          <Link href={String(project.site)} target="blank">
            <button>
              <GoLinkExternal className={iconStyle} />
            </button>
          </Link>
        </div>
      )}

      <div
        className={`w-full h-full flex flex-col justify-center items-center`}
      >
        <Image
          src={project.logo}
          alt={`Logo ${project.logo}`}
          width={90}
          height={90}
        />
        <h1 className="text-[2rem] font-regular text-center">{project.name}</h1>
      </div>
    </div>
  );
};

export default ProjectItem;
