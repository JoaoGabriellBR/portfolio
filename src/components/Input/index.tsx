import React, { useState } from 'react';
import { AiOutlineWarning } from "react-icons/ai";

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  onChange: (e: any) => void;
  error: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, value, type, onChange, error }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyles = `${error ? 'border-red-500' : 'border-neutral-400'} w-full py-3 px-2 font-normal text-neutral-400 bg-transparent border-b focus:outline-none focus:border-white`;

  return (
    <div className="relative w-full">
      <label
        className={`absolute top-0 left-2 transition-transform ${isFocused || value ? '-translate-y-4 text-sm text-white' : 'translate-y-2 text-base text-neutral-400'
          }`}
        htmlFor={id}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputStyles}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputStyles}
        />
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex items-center space-x-1">
          <button><AiOutlineWarning className="text-lg" /></button>
          <span>Preencha este campo!</span>
        </p>
      )}
    </div>
  );
};

export default Input;
