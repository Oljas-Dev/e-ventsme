import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./login/Login";
import { StatesProvider } from "./context/statesContext";

function App() {
  return (
    <StatesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StatesProvider>
  );
}

export default App;
