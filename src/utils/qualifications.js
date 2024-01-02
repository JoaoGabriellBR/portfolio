import { PiStudentBold } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

export const job = [
  {
    date: "Set/2022 - atual",
    title: "Split Risk",
    occupation: "Desenvolvedor Full Stack",
    description: (
      <>
        Auxilio no desenvolvimento e suporte dos sistemas da empresa, utilizando
        tecnologias como{" "}
        <span className="text-white">
          React, Node, TypeScript, Prisma ORM e MySQL.
        </span>{" "}
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
        colaborava nos processos de garantia através do sistema{" "}
        <span className="text-white">TOTVS Protheus.</span>
      </>
    ),
  },
];

export const education = [
  {
    date: "Ago/2021 - Atual",
    title: "Uniessa",
    occupation: "Sistemas de Informação",
    description:
      "Curso superior que combina conhecimentos de tecnologia da informação e gestão, fornecendo  habilidades em desenvolvimento de software, análise de dados, resolução de problemas e tomada de decisões.",
  },
  {
    date: "Fev/2022 - Set/2023",
    title: "OneBitCode",
    occupation: "Desenvolvedor Web Full Stack",
    description:
      "Curso prático centrado na linguagem JavaScript e seus frameworks, onde pude desenvolver a capacidade de criar e implantar projetos web completos, abrangendo  a interface do usuário, o servidor e o banco de dados.",
  },
  {
    date: "Mai/2020 - Mar/2022",
    title: "Microcamp",
    occupation: "Técnico em Hardware e Robótica",
    description:
      "Aprendi conhecimentos essenciais em montagem, manutenção e configuração de computadores. Além disso, explorei o mundo da robótica, desenvolvendo habilidades na criação e programação de robôs autônomos.",
  },
];

export const qualifications = [
  {
    name: "Experiência",
    event: job,
    icon: CgWorkAlt,
  },
  {
    name: "Educação",
    event: education,
    icon: PiStudentBold,
  },
];
