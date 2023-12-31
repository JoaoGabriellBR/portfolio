import Link from "next/link";
import Button from "@/components/Button";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contato" data-aos="zoom-out" className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 bg-neutral-900 rounded-0 md:rounded-[3rem]">
        <div className="flex flex-col justify-center items-center text-center space-y-5 px-0 md:px-32">
          <h1 className="text-4xl font-bold"> VAMOS CRIAR ALGO JUNTOS?</h1>
          <p className="text-neutral-400 text-md">
            Se você tem algum projeto em mente, ou deseja apenas bater um papo, sinta-se à vontade para compartilhar suas ideias.
          </p>
          <Link href="/contact">
             <Button icon={FiSend} iconPosition="right" >Fale comigo</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
