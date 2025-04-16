import styled from "styled-components";
import arrow from "../../public/back.png";

interface ArrowLeftProps {
  $image?: string;
  $widthHeight?: string[];
  $padding?: string;
  $rotate?: string;
}

interface GridProps {
  $gap?: string;
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

const Input = styled.input`
  font-size: 1.6rem;
  background-color: var(--color-main) !important;
  color: var(--color-footer);
  font-family: "MuseoModerno", sans-serif;
  border-bottom: 2px solid var(--color-user-stroke);
  border-right: 1px solid var(--color-user-stroke);
  border-top: none;
  border-left: none;
  border-radius: 1.5rem;
  outline: none;
  padding: 1.5rem;

  box-shadow: var(--inner-shadow);

  &::placeholder {
    font-family: inherit;
    color: inherit;
  }

  &:focus {
    border: 1px solid var(--color-user-stroke);
    box-shadow: none;
  }
`;

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexBtw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export { ArrowLeft, Input, FlexCol, FlexBtw, Grid };
