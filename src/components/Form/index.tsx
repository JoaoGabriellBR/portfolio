"use client"

import { useState } from "react";
import Input from "@/components/Input";
import Button from "../Button";
import { MdSend } from "react-icons/md";

const Form = () => {

  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const inputValue = [
    { label: "Seu Email", value: email, type: "email" },
    { label: "Sua mensagem", value: message, type: "text" },
  ];

  return (
    <>
      <section className="py-7 w-full space-y-[5rem] md:space-y-[20rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row justify-center items-center">

          <form className="w-6/12 space-y-10 flex flex-col justify-start items-start">

            <h1 className="text-[2rem]">Diga Olá! 👋</h1>

            {inputValue?.map((input: any, index: number) => (
              <Input
                key={index}
                label={input.label}
                value={input.value}
                type={input.type}
                onChange={handleChange} />
            ))}

            <Button>
              <MdSend className="mr-2 w-[1.2rem] h-[1.2rem] font-bold" />
              Enviar mensagem
            </Button>

          </form>

        </div>
      </section>
    </>
  );
};

export default Form;
