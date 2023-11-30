import { useState } from "react";

import { SizeContext, SizeContextReadOnly, ThreePlusContext, ThreePlusContextReadOnly, MaxTagsContext, MaxTagsContextReadOnly } from "./contexts/Context";
import Settings from "./components/Settings";
import Main from "./components/Main";

import "./css/main.scss";

const App = () => {
  const [size, setSize] = useState("sm");
  const sizeObj = {size, setSize}
  const [threePlus, setThreePlus] = useState(true);
  const threePlusObj = {threePlus, setThreePlus}
  const [maxTags, setMaxTags] = useState(3);
  const maxTagsObj = {maxTags, setMaxTags}

  return (
    <SizeContext.Provider value={sizeObj}>
      <SizeContextReadOnly.Provider value={size}>
        <ThreePlusContext.Provider value={threePlusObj}>
          <ThreePlusContextReadOnly.Provider value={threePlus}>
            <MaxTagsContext.Provider value={maxTagsObj}>
              <MaxTagsContextReadOnly.Provider value={maxTags}>
                <div className="App">
                  <Settings/>
                  <Main />
                </div>
              </MaxTagsContextReadOnly.Provider>
            </MaxTagsContext.Provider>
          </ThreePlusContextReadOnly.Provider>
        </ThreePlusContext.Provider>
      </SizeContextReadOnly.Provider>
    </SizeContext.Provider>
  );
}

export default App;