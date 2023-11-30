import { createContext } from "react";

export const SizeContext = createContext({
  size: "sm",
  setSize: () => {}
});

export const SizeContextReadOnly = createContext("sm");

export const ThreePlusContext = createContext({
  threePlus: true,
  setThreePlus: () => {}
});

export const ThreePlusContextReadOnly = createContext(true);