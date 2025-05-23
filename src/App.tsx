import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Login from "./authetication/Login";
import { StatesProvider } from "./context/statesContext";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
import Applayout from "./ui/Applayout";
import SignUp from "./authetication/SignUp";
import AuthSuccess from "./authetication/AuthSuccess";
import { Details } from "./authetication/UserDetails";
import { DashboardProvider } from "./context/dashboardContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="authsuccess" element={<AuthSuccess />} />

            <Route
              element={
                <ProtectedRoute>
                  <Applayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route
                path="dashboard"
                element={
                  <DashboardProvider>
                    <Dashboard />
                  </DashboardProvider>
                }
              />
              <Route
                path="details/fullname"
                element={
                  <Details>
                    <Details.AvatarAndUserName />
                  </Details>
                }
              />
              <Route
                path="details/birthdate"
                element={
                  <Details>
                    <Details.BirthDate />
                  </Details>
                }
              />
              <Route
                path="details/address"
                element={
                  <Details>
                    <Details.Address />
                  </Details>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </StatesProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
