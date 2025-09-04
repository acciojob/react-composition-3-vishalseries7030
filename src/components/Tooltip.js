import React, { useState, cloneElement } from "react";

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false),
    children: (
      <>
        {children.props.children}
        <div
          className="tooltiptext"
          style={{ visibility: showTooltip ? "visible" : "hidden", opacity: showTooltip ? 1 : 0 }}
        >
          {text}
        </div>
      </>
    ),
  });
}

export default Tooltip;
