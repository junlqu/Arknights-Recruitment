import { useState } from "react";

import Recruit from "./Recruit";
import Upload from "./Upload";

const Main = () => {
  const [selected, setSelect] = useState(0);

  function toggleSelect() {
    setSelect((selected + 1) % 2);
  }

  return (
    <>
      
      {selected === 0 ? 
      <Recruit /> : 
      <Upload />}
      <button onClick={() => toggleSelect()}>
        Click me
      </button>
    </>
  )
}

export default Main;