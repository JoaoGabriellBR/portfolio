import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { socialMedias, divIconsStyle, iconsStyle } from "@/utils/socialMedias";

const SocialMedias = () => {
  return (
    <nav className="w-[10rem] flex flex-row justify-between items-center mt-5 md:mt-0">
      {socialMedias.map((social) => (
        <>
          <Link href={social.href} id={social.id} data-tooltip-delay-show={400}>
            <div className={divIconsStyle}>
              <social.icon className={iconsStyle} />
            </div>
          </Link>
          <Tooltip
            id="tooltip-anchor-show"
            content={social.tooltip}
            style={{ borderRadius: "1rem" }}
            anchorSelect={`#${social.id}`}
            place="top"
          />
        </>
      ))}
    </nav>
  );
};

export default SocialMedias;
