"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { ProjectItemProps } from "@/utils/types";
import { motion } from "framer-motion";

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const divMain = `relative bg-jumbotron bg-no-repeat bg-cover bg-center bg-fixed 
  h-[22rem] p-5 hover:p-0 rounded-lg flex flex-col items-center justify-between transition duration-700 ease-in-out delay-150`;
  const iconStyle = `text-white w-10 h-10 font-bold hover:scale-125 transition duration-300 ease-in-out`;
  const handleChange = (value: boolean) => setIsHovered(value);

  return (
    <div
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      className={divMain}
    >
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5 }}
       className={`w-full h-full flex flex-col justify-center items-center relative`}
      >
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
            <h1 className="text-[2rem] font-regular text-center">
              {project.name}
            </h1>
          </>
        )}
        {isHovered && (
          <div
            className="absolute inset-0 bg-jumbotron opacity-80"
            style={{ zIndex: -1 }}
          ></div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectItem;
