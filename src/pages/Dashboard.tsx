import styled from "styled-components";

import { FlexBtw, FlexCol } from "../reusableComponents/StyledReusable";
import Wrapper from "../ui/Wrapper";
import Avatar from "../../public/userAvatar.png";
import expandIcon from "../../public/expand.png";
import features from "../../public/features.png";
import UseImages from "../ui/UseImages";

const StyledDashBoard = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 2rem;
  margin: 4rem;

  max-width: 144rem;
`;

const IconsContainer = styled(FlexCol)`
  gap: 1rem;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  text-align: center;
  background-color: transparent;
  color: var(--color-footer);
  width: 100%;
  border-radius: 1rem;
  border: none;

  &::placeholder {
    color: inherit;
  }
`;

export default function Dashboard() {
  const userAvatar = {
    image: Avatar,
    widthHeight: { width: "8rem", height: "8rem" },
    padding: "0",
    borderRadius: "50%",
    border: "2px solid var(--color-footer)",
    flexShrink: "0",
  };

  const styledExpandIcon = {
    image: expandIcon,
    widthHeight: { width: "3.6rem", height: "1.6rem" },
    flexShrink: "0",
  };

  const styledFeatures = {
    image: features,
    widthHeight: { width: "4rem", height: "3.5rem" },
    flexShrink: "0",
  };

  return (
    <StyledDashBoard>
      <Wrapper $gap="1rem" $padding="2rem">
        <FlexBtw>
          <UseImages styles={userAvatar} />
          <p>Welcome back Kevin</p>
          <IconsContainer>
            <UseImages styles={styledExpandIcon} />
            <UseImages styles={styledFeatures} />
          </IconsContainer>
        </FlexBtw>
        <StyledInput type="text" placeholder="what's on your mind..." />
      </Wrapper>
    </StyledDashBoard>
  );
}
