import styled from "styled-components";
import { appear } from "../keyframes/keyframes";

interface WrapperProps {
  $gap?: string;
  $padding?: string;
  $backgroundColor?: string;
  $rowStart?: string;
  $height?: string;
  $color?: string;
}

const Wrapper = styled.div<WrapperProps>`
  grid-row: ${(props) => props.$rowStart};
  color: ${(props) => props.$color || "inherit"};

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "3rem"};
  background-color: ${(props) => props.$backgroundColor || "var(--color-user)"};
  animation: ${appear} 1s var(--spring-easing);

  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding || "4rem"};
  border-radius: 3rem;
  border-top: 2px solid var(--color-user-stroke);
  border-left: 1px solid var(--color-user-stroke);
  box-shadow: var(--shadow);
  position: relative;
`;

export default Wrapper;
