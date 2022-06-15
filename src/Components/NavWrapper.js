import React from 'react';

function NavWrapper({children, className}) {
  return (
    <div className={`a-V navWrapper ${className}`}>
        {children}
    </div>
  );
}

export default NavWrapper;