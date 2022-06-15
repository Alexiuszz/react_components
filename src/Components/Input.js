import React from "react";

function Input({
  placeholder='',
  type = "text",
  value = "",
  onChange = f => f,
  name='',
  className='',
}) {
  return (
    <div className={`myInput ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
