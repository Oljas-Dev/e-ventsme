import styled from "styled-components";

import Settings from "../ui/Settings";
import EventsList from "../ui/EventsList";
import MainBoard from "../ui/MainBoard";

const StyledDashBoard = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  // grid-template-rows: 40% 50% 10%;
  gap: 2rem;

  margin: 4rem;
  max-width: 144rem;
`;

export default function Dashboard() {
  return (
    <StyledDashBoard>
      <Settings />
      <EventsList />
      <MainBoard />
    </StyledDashBoard>
  );
}
