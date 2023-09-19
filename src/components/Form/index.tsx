"use client";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { FormDataType, FormErrorsType } from "@/utils/types";
// import { inputFields } from "@/utils/form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import emailjs from "@emailjs/browser";
import { MdSend } from "react-icons/md";
import { toast } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorsType>({
    name: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_KEY_PUBLIC;
    emailjs.init(String(publicKey));
  }, []);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
  }

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value })
  }
 
  const handleClearForm = () => {
    setFormData({
      ...formData,
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      ...formErrors,
      name: false,
      email: false,
      message: false,
    });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        name: !formData.name,
        email: !formData.email,
        message: !formData.message,
      });
      return;
    }

    try {
      await emailjs.send(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        formData
      );
      toast.success("Mensagem enviada com sucesso.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Não foi possível enviar a mensagem.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        autoClose: 3000,
      });
    } finally {
      handleClearForm();
    }
  };

  const inputFields = [
    {
      id: "name",
      label: "Seu Nome",
      type: "text",
      onChange: handleChangeName
    },
    {
      id: "email",
      label: "Seu Email",
      type: "email",
      onChange: handleChangeEmail
    },
    {
      id: "message",
      label: "Sua mensagem",
      type: "textarea",
      onChange: handleChangeMessage
    },
  ];

  return (
    <section data-aos="fade-right" className="py-20 w-full space-y-[5rem] md:space-y-[10rem]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center">
        <form
          onSubmit={sendEmail}
          className="w-full md:w-6/12 space-y-10 flex flex-col justify-start items-start"
        >
          <h1 className="text-[2rem]">Diga Olá! 👋</h1>

          {inputFields.map((input) => (
            <Input
              key={input.id}
              id={input.id}
              label={input.label}
              type={input.type}
              value={formData[input.id as keyof FormDataType]}
              onChange={input.onChange}
              error={formErrors[input.id as keyof FormErrorsType]}
            />
          ))}

          <Button type="submit">
            <MdSend className="mr-2 w-[1.2rem] h-[1.2rem] font-bold" />
            Enviar mensagem
          </Button>

        </form>
          <button onClick={handleClearForm}>limpar</button>
      </div>
    </section>
  );
};

export default Form;
