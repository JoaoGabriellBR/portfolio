import React from 'react';
import Link from 'next/link';
import { sections } from "@/utils/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { PropsNavigation } from '@/utils/types';
import Logo from '../Logo';

const Navigation = ({ isOpen, closeMenu }: PropsNavigation) => {

    const sectionStyle = 'text-[1rem] md:text-[1.2rem] cursor-pointer hover:scale-125 transition duration-500 ease-in-out text-neutral-400';

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-opacity-90 z-10"
                    onClick={closeMenu}
                ></div>
            )}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-neutral-950 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-20`}
            >
                <div className="flex flex-col h-full max-w-6xl mx-auto px-4 sm:px-6 pt-7">

                    <div className='flex flex-row justify-between items-center'>
                        <Logo onClick={closeMenu}/>
                        <button className='cursor-pointer text-[2rem] hover:opacity-80' onClick={closeMenu}>
                            <AiOutlineClose />
                        </button>
                    </div>

                    <div className='h-full flex flex-col justify-center items-center space-y-5 md:space-y-7'>
                        {sections?.map((section) => (
                            <Link key={section.id} href={`/${section.id}`}>
                                <h1 onClick={closeMenu} className={sectionStyle}>{section.name}</h1>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navigation;
