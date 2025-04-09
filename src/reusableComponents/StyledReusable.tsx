import styled from "styled-components";
import arrow from "../../public/back.png";

interface ArrowLeftProps {
  $rotate?: string;
}

const ArrowLeft = styled.span<ArrowLeftProps>`
  font-size: 1.2rem;
  position: relative;
  background: url(${arrow}) no-repeat 0 0;
  background-size: 4rem 2rem;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  transform: ${(props) => props.$rotate || ""};
  transition: all 1s var(--spring-easing);

  &:hover {
    transform: scale(1.2) ${(props) => props.$rotate || ""};
  }
`;

export { ArrowLeft };
