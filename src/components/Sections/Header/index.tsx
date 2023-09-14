"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "@/assets/logo.png";
import Navigation from "@/components/Navigation";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

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
                <div>
                    <button onClick={openMenu}>
                        <HiMenuAlt1 className="cursor-pointer text-[2rem] text-white" />
                    </button>
                    <Navigation isOpen={isMenuOpen} closeMenu={closeMenu} />
                </div>
            </div>
        </header>
    )
}

export default Header;