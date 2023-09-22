"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { ProjectItemProps } from "@/utils/types";

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const containerClasses = `relative bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed 
    h-[22rem] p-5 rounded-lg flex flex-col items-center justify-between transition duration-300 ease-in-out`;
  const overlayClasses = `absolute inset-0 bg-black opacity-50 rounded-lg transition-opacity duration-500 ease-in-out`;
  const contentClasses = `w-full h-full flex flex-col justify-center items-center relative z-10`;
  const iconStyle = `text-white w-10 h-10 font-bold hover:scale-125 transition duration-500 ease-in-out`;

  const handleChange = (value: boolean) => setIsHovered(value);

  return (
    <div
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      data-aos="zoom-out"
      className={containerClasses}
    >
      {isHovered && <div className={overlayClasses}></div>}
      <div className={contentClasses}>
        {isHovered ? (
          <div className="hover:relative w-full flex flex-row justify-center items-center space-x-4">
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
        ) : (
          <>
            <Image
              src={project.logo}
              alt={`Logo ${project.logo}`}
              width={90}
              height={90}
            />
            <h1 className="text-[2rem] font-regular text-center">{project.name}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;

