"use client"

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
      <header className="pt-7 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div>
            <button onClick={openMenu}>
              <HiMenuAlt1 className="cursor-pointer text-[2rem] text-white" />
            </button>
            <Navigation isOpen={isMenuOpen} closeMenu={closeMenu} />
          </div>
        </div>
      </header>
    );
}

export default Header;