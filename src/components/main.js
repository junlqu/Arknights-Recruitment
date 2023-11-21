import { useState } from "react";
import Recruit from "./recruit";
import Upload from "./upload";

const Main = () => {
  const [selected, setSelect] = useState(0);

  function toggleSelect() {
    setSelect((selected + 1) % 2);
  }

  return (
    <>
      <button onClick={toggleSelect}>
        Click me
      </button>
      {selected === 0 ? 
      <Recruit /> : 
      <Upload />}
    </>
  )
}

export default Main;