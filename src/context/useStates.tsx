import { useContext } from "react";
import { StatesContext } from "./statesContext";

export default function useStates() {
  const context = useContext(StatesContext);
  if (context === undefined) {
    throw new Error("useStates must be used within a StatesProvider");
  }
  return context;
}
