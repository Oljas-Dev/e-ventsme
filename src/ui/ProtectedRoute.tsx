import styled from "styled-components";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import { useUser } from "../authetication/useUser";
import { reactChildren } from "../reusableComponents/types";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }: reactChildren) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <p>is Loading...</p>
      </FullPage>
    );

  if (isAuthenticated) return children;
}
