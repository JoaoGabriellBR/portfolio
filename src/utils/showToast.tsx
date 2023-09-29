import { toast, ToastOptions } from "react-toastify";

const showToast = (message: string, type: "success" | "error") => {
  const options: ToastOptions = {
    type,
    position: "top-right",
    theme: "colored",
    autoClose: 3000,
  }
  return toast(message, options);
};

export default showToast;
