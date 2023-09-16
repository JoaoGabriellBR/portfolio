import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";

const Skills = () => {

  const iconStyle =  "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

  const technologies = [
    {
      name: "React",
      alt: "React.js Icon",
      color: "hover:text-react",
      icon: <FaReact className={iconStyle} />,
    },
    {
      name: "Node",
      alt: "Node.js Icon",
      color: "hover:text-node",
      icon: <FaNodeJs className={iconStyle} />,
    },
    {
      name: "Next",
      alt: "Next.js Icon",
      color: "hover:text-next",
      icon: <SiNextdotjs className={iconStyle} />,
    },
    {
      name: "TypeScript",
      alt: "TypeScript Icon",
      color: "hover:text-typescript",
      icon: <BiLogoTypescript className={iconStyle} />,
    },
    {
      name: "JavaScript",
      alt: "JavaScript Icon",
      color: "hover:text-javascript",
      icon: <BiLogoJavascript className={iconStyle} />,
    },
    {
      name: "Tailwind CSS",
      alt: "Tailwind CSS Icon",
      color: "hover:text-tailwind",
      icon: <SiTailwindcss className={iconStyle} />,
    },
    {
      name: "Sass",
      alt: "Sass Icon",
      color: "hover:text-sass",
      icon: <FaSass className={iconStyle} />,
    },
    {
      name: "Prisma ORM",
      alt: "Prisma ORM Icon",
      color: "hover:text-prisma",
      icon: <SiPrisma className={iconStyle} />,
    },
    {
      name: "MySQL",
      alt: "MySQL Icon",
      color: "hover:text-mysql",
      icon: <GrMysql className={iconStyle} />,
    },
    {
      name: "PostgreSQL",
      alt: "PostgreSQL Icon",
      color: "hover:text-postgresql",
      icon: <BiLogoPostgresql className={iconStyle} />,
    },
  ];

  return (
    <section id="tecnologias" className="py-7 w-full">
      <div className="max-w-6xl mx-auto space-y-10 px-4 sm:px-6">
        <h1 className="text-center text-[1.5rem] font-bold">Tecnologias</h1>
        <div className="w-full flex flex-row flex-wrap justify-center md:justify-between items-center">
          {technologies?.map((tech, index) => (
            <div
              key={index}
              className="min-w-[12rem] flex flex-col justify-center items-center mb-10"
            >
              <button className={`${tech.color}`} name={tech.alt}>
                {tech.icon}
              </button>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
