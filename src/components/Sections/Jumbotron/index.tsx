import { motion } from "framer-motion";

const Jumbotron = () => {
  const titleStyle = "font-extrabold text-5xl md:text-6x1 lg:text-8xl";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="home"
      className="w-full"
    >
      <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6 pb-[10rem] flex flex-col justify-center items-center text-center space-y-5">
        <p className="text-neutral-400 font-black tracking-[.15rem]">
          JOÃO GABRIEL SILVA
        </p>
        <h1 className={titleStyle}>Desenvolvedor</h1>
        <h1 className={titleStyle}>Full Stack</h1>
      </div>
    </motion.section>
  );
};

export default Jumbotron;
