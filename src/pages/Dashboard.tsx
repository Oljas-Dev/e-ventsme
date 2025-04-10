import styled from "styled-components";
import { Expand, FlexBtw } from "../reusableComponents/StyledReusable";
import Wrapper from "../ui/Wrapper";

const StyledDashBoard = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 2rem;
  margin: 4rem;

  max-width: 144rem;
`;

const Image = styled.div`
  background: gray;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  flex-shrink: 0;

  border: 2px solid var(--color-footer);
`;

export default function Dashboard() {
  return (
    <StyledDashBoard>
      <Wrapper $gap="1rem" $padding="2rem">
        <FlexBtw>
          <Image />
          <p>Welcome back Kevin</p>
          <Expand />
        </FlexBtw>
        <input type="text" placeholder="what's on your mind" />
      </Wrapper>
    </StyledDashBoard>
  );
}
