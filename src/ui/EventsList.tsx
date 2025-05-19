import Wrapper from "./Wrapper";
// import addEvent from "../../public/add.png";
import { StyledLink } from "../reusableComponents/StyledReusable";
import styled from "styled-components";
import useDashboard from "../context/dashboardContext";

// const addEventObject = {
//   image: addEvent,
//   widthHeight: { width: "4.2rem", height: "4.6rem" },
//   flexShrink: "0",
//   showBubble: "none",
// };

// const StyledAddEvent = styled(StyledLink)`
//   width: 250%;
//   position: absolute;
//   top: 1.2rem;
//   left: 1rem;
//   transition: all 1s var(--spring-easing);

//   &:hover {
//     transform: scale(1.15);
//   }
// `;

const StyledJoinEvent = styled(StyledLink)`
  position: absolute;
  bottom: 1rem;
  right: 1.8rem;
`;

const StyledUl = styled.ul`
  margin-bottom: 2rem;
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  font-size: 2rem;
  font-weight: 500;

  border-bottom: 0.5rem solid var(--color-user);
  cursor: pointer;

  position: relative;
  z-index: 2;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0.2rem;
    top: 0.7rem;
    color: var(--color-footer);
    z-index: -1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default function EventsList() {
  const { setType } = useDashboard();
  return (
    <Wrapper
      $padding="1rem 2rem"
      $backgroundColor="var(--color-events)"
      $rowStart="2"
      $height=""
      $color="var(--color-user)"
      $gap="0.5rem"
      $borderColor="var(--color-events-stroke)"
    >
      <StyledUl>
        <StyledLi data-text="notes" onClick={() => setType("notes")}>
          notes
        </StyledLi>
        <StyledLi data-text="todos" onClick={() => setType("todos")}>
          todos
        </StyledLi>
        <StyledLi data-text="parties" onClick={() => setType("parties")}>
          parties
        </StyledLi>
        <StyledLi data-text="projects" onClick={() => setType("projects")}>
          projects
        </StyledLi>
      </StyledUl>

      <StyledJoinEvent to="#">join e-vent</StyledJoinEvent>
    </Wrapper>
  );
}
