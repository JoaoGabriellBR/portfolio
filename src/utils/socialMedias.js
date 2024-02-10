import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const divIconsStyle =
  "w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80";
export const iconsStyle = "w-5 h-5 font-bold text-white";

export const socialMedias = [
  {
    id: "email",
    tooltip: "Meu Email",
    icon: MdEmail,
    href: "mailto:joaoname9@gmail.com",
  },
  {
    id: "linkedin",
    tooltip: "Meu Linkedin",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/joaogabriel-silva",
  },
  {
    id: "github",
    tooltip: "Meu GitHub",
    icon: FaGithub,
    href: "https://github.com/JoaoGabriellBR",
  },
];
