import { useContext, useEffect, useState } from "react";

import { SizeContext, ThreePlusContext } from "../contexts/Context";

import SetSettings from "../functions/SetSettings";

import close from "../data/images/close.svg";
import gear from "../data/images/settings.svg";

const states = [
  "selected",
  "unselected"
];

const Settings = () => {
  const [open, setOpen] = useState(false);
  const { size, setSize } = useContext(SizeContext);
  const { threePlus, setThreePlus} = useContext(ThreePlusContext);
  
  useEffect(() => {
    if (window.localStorage.getItem("init") == null) SetSettings();
    else {
      setSize(window.localStorage.getItem("size"));
      setThreePlus(window.localStorage.getItem("threePlus"));
    }
  });

  

  function toggleSettings() {
    setOpen(!open);
  }

  function setStore(key, val) {
    window.localStorage.setItem(key, val);
    if (key === "size") setSize(val);
    if (key === "threePlus") setThreePlus(val);
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
              <div id="set-three-plus">
                <h4>3+ Star Only:</h4>
                <div className="options">
                  <button className={"button " + mapping(threePlus, "true", states)} onClick={() => setStore("threePlus", true)} >On</button>
                  <button className={"button " + mapping(threePlus, "false", states)} onClick={() => setStore("threePlus", false)} >Off</button>
                </div>
              </div>
              <div id="set-size">
                <h4>Image Size:</h4>
                <div className="options">
                  <button className={"button " + mapping(size, "xs", states)} onClick={() => setStore("size", "xs")}>xs</button>
                  <button className={"button " + mapping(size, "sm", states)} onClick={() => setStore("size", "sm")}>sm</button>
                  <button className={"button " + mapping(size, "md", states)} onClick={() => setStore("size", "md")}>md</button>
                  <button className={"button " + mapping(size, "lg", states)} onClick={() => setStore("size", "lg")}>lg</button>
                  <button className={"button " + mapping(size, "xl", states)} onClick={() => setStore("size", "xl")}>xl</button>
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