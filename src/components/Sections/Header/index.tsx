import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "@/assets/logo.png";

const Header = () => {
    return (
        <header className="pt-7 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
                <Link href="/">
                    <Image
                        className="hover:opacity-80"
                        src={logo}
                        alt="Logo João Gabriel Silva"
                        width={40}
                        height={40}
                    />
                </Link>
                <HiMenuAlt1 className="cursor-pointer text-[2rem]" />
            </div>
        </header>
    )
}

export default Header;