import { createContext, useState } from "react";
import { reactChildren } from "../reusableComponents/types";

interface StatesContextType {
  move: number;
  setMove: (value: number) => void;
  step: number;
}

export const StatesContext = createContext<StatesContextType>(
  {} as StatesContextType
);

export function StatesProvider({ children }: reactChildren) {
  const [move, setMove] = useState(0);

  const step = window.innerWidth > 500 ? 2 : 1; // Adjust step based on screen width
  return (
    <StatesContext.Provider value={{ move, setMove, step }}>
      {children}
    </StatesContext.Provider>
  );
}
