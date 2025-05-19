import styled from "styled-components";
import { appear } from "../keyframes/keyframes";

interface WrapperProps {
  $gap?: string;
  $padding?: string;
  $backgroundColor?: string;
  $rowStart?: string;
  $columnStart?: string;
  $height?: string;
  $color?: string;
  $borderColor?: string;
  $anim?: string;
}

const Wrapper = styled.div<WrapperProps>`
  grid-row: ${(props) => props.$rowStart};
  grid-column: ${(props) => props.$columnStart};
  color: ${(props) => props.$color || "inherit"};

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "3rem"};
  background-color: ${(props) => props.$backgroundColor || "var(--color-user)"};
  animation: ${(props) => props.$anim || appear} 1s var(--spring-easing);

  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding || "4rem"};
  border-radius: 3rem;
  border-top: 2px solid
    ${(props) => props.$borderColor || "var(--color-user-stroke)"};
  border-left: 1px solid
    ${(props) => props.$borderColor || "var(--color-user-stroke)"};
  box-shadow: var(--shadow);
  position: relative;
  transition: all 0.5s var(--spring-easing);
`;

export default Wrapper;
