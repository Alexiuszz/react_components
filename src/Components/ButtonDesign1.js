import React from "react";

function ButtonDesign1({ txt, className, handleSubmit }) {
  return (
    <button className={className} onClick={handleSubmit}>
      {txt}
    </button>
  );
}

export default ButtonDesign1;
