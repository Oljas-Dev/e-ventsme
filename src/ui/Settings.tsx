import { FlexBtw, FlexCol } from "../reusableComponents/StyledReusable";
import UseImages from "./UseImages";
import Wrapper from "./Wrapper";
import Avatar from "../../public/userAvatar.png";
import expandIcon from "../../public/expand.png";
import features from "../../public/features.png";
import styled from "styled-components";
import { ChangeEvent, useRef, useState } from "react";
import { Button } from "./Button";
import { btnAppear } from "../keyframes/keyframes";

const IconsContainer = styled(FlexCol)`
  gap: 1rem;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  text-align: center;
  background-color: transparent;
  color: var(--color-footer);

  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: none;

  &::placeholder {
    color: inherit;
  }
`;

const StyledStatus = styled.p`
  text-align: center;
  animation: ${btnAppear} 1s var(--spring-easing);
`;

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
`;

// Images objects to pass the styles to the UseImages component
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

export default function Settings() {
  const [status, setStatus] = useState("");
  const [showButton, setShowButton] = useState("");

  const statusInput = useRef<HTMLInputElement>(null);
  const showStatus = status.length > 0;
  const inputValue = statusInput.current?.value;

  function handleStatusChange(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus(inputValue || "");
    setShowButton("");
  }

  return (
    <Wrapper $padding="2rem" $gap="1rem">
      <FlexBtw>
        <UseImages styles={userAvatar} />
        <p>Welcome back Kevin</p>
        <IconsContainer>
          <UseImages styles={styledExpandIcon} />
          <UseImages styles={styledFeatures} />
        </IconsContainer>
      </FlexBtw>
      {showStatus ? (
        <StyledStatus>{status}</StyledStatus>
      ) : (
        <StyledForm onSubmit={handleStatusChange}>
          <StyledInput
            type="text"
            placeholder="what's on your mind..."
            ref={statusInput}
            onChange={(e) => setShowButton(e.target.value)}
          />
          {showButton.length > 0 && (
            <Button type="submit" $padding="0.5rem 2rem">
              set
            </Button>
          )}
        </StyledForm>
      )}
    </Wrapper>
  );
}
