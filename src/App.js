import { useState } from "react";

import { SizeContext, SizeContextReadOnly, ThreePlusContext, ThreePlusContextReadOnly } from "./contexts/Context";
import Settings from "./components/Settings";
import Main from "./components/Main";

import "./css/main.scss";

const App = () => {
  const [size, setSize] = useState("sm");
  const sizeObj = {size, setSize}
  const [threePlus, setThreePlus] = useState(true);
  const threePlusObj = {threePlus, setThreePlus}

  return (
    <SizeContext.Provider value={sizeObj}>
      <SizeContextReadOnly.Provider value={size}>
        <ThreePlusContext.Provider value={threePlusObj}>
          <ThreePlusContextReadOnly.Provider value={threePlus}>
            <div className="App">
              <Settings/>
              <Main />
            </div>
            </ThreePlusContextReadOnly.Provider>
        </ThreePlusContext.Provider>
      </SizeContextReadOnly.Provider>
    </SizeContext.Provider>
  );
}

export default App;