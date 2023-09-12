import { nameStyle, technologies } from "@/utils/skills";

const Skills = () => {
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