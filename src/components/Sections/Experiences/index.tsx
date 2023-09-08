import { PiStudentBold } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";
import Timeline from "@/components/Timeline";

const Experiences = () => {

    const iconStyle = "w-6 h-6";
    const qualifications = [
        { name: 'Experiência', icon: <CgWorkAlt className={iconStyle} /> },
        { name: 'Educação', icon: <PiStudentBold className={iconStyle} /> }
    ];

    const events = [
      {
        date: 'January 2023',
        title: 'Split Risk',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus numquam quidem, mollitia nesciunt reprehenderit tempore optio praesentium nostrum necessitatibus quod velit assumenda voluptates temporibus vel nihil debitis vitae nemo!',
      },
      {
        date: 'February 2023',
        title: 'Online Shopping',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus numquam quidem, mollitia nesciunt reprehenderit tempore optio praesentium nostrum necessitatibus quod velit assumenda voluptates temporibus vel nihil debitis vitae nemo!',
      },
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
          <Timeline events={events} />
        </div>
      </section>
    );
}

export default Experiences;