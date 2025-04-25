import styled from "styled-components";
import { ArrowLeft } from "../reusableComponents/StyledReusable";
import useStates from "../context/useStates";
import { useEffect } from "react";

interface LoginHeaderProps {
  heading: string;
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export default function LoginHeader({ heading }: LoginHeaderProps) {
  const { move, setMove, step } = useStates();

  const width = window.innerWidth;
  const stopMoving = (width - 500) / 2 / 10;

  function moveBack() {
    setMove(move - 1);
  }
  function moveForward() {
    setMove(move + 1);
  }

  useEffect(() => {
    if (Math.abs(move * step) >= stopMoving) setMove(0);
  }, [move, setMove, stopMoving, step]);

  return (
    <StyledHeader>
      <ArrowLeft onClick={moveBack} />
      <h2>{heading}</h2>
      <ArrowLeft $rotate="rotate(180deg)" onClick={moveForward} />
    </StyledHeader>
  );
}
