"use client"
import React, { useState } from 'react';

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  onChange: (e: any) => void;
}

const Input: React.FC<InputProps> = ({ id, label, value, type, onChange }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyles = "w-full py-3 px-2 bg-transparent border-b border-neutral-400 focus:outline-none focus:border-white";

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
    </div>
  );
};

export default Input;
