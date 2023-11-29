import { useContext, useState } from "react";

import { SizeContext } from "../contexts/Context";

import SetSettings from "../functions/SetSettings";

import close from "../data/images/close.svg";
import gear from "../data/images/settings.svg";

const sizes = [
  "selected",
  "unselected"
];

const Settings = () => {
  const [open, setOpen] = useState(false);
  const { size, setSize } = useContext(SizeContext);

  if (window.localStorage.getItem("init") == null) SetSettings();

  function toggleSettings() {
    setOpen(!open);
  }

  function setStore(key, val) {
    window.localStorage.setItem(key, val);
    setSize(val);
  }

  function mapping(state, val, classes) {
    if (state === val) return classes[0];
    return classes[1];
  }
  
  return (
    <>
      <img id="setting" src={gear} alt="settings" onClick={() => toggleSettings()}/>
      {open ?
        <div id="settings" onClick={() => toggleSettings()}>
          <div className="settings" onClick={(e) => e.stopPropagation()}>
            <h1>Settings</h1>
            <img className="close" src={close} alt="X" onClick={() => toggleSettings()} />
            <div className="choices">
              <div className="set-size">
                <h4>Image Size:</h4>
                <div className="sizes">
                  <button className={"size " + mapping(size, "xs", sizes)} onClick={() => setStore("size", "xs")}>xs</button>
                  <button className={"size " + mapping(size, "sm", sizes)} onClick={() => setStore("size", "sm")}>sm</button>
                  <button className={"size " + mapping(size, "md", sizes)} onClick={() => setStore("size", "md")}>md</button>
                  <button className={"size " + mapping(size, "lg", sizes)} onClick={() => setStore("size", "lg")}>lg</button>
                  <button className={"size " + mapping(size, "xl", sizes)} onClick={() => setStore("size", "xl")}>xl</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      :
        <></>
      }
    </>
  )
}

export default Settings;