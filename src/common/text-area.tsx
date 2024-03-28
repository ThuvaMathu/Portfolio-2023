import React, { ChangeEvent, useState } from "react";

type textBoxProps = {
  value: string;
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  placeHolder?: string;
  className?: string;
  required?: boolean;
  label?: string;
  disabled?: boolean;
};

const TextArea = (props: textBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    value,
    onChange,
    placeHolder,
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
    <div className=" flex flex-col text-white w-full ">
      <label className=" mb-1 ml-1 text-md text-white ">
        {label} {required && <span className=" text-red-500 ">*</span>}
      </label>
      <textarea
        placeholder={placeHolder}
        value={value}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange(e)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`border border-gray-300 px-3 py-2 rounded-md bg-transparent w-full ${className} `}
      />
    </div>
  );
};

export default TextArea;
