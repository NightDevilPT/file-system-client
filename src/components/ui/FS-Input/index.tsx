"use client";

import React, { useState, useEffect } from "react";
import { FSInputInterface, InputVariantEnum } from "@/types/form.type";
import { Input } from "@nextui-org/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import icons, { IconType } from "@/utils/icons";

const FSInput: React.FC<FSInputInterface> = ({
  type,
  value,
  placeholder,
  label,
  name,
  icon,
  formVarient,
  disabled,
  onChange,
  required,
  error,  // Added error prop
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);

  useEffect(() => {
    setInputType(isVisible && type === "password" ? "text" : type);
  }, [isVisible, type]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div className="w-full">
      <Input
        type={inputType}
        name={name}
        variant={formVarient || InputVariantEnum.FLAT}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleOnChange}
        disabled={disabled}
        startContent={
          icon && (
            <div className="text-xl text-default-400 pointer-events-none relative mr-3">
              {icons(icon as IconType)}
              {required && (
                <span className="absolute -right-2 -top-2 text-red-500 w-3 h-3">*</span>
              )}
            </div>
          )
        }
        endContent={
          type === "password" && (
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <AiOutlineEye className="text-xl text-default-400 pointer-events-none" />
              ) : (
                <AiOutlineEyeInvisible className="text-xl text-default-400 pointer-events-none" />
              )}
            </button>
          )
        }
        className={`min-w-40 w-full !text-foreground-900 ${error ? 'border-red-500' : ''}`}
        errorMessage={error}
        isInvalid={!!error}
      />
    </div>
  );
};

export default FSInput;
