import Image from "next/image";
import Button from "../Button";

const ProjectItem = ({ project, index }: any) => {
  return (
    <div
      className={`w-full flex flex-${project.position} justify-between items-center`}
    >
      <div className="w-full md:w-[50%] space-y-5">
        <h1 className="text-[1.5rem]">{project.name}</h1>
        <p className="text-neutral-400">{project.description}</p>
        <Button>Ver projeto</Button>
      </div>

      <div className="w-full md:w-[50%]">
        <Image
          key={index}
          className="rounded-lg"
          src={project.video}
          alt={`Imagem do site ${project.alt}`}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
