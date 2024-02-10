import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { InputProps } from "@/utils/types";

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyles = `border-${error ? "red-500" : "neutral-400"} w-full py-3 px-2 font-normal text-neutral-400 bg-transparent border-b border-neutral-800 focus:outline-none focus:border-white`;

  const commonInputProps = {
    id,
    value,
    onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: inputStyles,
  };

  return (
    <div className="relative w-full">
      <label
        className={`absolute top-0 left-2 transition-transform ${isFocused || value
          ? "-translate-y-4 text-sm text-white"
          : "translate-y-2 text-base text-neutral-400"
          }`}
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...commonInputProps} />
      ) : (
        <input type={type} {...commonInputProps} />
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex items-center space-x-1">
          <button>
            <AiOutlineWarning className="text-lg" />
          </button>
          <span>Preencha o campo!</span>
        </p>
      )}
    </div>
  );
};

export default Input;
