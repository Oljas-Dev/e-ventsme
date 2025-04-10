import styled from "styled-components";

interface ButtonProps {
  $backgroundColor?: string;
  $color?: string;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  background-color: ${(props) => props.$backgroundColor || "var(--color-user)"};
  color: ${(props) => props.$color || "var(--color-footer)"};
  border-top: 2px solid var(--color-user-stroke);
  border-left: 1px solid var(--color-user-stroke);
  border-right: none;
  border-bottom: none;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: transform 1s var(--spring-easing),
    box-shadow 1s var(--spring-easing);

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
