import { HiMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
    return (
        <header className="pt-7 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
                <Image
                    src={logo}
                    alt="Logo João Gabriel Silva"
                    width={40}
                    height={40}
                />
                <HiMenuAlt1 className="cursor-pointer text-[2rem]" />
            </div>
        </header>
    )
}

export default Header;