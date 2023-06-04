import React, { useRef, useState } from "react";

const Tooltip = ({ text, children }: any) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const myRef = useRef<any>();

  const handleMouseEnter = () => {
    //setShowTooltip(true);
    if (myRef.current) {
      myRef.current.classList.add("opacity-100");
    }
  };

  const handleMouseLeave = () => {
    if (myRef.current) {
      myRef.current.classList.remove("opacity-100");
    }
    //setShowTooltip(false);
  };

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          ref={myRef}
          className="tooltip pl-2 pr-4 py-1 opacity-0 transition-all duration-200 ease-linear "
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
