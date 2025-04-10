import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./login/Login";
import { StatesProvider } from "./context/statesContext";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </StatesProvider>
    </QueryClientProvider>
  );
}

export default App;
