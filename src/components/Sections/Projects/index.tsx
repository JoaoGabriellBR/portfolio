import Image from "next/image";

import firstImage from "@/assets/1.png";
import secondImage from "@/assets/2.png";
import thirdImage from "@/assets/3.png";
import fourthImage from "@/assets/4.png";

import ProjectItem from "@/components/ProjectItem";

const Projects = () => {
  const projects = [
    {
      name: "Finans",
      description:
        "Plataforma intuitiva projetada para facilitar e aperfeiçoar o controle financeiro pessoal, simplificando a gestão das suas finanças e permitindo que você mantenha tudo organizado e tome decisões mais informadas e coerentes.",
      video: thirdImage,
      alt: "finans",
      position: "row-reverse",
    },
    {
      name: "React Notes",
      description: "Plataforma web versátil que tem como objetivo criar notas e páginas complexas com edição de texto avançado, auxiliando no aumento da produtividade e simplificando o seu dia a dia.",
      video: fourthImage,
      alt: "reactnotes",
      position: "row",
    },
    {
      name: "World News",
      description: "Site de noticias que utiliza a base de dados do jornal diário estadunidense The New York Times.",
      video: firstImage,
      alt: "worldnews",
      position: "row-reverse",
    },
    {
      name: "Solar Toy",
      description: "Página de apresentação de um mini carro autônomo movido a energia solar.",
      video: secondImage,
      alt: "solartoy",
      position: "row",
    },
  ];

  return (
    <section className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <h1 className="text-[1.5rem] text-center font-bold">Projetos</h1>

        {/* <div className="flex flex-row justify-start items-center flex-wrap">
          {images?.map((item, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={item.img}
              alt={`Imagem do site ${item.alt}`}
              width={item.width}
              height={item.height}
            />
          ))}
        </div> */}

        {projects?.map((project, index) => (
          <ProjectItem project={project} index={index}/>
        ))}

      </div>
    </section>
  );
};

export default Projects;
