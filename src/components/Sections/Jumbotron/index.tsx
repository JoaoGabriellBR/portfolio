"use client"

import { useState } from "react";
import Button from "@/components/Button";
import { FiDownload } from "react-icons/fi";

const Jumbotron = () => {

    const [isMouseOn, setIsMouseOn] = useState(false);

    return (
        <section className="w-full">
            <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6 pb-[10rem] flex flex-col justify-center items-start">
                <p className="text-gray-400">OLÁ, EU SOU O JOÃO GABRIEL SILVA</p>
                <h1 className="text-[3rem] font-black">FULL STACK DEVELOPER</h1>
                <Button type={!isMouseOn && "outline"} onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
                    Currículo
                    <FiDownload className="ml-2 w-4 h-4 font-bold"/>
                </Button>
            </div>
        </section>
    )
}

export default Jumbotron;