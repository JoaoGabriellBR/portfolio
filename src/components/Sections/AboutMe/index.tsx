import Link from "next/link";
import SocialMedias from "@/components/SocialMedias";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const AboutMe = () => {
  const email = "mailto:joaoname9@gmail.com";
  const phone = "tel:+5534998819318";
  const titleStyles = "font-bold text-[1.5rem]";
  const contacts = {
    p: "text-neutral-400",
    span: "text-blue-400 ml-1",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="sobremim"
      className="pt-32 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-1">
        <div className="hidden md:flex justify-center col-span-2">
          <div className="flex flex-col items-center justify-center">
            <Logo size="text-[18rem]" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full space-y-5 text-center md:text-start col-span-2">
          <h1 className={titleStyles}>Sobre mim</h1>
          <p className="text-neutral-400">
            Sou um Desenvolvedor de Software focado em aplicações web e mobile, com
            habilidades em{" "}
            <span className="text-white">
              React, React Native, Next.js, Node.js, TypeScript, MySQL e Docker
            </span>
            .
          </p>
          <p className="text-neutral-400">
            Possuo experiência na criação e manutenção de APIs, landing pages,
            sistema ERP e e-commerce. Competente na sustentação de sistemas, bem
            como na modelagem e consulta de dados.
          </p>

          <SocialMedias />
          <div className="pt-5 space-y-3">
            <h1 className={titleStyles}>Me contacte:</h1>
            <p className={contacts.p}>
              Email:
              <Link href={email} target="blank">
                <span className={contacts.span}>joaoname9@gmail.com</span>
              </Link>
            </p>
            <p className={contacts.p}>
              Telefone:
              <Link href={phone} target="blank">
                <span className={contacts.span}>(+55) 34 99881-9318</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
