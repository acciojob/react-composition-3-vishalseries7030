import React, { useState } from "react";
// import "./Tooltip.css"; // for styling

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}
      {showTooltip && (
        <span className="tooltiptext">{text}</span>
      )}
    </div>
  );
}

export default Tooltip;
