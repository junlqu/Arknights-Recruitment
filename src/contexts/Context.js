import { createContext } from "react";

export const SizeContext = createContext({
  size: "sm",
  setSize: () => {}
});

export const SizeContextReadOnly = createContext("sm");