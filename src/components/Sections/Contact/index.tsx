import Link from "next/link";
import Button from "@/components/Button";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contato" className="py-7 w-full h-full">
      <div className="w-full mx-auto px-4 sm:px-6 py-20 bg-jumbotron bg-no-repeat bg-cover bg-fixed">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center text-center space-y-5 px-0 md:px-32"
        >
          <h1 className="text-4xl font-bold"> VAMOS CRIAR ALGO JUNTOS?</h1>
          <p className="text-neutral-400 text-md">
            Se você tem algum projeto em mente, ou deseja apenas bater um papo,
            sinta-se à vontade para compartilhar suas ideias.
          </p>
          <Link href="/contact">
            <Button icon={FiSend} iconPosition="right">
              Fale comigo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
