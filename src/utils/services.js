import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";

const iconStyle =
  "w-20 h-20 mb-4 hover:scale-125 transition duration-500 ease-in-out";

export const serviceData = [
  {
    icon: <FaLaptopCode className={iconStyle} />,
    services: ["Front end"],
  },
  {
    icon: <GoDatabase className={iconStyle} />,
    services: ["Back end"],
  },
  {
    icon: <FaMobileAlt className={iconStyle} />,
    services: ["Mobile"],
  },
];
