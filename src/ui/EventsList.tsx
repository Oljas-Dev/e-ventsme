import styled from "styled-components";
import { Link } from "react-router";

import Wrapper from "./Wrapper";
import UseImages from "./UseImages";
import addEvent from "../../public/add.png";

// import UseImages from "./UseImages";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: absolute;
  bottom: 1rem;
  right: 1.8rem;

  &:hover {
  }
`;

const styledAddEvent = {
  image: addEvent,
  widthHeight: { width: "4.2rem", height: "4.6rem" },
  flexShrink: "0",
  showBubble: "none",
};

// const emptyImage = {
//   widthHeight: { width: "2rem", height: "1rem" },
//   content: "edit",
//   afterPadding: "3.4rem",
// };

export default function EventsList() {
  return (
    <Wrapper
      $padding="1rem 2rem"
      $backgroundColor="var(--color-events)"
      $rowStart="2"
      $height="20rem"
      $color="var(--color-user)"
      $gap="0.5rem"
      $borderColor="--color-events-stroke"
    >
      <h3>Your e-vents so far</h3>
      <UseImages styles={styledAddEvent}>
        <Link to="#">+ new e-vent</Link>
      </UseImages>

      <StyledLink to="#">
        {/* <UseImages styles={emptyImage} /> */}
        join e-vent
      </StyledLink>
    </Wrapper>
  );
}
