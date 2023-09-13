import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

export const iconStyle = "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";
export const nameStyle = "text-sm";

export const technologies = [
    { id: 0, name: "React", alt: "React.js Icon", color: "hover:text-react", icon: <FaReact className={iconStyle} /> },
    { id: 1, name: "Node", alt: "Node.js Icon", color: "hover:text-node", icon: <FaNodeJs className={iconStyle} /> },
    { id: 2, name: "Next", alt: "Next.js Icon", color: "hover:text-next", icon: <SiNextdotjs className={iconStyle} /> },
    { id: 3, name: "TypeScript", alt: "TypeScript Icon", color: "hover:text-typescript", icon: <BiLogoTypescript className={iconStyle} /> },
    { id: 4, name: "JavaScript", alt: "JavaScript Icon", color: "hover:text-javascript", icon: <BiLogoJavascript className={iconStyle} /> },
    { id: 5, name: "Tailwind CSS", alt: "Tailwind CSS Icon", color: "hover:text-tailwind", icon: <SiTailwindcss className={iconStyle} /> },
    { id: 6, name: "Sass", alt: "Sass Icon",  color: "hover:text-sass", icon: <FaSass className={iconStyle} /> },
    { id: 7, name: "Prisma ORM", alt: "Prisma ORM Icon", color:"hover:text-prisma", icon: <SiPrisma className={iconStyle} /> },
    { id: 8, name: "MySQL", alt: "MySQL Icon", color: "hover:text-mysql", icon: <GrMysql className={iconStyle} /> },
    { id: 9, name: "PostgreSQL", alt: "PostgreSQL Icon", color: "hover:text-postgresql", icon: <BiLogoPostgresql className={iconStyle} /> },
];