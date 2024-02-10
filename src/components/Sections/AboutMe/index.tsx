import Link from "next/link";
import SocialMedias from "@/components/SocialMedias";
import Logo from "@/components/Logo";

const AboutMe = () => {
  const email = "mailto:joaoname9@gmail.com";
  const phone = "tel:+5534998819318";
  const titleStyles = "font-bold text-[1.5rem]";
  const contacts = {
    p: "text-neutral-400",
    span: "text-blue-400 ml-1",
  };

  return (
    <section id="sobremim" className="pt-32 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-1">

        <div data-aos="fade-right" className="hidden md:flex justify-center col-span-2">
          <div className="flex flex-col items-center justify-center">
            <Logo size="text-[18rem]" />
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col items-center md:items-start w-full space-y-5 text-center md:text-start col-span-2">
          <h1 className={titleStyles}>Sobre mim</h1>
          <p className="text-neutral-400">
            Olá, sou João Gabriel. Meu interesse pelo desenvolvimento web surgiu em 2021, durante o curso de programação JavaScript da OneBitCode.
            Em 2022, tive a oportunidade de ingressar no mercado de trabalho atuando como desenvolvedor full stack na empresa Split Risk, onde pude aplicar
            meus conhecimentos em projetos reais. Atualmente, mantenho meu foco no aprendizado, acompanhando de perto as tecnologias e tendências da área.
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
    </section>
  );
};

export default AboutMe;
