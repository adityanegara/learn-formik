import React from "react";
import { useField } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface MyTextInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

const MyTextInput = ({ label, name, placeholder, type }: MyTextInputProps) => {
  const [field, meta] = useField({ name, type, placeholder: placeholder });
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input {...field} className="text-input" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
