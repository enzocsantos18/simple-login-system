import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface Props {
  name: string;
  label?: string;
}
type InputProps = JSX.IntrinsicElements["input"] & Props;
const Input: React.FC<InputProps> = ({ name, label, type, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div className="inputField">
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          {...rest}
        />
        {type === "password" && (
          <>
            {isPasswordVisible ? (
              <span onClick={() => setPasswordVisible(false)}>
                <IoMdEye size={20} />
              </span>
            ) : (
              <span onClick={() => setPasswordVisible(true)}>
                <IoMdEyeOff size={20} />
              </span>
            )}
          </>
        )}
      </div>

      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
export default Input;
