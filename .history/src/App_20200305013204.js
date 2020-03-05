import React from "react";
import "./App.css";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

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
