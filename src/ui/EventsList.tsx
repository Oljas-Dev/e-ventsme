import Wrapper from "./Wrapper";
import UseImages from "./UseImages";
import addEvent from "../../public/add.png";
import { StyledLink } from "../reusableComponents/StyledReusable";
import styled from "styled-components";

const addEventObject = {
  image: addEvent,
  widthHeight: { width: "4.2rem", height: "4.6rem" },
  flexShrink: "0",
  showBubble: "none",
};

const StyledAddEvent = styled(StyledLink)`
  width: 250%;
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  transition: all 1s var(--spring-easing);

  &:hover {
    transform: scale(1.15);
  }
`;

const StyledJoinEvent = styled(StyledLink)`
  position: absolute;
  bottom: 1rem;
  right: 1.8rem;
`;

export default function EventsList() {
  return (
    <Wrapper
      $padding="1rem 2rem"
      $backgroundColor="var(--color-events)"
      $rowStart="2"
      $height="20rem"
      $color="var(--color-user)"
      $gap="0.5rem"
      $borderColor="var(--color-events-stroke)"
    >
      <h3>Your e-vents so far</h3>
      <UseImages styles={addEventObject}>
        <StyledAddEvent to="#">+ add</StyledAddEvent>
      </UseImages>

      <StyledJoinEvent to="#">join e-vent</StyledJoinEvent>
    </Wrapper>
  );
}
