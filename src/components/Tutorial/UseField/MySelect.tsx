import React from "react";
import { useField } from "formik";

interface MySelectProps {
  label: string
  name: string
  children: JSX.Element[]
}

const MySelect = ({ children, name, label }: MySelectProps) => {
  const [field, meta] = useField({ name });
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select {...field} name={name}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
