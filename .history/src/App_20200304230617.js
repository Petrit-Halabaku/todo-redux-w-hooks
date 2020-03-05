import React from "react";
import "./App.css";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <Component2 />
          <Component1 />
        </div>
      </header>
    </div>
  );
}

export default App;
