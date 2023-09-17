import { BsFillDatabaseFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";

const iconStyle =
  "w-16 h-16 mb-4 hover:scale-125 transition duration-500 ease-in-out";

export const serviceData = [
  {
    icon: <SiAltiumdesigner className={iconStyle} />,
    services: ["Sistemas de Gerenciamento", "Integração de design", "Design Responsivo"],
  },
  {
    icon: <MdOutlineSettingsEthernet className={iconStyle} />,
    services: ["Landing Pages", "Lojas Virtuais", "Blogs"],
  },
  {
    icon: <BsFillDatabaseFill className={iconStyle} />,
    services: [
      "Modelagem de Banco de Dados",
      "Ferramentas de Automação",
      "Desenvolvimento de APIs",
    ],
  },
];
