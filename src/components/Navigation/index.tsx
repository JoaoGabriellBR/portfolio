import React from 'react';
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";

const Navigation = ({ isOpen, closeMenu }: any) => {

    const sections = [
        { name: "Home", id: "#home" },
        { name: "Sobre Mim", id: "#sobremim" },
        { name: "Tecnologias", id: "#tecnologias" },
        { name: "Qualificações", id: "#qualificações" },
        { name: "Projetos", id: "#projetos" },
        { name: "Serviços", id: "#serviços" },
        { name: "Contato", id: "#contato" },
    ];

    const sectionStyle = 'text-[1rem] md:text-[1.2rem] cursor-pointer hover:scale-125 transition duration-500 ease-in-out';

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-neutral-950 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="flex flex-col h-full max-w-6xl mx-auto px-4 sm:px-6 pt-7 text-white">

                <button onClick={closeMenu} className='self-end'>
                    <AiOutlineClose className="cursor-pointer text-[2rem]" />
                </button>

                <div className='h-full flex flex-col justify-center items-center space-y-5 md:space-y-7'>
                    {sections?.map((section) => (
                        <h1 key={section.id} className={sectionStyle}>{section.name}</h1>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Navigation;
