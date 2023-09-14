import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import ServiceItem from "@/components/ServiceItem";

const Services = () => {
  const iconStyle =
    "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

  const serviceData = [
    {
      icon: <SiAltiumdesigner className={iconStyle} />,
      services: ["UI/UX Design", "Mobile App Design", "Responsive Design"],
    },
    {
      icon: <MdOutlineSettingsEthernet className={iconStyle} />,
      services: ["Landing Pages", "Mobile App Design", "Responsive Design"],
    },
    {
      icon: <BsFillDatabaseFill className={iconStyle} />,
      services: ["Modelagem de banco de dados", "Mobile App Design", "Responsive Design"],
    },
  ];

  return (
    <section id="serviços" className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">Serviços</h1>
          <p className="text-sm text-neutral-400">O que eu faço?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 space-y-5 md:space-y-0">
          {serviceData.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
