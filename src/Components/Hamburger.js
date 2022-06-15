import React from "react";

function Hamburger({ className = "", open = (f) => f, color = "black" }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      className={`menuButton ${className}`}
      onClick={() => {
        open();
        setClicked(!clicked);
      }}
    >
      <div id="l1" style={{ backgroundColor: color }}></div>
      <div id="l2" style={{ backgroundColor: color }}></div>
      <div id="l3" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default Hamburger;
