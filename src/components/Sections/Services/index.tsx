import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";

const Services = () => {
  const iconStyle =
    "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

  return (
    <section className="py-7 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">Serviços</h1>
          <p className="text-sm text-neutral-400">O que eu faço?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
          {/* ITEM 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <button>
              <SiAltiumdesigner className={iconStyle} />
            </button>
            <h1>UI/UX Design</h1>
            <h1>Mobile App Design</h1>
            <h1>Responsive Design</h1>
          </div>

          {/* ITEM 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <button>
              <MdOutlineSettingsEthernet className={iconStyle} />{" "}
            </button>
            <h1>Landing Pages</h1>
            <h1>Mobile App Design</h1>
            <h1>Responsive Design</h1>
          </div>

          {/* ITEM 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <button>
              <BsFillDatabaseFill className={iconStyle} />
            </button>
            <h1>Modelagem de banco de dados</h1>
            <h1>Mobile App Design</h1>
            <h1>Responsive Design</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
