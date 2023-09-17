"use client"
import { useState, useEffect } from "react";
import Input from "@/components/Input";
import Button from "../Button";
import { MdSend } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);


  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

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
  };

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const publicKey = process.env.PUBLIC_KEY;
  useEffect(() => emailjs.init(String(publicKey)), []);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const serviceId = process.env.SERVICE_ID;
      const templateId = process.env.TEMPLATE;

      await emailjs.send(String(serviceId), String(templateId), {
        name: name,
        email: email,
        message: message,
      });

      handleClearForm();
      alert("Email enviado com sucesso.");
    } catch (error) {
      alert("Não foi possível enviar a mensagem.");
    }
  };

  const inputValue = [
    {
      id: "name",
      label: "Seu Nome",
      value: name,
      onChange: handleChangeName,
      type: "text",
      error: nameError,
    },
    {
      id: "email",
      label: "Seu Email",
      value: email,
      onChange: handleChangeEmail,
      type: "email",
      error: emailError,
    },
    {
      id: "message",
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
          <form onSubmit={sendEmail} className="w-full md:w-6/12 space-y-10 flex flex-col justify-start items-start">
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

            <Button type="submit" onClick={(e) => {
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

