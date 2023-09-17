import Header from "@/components/Sections/Header";
import Form from "@/components/Form";
import Footer from "@/components/Sections/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col overflow-hidden min-h-screen">
        <Header />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
