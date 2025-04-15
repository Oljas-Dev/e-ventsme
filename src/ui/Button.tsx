import styled from "styled-components";
import { btnAppear } from "../keyframes/keyframes";

interface ButtonProps {
  $backgroundColor?: string;
  $color?: string;
  $padding?: string;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  background-color: ${(props) => props.$backgroundColor || "var(--color-user)"};
  color: ${(props) => props.$color || "var(--color-footer)"};
  animation: ${btnAppear} 1s var(--spring-easing);

  border-top: 2px solid var(--color-user-stroke);
  border-left: 1px solid var(--color-user-stroke);
  border-right: none;
  border-bottom: none;
  border-radius: 1.5rem;
  padding: ${(props) => props.$padding || "1.5rem"};
  box-shadow: var(--shadow);
  transition: all 1s var(--spring-easing);

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    box-shadow: var(--active-shadow);
    transform: scale(0.99);
  }
`;

const MainBtn = styled(Button)`
  background-color: var(--color-user);
  color: var(--color-footer);
`;

export { Button, MainBtn };
