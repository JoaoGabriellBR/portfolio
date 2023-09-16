import Link from "next/link";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";

const Skills = () => {
  const iconStyle =
    "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

  const technologies = [
    {
      name: "React",
      alt: "React.js Icon",
      color: "hover:text-react",
      icon: <FaReact className={iconStyle} />,
      site: "https://legacy.reactjs.org",
    },
    {
      name: "Node",
      alt: "Node.js Icon",
      color: "hover:text-node",
      icon: <FaNodeJs className={iconStyle} />,
      site: "https://nodejs.org",
    },
    {
      name: "Next",
      alt: "Next.js Icon",
      color: "hover:text-next",
      icon: <SiNextdotjs className={iconStyle} />,
      site: "https://nextjs.org",
    },
    {
      name: "TypeScript",
      alt: "TypeScript Icon",
      color: "hover:text-typescript",
      icon: <BiLogoTypescript className={iconStyle} />,
      site: "https://www.typescriptlang.org",
    },
    {
      name: "JavaScript",
      alt: "JavaScript Icon",
      color: "hover:text-javascript",
      icon: <BiLogoJavascript className={iconStyle} />,
      site: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "Tailwind CSS",
      alt: "Tailwind CSS Icon",
      color: "hover:text-tailwind",
      icon: <SiTailwindcss className={iconStyle} />,
      site: "https://tailwindcss.com",
    },
    {
      name: "Sass",
      alt: "Sass Icon",
      color: "hover:text-sass",
      icon: <FaSass className={iconStyle} />,
      site: "https://sass-lang.com",
    },
    {
      name: "Prisma ORM",
      alt: "Prisma ORM Icon",
      color: "hover:text-prisma",
      icon: <SiPrisma className={iconStyle} />,
      site: "https://sass-lang.com",
    },
    {
      name: "MySQL",
      alt: "MySQL Icon",
      color: "hover:text-mysql",
      icon: <GrMysql className={iconStyle} />,
      site: "https://www.mysql.com",
    },
    {
      name: "PostgreSQL",
      alt: "PostgreSQL Icon",
      color: "hover:text-postgresql",
      icon: <BiLogoPostgresql className={iconStyle} />,
      site: "https://www.postgresql.org",
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
              <Link href={tech.site} target="blank">
                <button className={`${tech.color}`} name={tech.alt}>
                  {tech.icon}
                </button>
              </Link>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
