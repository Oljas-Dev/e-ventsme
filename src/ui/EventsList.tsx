import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link } from "react-router";
import UseImages from "./UseImages";

const StyledH3 = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: absolute;
  bottom: 1rem;
  right: 1.8rem;
`;

const emptyImage = {
  widthHeight: { width: "2rem", height: "1rem" },
  content: "edit",
  afterPadding: "3.4rem",
};

export default function EventsList() {
  return (
    <Wrapper
      $padding="1rem 2rem"
      $backgroundColor="var(--color-events)"
      $rowStart="2"
      $height="20rem"
      $color="var(--color-user)"
      $gap="0.5rem"
    >
      <StyledH3>Your e-vents so far</StyledH3>
      <p>There are no e-vents🤷‍♂️</p>
      <StyledLink to="#">
        <UseImages styles={emptyImage} />
        join e-vent
      </StyledLink>
    </Wrapper>
  );
}
