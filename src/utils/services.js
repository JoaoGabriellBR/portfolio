import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";

const iconStyle =
  "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

export const serviceData = [
  {
    icon: <SiAltiumdesigner className={iconStyle} />,
    services: ["Design Responsivo", "Integração de design", "Prototipagem"],
  },
  {
    icon: <MdOutlineSettingsEthernet className={iconStyle} />,
    services: ["Landing Pages", "Sites Profissionais", "Blogs e e-commerces"],
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
