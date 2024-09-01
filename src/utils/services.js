import { BsBrowserChrome, BsDatabaseFill, BsAndroid2 } from "react-icons/bs";

const iconStyle =
  "w-20 h-20 mb-4 hover:scale-125 transition duration-500 ease-in-out";

export const serviceData = [
  {
    icon: <BsBrowserChrome className={iconStyle} />,
    services: ["Front end"],
  },
  {
    icon: <BsDatabaseFill className={iconStyle} />,
    services: ["Back end"],
  },
  {
    icon: <BsAndroid2 className={iconStyle} />,
    services: ["Mobile"],
  },
];
