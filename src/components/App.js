import React, { useState } from "react";
import Content from "./Content";
import Settings from "./Settings";
import TopBar from "./TopBar";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  console.log(showSettings);
  return (
    <div className="app">
      <TopBar settings={{ showSettings, setShowSettings }} />
      {showSettings ? (
        <Settings setShowSettings={setShowSettings} />
      ) : (
        <Content />
      )}
    </div>
  );
}

export default App;
