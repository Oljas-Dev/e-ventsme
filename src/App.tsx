import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Login from "./authetication/Login";
import { StatesProvider } from "./context/statesContext";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
import Applayout from "./ui/Applayout";
import SignUp from "./authetication/SignUp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route
              element={
                <ProtectedRoute>
                  <Applayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StatesProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
