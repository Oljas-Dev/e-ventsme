import styled from "styled-components";

import Settings from "../ui/Settings";
import EventsList from "../ui/EventsList";
import MainBoard from "../ui/MainBoard";
import Footer from "../ui/Footer";
import { useUser } from "../authetication/useUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const StyledDashBoard = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 2rem;

  margin: 4rem;
  max-width: 144rem;
`;

export default function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  const fullName = user?.user_metadata.fullName;

  useEffect(() => {
    if (fullName === "") navigate("/details/fullname");
  }, [navigate, fullName]);

  return (
    <StyledDashBoard>
      <Settings />
      <EventsList />
      <MainBoard />
      <Footer />
    </StyledDashBoard>
  );
}
