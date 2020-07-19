import React from "react";
import CK from "./components/CK";
import Side from "./components/Side";
import Save from "./components/Save";
import Editor from "./components/Editor";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <div className="wrapper">
          <Side />
          <div className="editor-container">
            <Editor />
            <CK />
            <Save />
          </div>
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
