import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>React Tooltip Demo</h2>

      <Tooltip text="This is a tooltip for the button">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip for text element">
        <span style={{ borderBottom: "1px dotted black", cursor: "pointer" }}>
          Hover over this text
        </span>
      </Tooltip>

      <br /><br />

      <Tooltip text="Another tooltip for link">
        <a href="#!">Hover over this link</a>
      </Tooltip>
    </div>
  );
}

export default App;
