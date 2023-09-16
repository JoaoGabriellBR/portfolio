"use client"
import { useState } from "react";
import Input from "@/components/Input";
import Button from "../Button";
import { MdSend } from "react-icons/md";

const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (!message) {
      setMessageError(true);
    } else {
      setMessageError(false)
    }
  };

  const handleErrorMessage = () => {
    !email ? setEmailError(true) : setEmailError(false);
    !message ? setMessageError(true) : setMessageError(false);
  }

  const inputValue = [
    {
      id: "floating-input",
      label: "Seu Email",
      value: email, onChange: handleChangeEmail,
      type: "email",
      error: emailError,

    },
    {
      id: "floating-textarea",
      label: "Sua mensagem",
      value: message,
      onChange: handleChangeMessage,
      type: "textarea",
      error: messageError,

    },
  ];

  return (
    <>
      <section className="py-20 w-full space-y-[5rem] md:space-y-[10rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center">
          <p className="self-start">Voltar</p>
          <form className="w-full md:w-6/12 space-y-10 flex flex-col justify-start items-start">
            <h1 className="text-[2rem]">Diga Olá! 👋</h1>

            {inputValue?.map((input) => (
              <Input
                key={input.id}
                id={input.id}
                label={input.label}
                value={input.value}
                type={input.type}
                onChange={input.onChange}
                error={input.error}
              />
            ))}

            <Button onClick={(e: any) => {
              e.preventDefault();
              handleErrorMessage();
            }}>
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

