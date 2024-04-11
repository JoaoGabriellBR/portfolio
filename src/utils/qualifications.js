import { PiStudentBold } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

export const job = [
  {
    date: "Set/2022 - atual",
    title: "Split Risk",
    occupation: "Desenvolvedor Full Stack",
    description: (
      <div>
        <p>
          Na Split Risk eu corrijo bugs, implemento novas funcionalidades e
          presto suporte nos principais sistemas da empresa. Destaco algumas das minhas realizações:
        </p>
        <br></br>
        <p>
          - Implementação de um{" "}
          <span className="text-white">sistema de gestão de acessos</span> no
          portal administrativo, permitindo criação de grupos, bloqueio de
          páginas e controle de acessos.
        </p>
        <p>
          - Suporte e resolução de chamados no{" "}
          <span className="text-white">Jira</span>.
        </p>
        <p>
          - Integração com <span className="text-white">APIs de gateway</span>{" "}
          de pagamento, como Asaas.
        </p>
        <p>
          - Criação de um <span className="text-white">editor WYSIWYG</span>{" "}
          intuitivo no portal administrativo, usando{" "}
          <span className="text-white">TinyMCE</span> para facilitar a criação
          de páginas e otimizar a comunicação interna da equipe de gestão de
          pessoas.
        </p>
      </div>
    ),
  },
  {
    date: "Set/2022 - Jan/2024",
    title: "Grupo Gomes Pires",
    occupation: "Estágio em Desenvolvimento",
    description: (
      <div>
        <p>
          No GGP eu auxiliava outros desenvolvedores na entrega das sprints
          estabelecidas. Destaco algumas das minhas contribuições:
        </p>
        <br></br>
        <p>
          - Suporte na prototipagem de projetos web utilizando{" "}
          <span className="text-white">Figma</span>.
        </p>
        <p>
          - Desenvolvimento de landing pages de vendas para diversas empresas
          dentro do grupo, utilizando{" "}
          <span className="text-white">
            React, TypeScript, Material UI e CSS-in-JS (Styled-components)
          </span>
          .
        </p>
        <p>
          - Criação de quadros <span className="text-white">Scrum</span> no
          Trello para monitorar e organizar as atividades diárias.
        </p>
      </div>
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
