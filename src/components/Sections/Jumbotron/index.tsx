const Jumbotron = () => {
  
  const titleStyle = "font-extrabold text-5xl md:text-6x1 lg:text-8xl ml-0 md:ml-[10rem]";

  return (
    <section id="home" className="w-full">
      <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6 pb-[10rem] flex flex-col justify-center items-center md:items-start text-center md:text-start space-y-5">
        <p className="text-neutral-400 font-black ml-0 md:ml-[10rem] tracking-[.15rem]">
          JOÃO GABRIEL SILVA
        </p>
        <h1 className={titleStyle}>Desenvolvedor</h1>
        <h1 className={titleStyle}>Full Stack</h1>
      </div>
    </section>
  );
};

export default Jumbotron;
