import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";

const iconStyle =
  "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

export const serviceData = [
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
    services: [
      "Modelagem de banco de dados",
      "Mobile App Design",
      "Responsive Design",
    ],
  },
];
