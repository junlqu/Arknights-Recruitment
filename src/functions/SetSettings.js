import { useState } from "react";

// The default settings
const defaultSettings = {
  "init": "true",
  "size": "sm",
  "threePlus": true,
  "maxTags": 3,
}

// Function to initiate default setting values
const SetSettings = () => {
  const [init, setInit] = useState(0);

  // Sets a value to local storage
  function setStore(key, val) {
    window.localStorage.setItem(key, val);
    setInit(init);
  }

  // Sets default value to local storage
  function setDefault(setting) {
    setStore(setting, defaultSettings[setting]);
  }

  setDefault("init");
  setDefault("size");
  setDefault("threePlus");
  setDefault("maxTags");
}

export default SetSettings;