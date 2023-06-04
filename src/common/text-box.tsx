import React, { ChangeEvent, useState } from "react";

type textBoxProps = {
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  label?: string;
  disabled?: boolean;
};

const TextBox = (props: textBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    value,
    onChange,
    placeHolder,
    type,
    className,
    required,
    label,
    disabled = false,
  } = props;
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className=" flex flex-col text-white ">
      <label className=" mb-1 ml-1 text-md text-white ">
        {label}
        {required && <span className=" text-red-500 ">*</span>}
      </label>
      <input
        required={required}
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`border border-gray-300 px-3 py-2 rounded-md bg-transparent ${className} `}
      />
    </div>
  );
};

export default TextBox;
