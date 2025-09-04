import React, { useState, cloneElement } from "react";

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Child ko clone karke class aur events add karna
  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false),
    children: (
      <>
        {children.props.children}
        {showTooltip && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
}

export default Tooltip;
