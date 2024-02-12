import Link from "next/link";
import { socialMedias, divIconsStyle, iconsStyle } from "@/utils/socialMedias";

const SocialMedias = () => {
  return (
    <nav className="w-[10rem] flex flex-row justify-between items-center mt-5 md:mt-0">
      {socialMedias.map((social) => (
        <Link key={social.id} href={social.href} data-tooltip-delay-show={400}>
          <div className={divIconsStyle}>
            <social.icon className={iconsStyle} />
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SocialMedias;
