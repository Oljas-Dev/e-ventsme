import styled from "styled-components";
import { btnAppear } from "../keyframes/keyframes";

interface ButtonProps {
  $backgroundColor?: string;
  $borderColor?: string;
  $color?: string;
  $padding?: string;
  $shadow?: string;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  background-color: ${(props) => props.$backgroundColor || "var(--color-user)"};
  color: ${(props) => props.$color || "var(--color-footer)"};
  animation: ${btnAppear} 1s var(--spring-easing);

  border-top: 2px solid
    ${(props) => props.$borderColor || "var(--color-user-stroke)"};
  border-left: 1px solid
    ${(props) => props.$borderColor || "var(--color-user-stroke)"};
  border-right: none;
  border-bottom: none;
  border-radius: 1.5rem;
  padding: ${(props) => props.$padding || "1.5rem"};
  box-shadow: ${(props) => props.$shadow || "var(--shadow)"};
  transition: all 1s var(--spring-easing);
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    box-shadow: var(--active-shadow);
    transform: scale(0.99);
  }

  &:disabled {
    background-color: var(--color-user-inactive);
    box-shadow: none;
  }
`;

const MainBtn = styled(Button)`
  background-color: var(--color-user);
  color: var(--color-footer);
`;

export { Button, MainBtn };
