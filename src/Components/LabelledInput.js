import React, { useState } from "react";
import Input from "./Input";

export default function LabelledInput({
  className = "",
  name = "",
  label = "",
  type = "text",
  value,
  handleChange = (f) => f,
}) {
  const [active, setActive] = useState(false);

  const onChange = (e) => {
    let { value } = e.target;
    handleChange(e.target);
    if (value !== "") {
      setActive(true);
    } else setActive(false);
  };
  return (
    <div className={`inputWLabel ${className}`}>
      <label className={active ? "Active" : ""} htmlFor={type}>
        {label}
      </label>
      <Input type={type} value={value} onChange={onChange} name={name} />
      <div className="focusBorder"></div>
    </div>
  );
}
