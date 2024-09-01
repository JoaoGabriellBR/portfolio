import Link from "next/link";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs, FaDocker, FaSass, FaGitAlt } from "react-icons/fa";
import { SiExpo, SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  const iconStyle =
    "w-20 h-20 mb-4 hover:scale-125 transition duration-500 ease-in-out";

  const technologies = [
    {
      name: "React",
      color: "hover:text-react",
      icon: <FaReact className={iconStyle} />,
      site: "https://legacy.reactjs.org",
    },
    {
      name: "React Native",
      color: "hover:text-react_native",
      icon: <TbBrandReactNative className={iconStyle} />,
      site: "https://reactnative.dev",
    },
    {
      name: "Next",
      color: "hover:text-next",
      icon: <SiNextdotjs className={iconStyle} />,
      site: "https://nextjs.org",
    },
    {
      name: "Expo",
      color: "hover:text-expo",
      icon: <SiExpo className={iconStyle} />,
      site: "https://docs.expo.dev",
    },
    {
      name: "Node",
      color: "hover:text-node",
      icon: <FaNodeJs className={iconStyle} />,
      site: "https://nodejs.org",
    },
    {
      name: "TypeScript",
      color: "hover:text-typescript",
      icon: <BiLogoTypescript className={iconStyle} />,
      site: "https://www.typescriptlang.org",
    },
    {
      name: "JavaScript",
      color: "hover:text-javascript",
      icon: <RiJavascriptFill className={iconStyle} />,
      site: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "Docker",
      color: "hover:text-docker",
      icon: <FaDocker className={iconStyle} />,
      site: "https://www.docker.com",
    },
    {
      name: "Tailwind CSS",
      color: "hover:text-tailwind",
      icon: <SiTailwindcss className={iconStyle} />,
      site: "https://tailwindcss.com",
    },
    {
      name: "Sass",
      color: "hover:text-sass",
      icon: <FaSass className={iconStyle} />,
      site: "https://sass-lang.com",
    },
    {
      name: "Prisma ORM",
      color: "hover:text-prisma",
      icon: <SiPrisma className={iconStyle} />,
      site: "https://www.prisma.io",
    },
    {
      name: "MySQL",
      color: "hover:text-mysql",
      icon: <GrMysql className={iconStyle} />,
      site: "https://www.mysql.com",
    },
    {
      name: "PostgreSQL",
      color: "hover:text-postgresql",
      icon: <BiLogoPostgresql className={iconStyle} />,
      site: "https://www.postgresql.org",
    },
    {
      name: "Git",
      color: "hover:text-git",
      icon: <FaGitAlt className={iconStyle} />,
      site: "https://www.github.com",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="tecnologias"
      className="py-7 w-full"
    >
      <div className="max-w-6xl mx-auto space-y-10 px-4 sm:px-6">
        <h1 className="text-center text-[1.5rem] font-bold">Tecnologias</h1>
        <div className="w-full flex flex-row flex-wrap justify-center md:justify-between items-center">
          {technologies?.map((tech, index) => (
            <div
              key={index}
              className="w-[9rem] mb-10 flex flex-col justify-center items-center"
            >
              <Link href={tech.site} target="blank">
                <button className={`${tech.color}`}>{tech.icon}</button>
              </Link>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
