import Image from "next/image";
import Link from "next/link";
import SocialMedias from "@/components/SocialMedias";
import picture from "@/assets/foto.png";

const AboutMe = () => {

  const email = "mailto:joaoname9@gmail.com";
  const phone = "34998819318";
  const titleStyles = "font-bold text-[1.5rem]";
  const contacts = {
    p: "text-neutral-400",
    span: "text-blue-400 ml-1",
  };

  return (
    <section id="sobremim" className="pt-32 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-1">

        <div data-aos="fade-right" className="hidden md:flex justify-center col-span-2">
          <Image src={picture} alt="Logo João Gabriel Silva" layout="contain" />
        </div>

        <div data-aos="fade-left" className="flex flex-col items-center md:items-start w-full space-y-5 text-center md:text-start col-span-2">
          <h1 className={titleStyles}>Sobre mim</h1>
          <p className="text-neutral-400">
          Olá, sou João Gabriel, e meu interesse pelo desenvolvimento web começou em 2021, durante o curso programador javaScript da OneBitCode. Em 2022, iniciei como estagiário full stack na Seguradora Split Risk, aplicando meus conhecimentos em projetos reais. Hoje, continuo focado no aprendizado, acompanhando as tecnologias e tendências do mercado.
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
