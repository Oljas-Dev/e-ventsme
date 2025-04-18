import styled from "styled-components";

import Settings from "../ui/Settings";
import EventsList from "../ui/EventsList";
import MainBoard from "../ui/MainBoard";
import Footer from "../ui/Footer";

const StyledDashBoard = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
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
      <Footer />
    </StyledDashBoard>
  );
}
