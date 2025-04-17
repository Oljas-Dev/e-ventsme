import Wrapper from "./Wrapper";

export default function MainBoard() {
  return (
    <Wrapper
      $columnStart="2"
      $rowStart="1 / span 2"
      $backgroundColor="var(--color-board)"
      $borderColor="var(--color-board-stroke)"
      $padding="1rem 2rem"
    >
      <h3>Let's the e-venting begin</h3>
      <p>There are no e-vents🤷‍♂️</p>
    </Wrapper>
  );
}
