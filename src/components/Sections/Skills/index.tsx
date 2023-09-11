import { GrMysql } from "react-icons/gr";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

const Skills = () => {

    const iconStyle = "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";
    const nameStyle = "text-sm";

    const technologies = [
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

    return (
        <section className="py-7 w-full">
            <div className="max-w-6xl mx-auto space-y-10 px-4 sm:px-6">
                <h1 className="text-center text-[1.5rem] font-bold">Tecnologias</h1>

                <div className="w-full flex flex-row flex-wrap justify-center md:justify-between items-center">
                    {technologies?.map((tech) => (
                        <div key={tech.id} className="min-w-[12rem] flex flex-col justify-center items-center mb-10">
                            <button className={`${tech.color}`} name={tech.alt}>{tech.icon}</button>
                            <p className={nameStyle}>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;