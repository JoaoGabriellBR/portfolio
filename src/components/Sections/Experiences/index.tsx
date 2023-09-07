import { PiStudentBold } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

const Experiences = () => {

    const iconStyle = "w-6 h-6";
    const qualifications = [
        { name: 'Experiência', icon: <CgWorkAlt className={iconStyle} /> },
        { name: 'Educação', icon: <PiStudentBold className={iconStyle} /> }
    ];

    return (
      <section className="py-7 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-[1.5rem] font-bold">Qualificações</h1>
            <p className="text-sm text-neutral-400">Minha jornada pessoal</p>
          </div>

          <div className="w-full flex justify-center items-center space-x-10 cursor-pointer">
            {qualifications?.map((item) => (
              <div className="flex flex-row justify-center items-center space-x-1">
                <button>{item.icon}</button>
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    );
}

export default Experiences;