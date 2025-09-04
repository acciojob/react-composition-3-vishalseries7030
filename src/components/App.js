import React from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Tooltip text="This is another tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="Another tooltip text">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
