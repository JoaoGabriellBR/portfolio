import Link from "next/link";
import { motion } from "framer-motion";
import { technologies } from "@/utils/skills";

const Skills = () => {
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
