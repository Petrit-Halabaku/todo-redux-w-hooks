import React from "react";
import "./App.css";

import ComponentA from "./components/Component1";
import ComponentB from "./components/Component2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <ComponentA />
          <ComponentB />
        </div>
      </header>
    </div>
  );
}

export default App;
