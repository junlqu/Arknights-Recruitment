import { useState } from "react";
import Recruit from "./recruit";
import Upload from "./upload";

import imageMatching from "../data/imageMatching";

const Main = () => {
  const [selected, setSelect] = useState(0);
  const [image, setImage] = useState();

  function toggleSelect() {
    setSelect((selected + 1) % 2);
  }

  function random() {
    var keys = Object.keys(imageMatching);
    setImage(imageMatching[keys[keys.length * Math.random() << 0]]);
  }

  return (
    <>
      <button onClick={() => toggleSelect()}>
        Click me
      </button>
      <button onClick={() => random()}>
        Random image
      </button>
      {selected === 0 ? 
      <Recruit /> : 
      <Upload />}
      <img src={image} alt="img"/>
    </>
  )
}

export default Main;