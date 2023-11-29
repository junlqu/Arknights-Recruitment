import { useState } from "react";

import { SizeContext, SizeContextReadOnly } from "./contexts/Context";
import Settings from "./components/Settings";
import Main from "./components/Main";

import "./css/main.scss";

const App = () => {
  const [size, setSize] = useState("sm");
  const sizeObj = {size, setSize}

  return (
    <SizeContext.Provider value={sizeObj}>
      <SizeContextReadOnly.Provider value={size}>
        <div className="App">
          <Settings/>
          <Main />
        </div>
      </SizeContextReadOnly.Provider>
    </SizeContext.Provider>
  );
}

export default App;