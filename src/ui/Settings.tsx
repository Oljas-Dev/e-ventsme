import styled from "styled-components";
// import { ChangeEvent, useRef, useState } from "react";

import { FlexBtw, FlexCol } from "../reusableComponents/StyledReusable";
import UseImages from "./UseImages";
import Wrapper from "./Wrapper";
import Avatar from "../../public/userAvatar.png";
import expandIcon from "../../public/expand.png";
import features from "../../public/features.png";
// import { Button } from "./Button";
// import { btnAppear } from "../keyframes/keyframes";
import Stripes from "./Stripes";
import { useUser } from "../authetication/useUser";

const IconsContainer = styled(FlexCol)`
  gap: 2rem;
  align-self: flex-start;
`;

const StyledSettings = styled(FlexBtw)`
  min-height: 10rem;
`;

// const StyledInput = styled.input`
//   font-family: inherit;
//   font-size: 1.6rem;
//   text-align: center;
//   background-color: transparent;
//   color: var(--color-footer);

//   padding: 0.5rem;
//   width: 100%;
//   border-radius: 1rem;
//   border: none;

//   &::placeholder {
//     color: inherit;
//   }
// `;

// const StyledStatus = styled.p`
//   text-align: center;
//   animation: ${btnAppear} 1s var(--spring-easing);
// `;

// const StyledForm = styled.form`
//   display: flex;
//   gap: 1rem;
// `;

// const EditBtn = styled.button`
//   display: block;
//   background-color: var(--color-footer);
//   justify-self: center;

//   width: 1.5rem;
//   height: 1.5rem;
//   border: none;
//   border-radius: 0.3rem;
//   cursor: pointer;
// `;

// Images objects to pass the styles to the UseImages component

const styledExpandIcon = {
  image: expandIcon,
  widthHeight: { width: "3.6rem", height: "1.6rem" },
  flexShrink: "0",
  content: "minimize",
  afterPadding: "1.6rem",
};

const styledFeatures = {
  image: features,
  widthHeight: { width: "3.5rem", height: "3rem" },
  flexShrink: "0",
  content: "edit",
  afterPadding: "3.4rem",
};

const StripesStyling = [
  { width: "86%", bg: "var(--color-main)", top: "7.4rem", left: "4rem" },
  { width: "86%", bg: "var(--color-footer)", top: "8.2rem", left: "4rem" },
];

export default function Settings() {
  const { user } = useUser();

  if (!user || !user.user_metadata) {
    return <p>Loading user data...</p>;
  }

  const { fullName, avatar } = user.user_metadata; // Name and avatar fetched from supabase

  const userAvatar = {
    image: avatar || Avatar,
    widthHeight: { width: "8rem", height: "8rem" },
    padding: "0",
    borderRadius: "50%",
    border: "2px solid var(--color-footer)",
    flexShrink: "0",
    content: "avatar",
    afterPadding: "2.5rem",
    afterLeft: "1rem",
  };

  // const [status, setStatus] = useState("what's on your mind...");
  // const [showStatus, setShowStatus] = useState(false);
  // const [showButton, setShowButton] = useState("");

  // const statusInput = useRef<HTMLInputElement>(null);
  // const inputValue = statusInput.current?.value;

  // function handleStatus(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   setStatus(inputValue || "");
  //   setShowStatus(true);
  //   setShowButton("");
  // }

  // function handleChange() {
  //   statusInput.current?.focus();
  //   setShowStatus(false);
  // }

  return (
    <Wrapper $padding="3rem 2rem" $gap="1rem">
      <StyledSettings>
        <UseImages styles={userAvatar} />
        <Stripes arr={StripesStyling} />

        <p>Welcome back {fullName}</p>
        <IconsContainer>
          <UseImages styles={styledExpandIcon} />
          <UseImages styles={styledFeatures} />
        </IconsContainer>
      </StyledSettings>
      {/* {showStatus ? (
        <Grid $gap="2rem">
          <StyledStatus>{status}</StyledStatus>
          <EditBtn onClick={handleChange} />
        </Grid>
      ) : (
        <StyledForm onSubmit={handleStatus}>
          <StyledInput
            type="text"
            placeholder={status || "..."}
            ref={statusInput}
            onChange={(e) => setShowButton(e.target.value)}
          />
          {showButton.length > 0 && (
            <Button type="submit" $padding="0.5rem 2rem">
              set
            </Button>
          )}
        </StyledForm>
      )} */}
    </Wrapper>
  );
}
