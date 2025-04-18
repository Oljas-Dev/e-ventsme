import { Outlet } from "react-router";
import styled from "styled-components";

const StyledApplayout = styled.main``;

export default function Applayout() {
  return (
    <StyledApplayout>
      <Outlet />
    </StyledApplayout>
  );
}
