import React from "react";
import { useField } from "formik";

interface MyCheckboxProps {
  children: JSX.Element;
  name: string;
}

const MyCheckbox = ({ children, name }: MyCheckboxProps) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} name={name} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyCheckbox;
