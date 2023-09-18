import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedias = () => {

    const divIconsStyle =
        "w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80";
    const iconsStyle = "w-5 h-5 font-bold text-white";

    const email = "mailto:joaoname9@gmail.com";
    const linkedin = "https://www.linkedin.com/in/joaogabriel-silva";
    const gitHub = "https://github.com/JoaoGabriellBR";

    return (
        <nav className="w-[10rem] flex flex-row justify-between items-center mt-5 md:mt-0">
            <Link href={email}>
                <div className={divIconsStyle}>
                    <MdEmail className={iconsStyle} />
                </div>
            </Link>

            <Link href={linkedin} target="blank">
                <div className={divIconsStyle}>
                    <FaLinkedinIn className={iconsStyle} />
                </div>
            </Link>

            <Link href={gitHub} target="blank">
                <div className={divIconsStyle}>
                    <FaGithub className={iconsStyle} />
                </div>
            </Link>
        </nav>
    )
}

export default SocialMedias;