import Input from "@/components/Input";
import Button from "../Button";
import { MdSend } from "react-icons/md";

const Form = () => {
  return (
    <>
      <section className="py-7 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-row justify-center items-center">
          <form>
            <h1 className="text-[2rem]">Diga Olá!! 👋</h1>
            <div className="relative z-0 w-full mb-6 group space-y-10">
              <Input />
              <Input />
              <Button>
                <MdSend className="mr-2 w-[1.2rem] h-[1.2rem] font-bold" />
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
