"use client"

import React, { useState } from 'react';

const Input = ({ label, type, value, onChange }: any) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-full">
      <label
        className={`absolute top-0 left-2 transition-transform ${
          isFocused || value ? '-translate-y-4 text-sm text-white' : 'translate-y-2 text-base text-neutral-400'
        }`}
        htmlFor="floating-input"
      >
        {label}
      </label>
      <input
        id="floating-input"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full py-3 px-2 bg-transparent border-b border-neutral-400 focus:outline-none focus:border-white"
      />
    </div>
  );
};

export default Input;
