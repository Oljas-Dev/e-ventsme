import { createContext, useContext, useState } from "react";
import { reactChildren } from "../reusableComponents/types";

interface DashProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const dashboardContext = createContext<DashProps>({} as DashProps);

export function DashboardProvider({ children }: reactChildren) {
  const [type, setType] = useState("notes");

  return (
    <dashboardContext.Provider value={{ type, setType }}>
      {children}
    </dashboardContext.Provider>
  );
}

export default function useDashboard() {
  const context = useContext(dashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
