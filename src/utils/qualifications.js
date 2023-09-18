import { PiStudentBold } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

export const iconStyle = "w-6 h-6";

export const job = [
  {
    date: "Set/2022 - atual",
    title: "Split Risk",
    occupation: "Desenvolvedor Full Stack",
    description: (
      <>
        Auxilio no desenvolvimento e suporte dos sistemas da empresa, utilizando
        tecnologias como{" "}
        <span className="text-white">React, Node, Prisma ORM e MySQL.</span>{" "}
        Minhas responsabilidades incluem a resolução ágil de problemas, correção
        de bugs e aprimoramento contínuo das aplicações web da companhia.
      </>
    ),
  },
  {
    date: "Set/2021 - Ago/2022",
    title: "Online Shopping",
    occupation: "Suporte técnico",
    description: (
      <>
        Fornecia assistência técnica aos usuários e colaboradores da empresa,
        utilizando <span className="text-white">Linux Mint.</span> Além disso,
        auxiliava na manutenção preventiva e corretiva dos hardwares, e também
        colaborava nos processos de garantia através do sistema TOTVS Protheus.
      </>
    ),
  },
];

export const education = [
  {
    date: "Ago/2021 - atual",
    title: "Uniessa",
    occupation: "Sistemas de Informação",
    description:
      "Curso superior que combina conhecimentos de tecnologia da informação e gestão, fornecendo  habilidades em desenvolvimento de software, análise de dados, resolução de problemas e tomada de decisões.",
  },
  {
    date: "Fev/2022 - atual",
    title: "OneBitCode",
    occupation: "Desenvolvedor Web Full Stack",
    description:
      "Curso prático que capacita os alunos a dominarem tanto o desenvolvimento front-end quanto o back-end de aplicações web, com ênfase na construção de projetos do mundo real.",
  },
  {
    date: "Mai/2020 - Mar/2022",
    title: "Microcamp",
    occupation: "Técnico em Hardware e Robótica",
    description:
      "Curso que proporciona uma sólida formação na área de hardware, abrangendo conhecimentos essenciais em montagem, manutenção e configuração de computadores. Além disso, exploram o mundo da robótica, concedendo habilidades na criação e programação de robôs autônomos.",
  },
];

export const qualifications = [
  {
    name: "Experiência",
    event: job,
    onlyIcon: CgWorkAlt,
    icon: <CgWorkAlt className={iconStyle} />,
  },
  {
    name: "Educação",
    event: education,
    onlyIcon: PiStudentBold,
    icon: <PiStudentBold className={iconStyle} />,
  },
];
