import { createContext } from "react";

// Size of images
export const SizeContext = createContext({
  size: "sm",
  setSize: () => {}
});

export const SizeContextReadOnly = createContext("sm");

// Operator minimum star 3
export const ThreePlusContext = createContext({
  threePlus: true,
  setThreePlus: () => {}
});

export const ThreePlusContextReadOnly = createContext(true);

// Max number of selectable tags
export const MaxTagsContext = createContext({
  maxTags: true,
  setMaxTags: () => {}
});

export const MaxTagsContextReadOnly = createContext(3);