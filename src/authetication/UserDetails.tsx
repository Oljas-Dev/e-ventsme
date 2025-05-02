import styled from "styled-components";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Wrapper from "../ui/Wrapper";
import {
  Flex,
  FlexCol,
  Input,
  StyledLogin,
} from "../reusableComponents/StyledReusable";
import { useUpdateUser } from "./useUpdateUser";
import AuthParagraph from "../ui/AuthParagraph";
import FileInput from "../ui/FileInput";
import { Button } from "../ui/Button";
import UseImages from "../ui/UseImages";
import activeImage from "../../public/active_arr.png";
import inactiveImage from "../../public/inactive_arr.png";
import { reactChildren } from "../reusableComponents/types";

const StyledUserDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 4rem;
`;

const StyledWrapper = styled(Wrapper)`
  grid-column: ${(props) => props.$columnStart};
`;

// UserDetails component's styles
const StyledDetails = styled(FlexCol)`
  gap: 10rem;

  text-align: center;
  min-width: 40rem;
`;

// Objects with styles for btn image
const activeImg = {
  image: activeImage,
  widthHeight: { width: "4rem", height: "2rem" },
  showBubble: "none",
};
const inactiveImg = {
  image: inactiveImage,
  widthHeight: { width: "4rem", height: "2rem" },
  showBubble: "none",
};

interface UserDetailsContextProps {}

export const userDetailsContext = createContext<UserDetailsContextProps>(
  {} as UserDetailsContextProps
);

export function Details({ children }: reactChildren) {
  return (
    <userDetailsContext.Provider value={{}}>
      <StyledUserDetails>{children}</StyledUserDetails>
    </userDetailsContext.Provider>
  );
}

export function AvatarAndUserName() {
  const [avatar, setAvatar] = useState<File | undefined>();
  const { register, formState, getFieldState, handleSubmit, reset } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();

  const { errors } = formState;
  const { isDirty } = getFieldState("fullName", formState);
  const navigate = useNavigate();

  function handleFullName({ fullName }: FieldValues) {
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          navigate("/details/birthdate");
          setAvatar(undefined);
          reset();
        },
        onError: (error) => {
          toast.error(`Failled to update user: ${error.message}`);
        },
      }
    );
  }
  return (
    <StyledWrapper $columnStart="1 / 2">
      <form onSubmit={handleSubmit(handleFullName)}>
        <StyledDetails>
          <div>
            <h2>Almost there...</h2>
            <StyledLogin>
              <label>Your full name</label>
              <Input
                type="text"
                placeholder="full name"
                {...register("fullName", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Full name must be at least 3 characters long",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Full name can only contain letters and spaces",
                  },
                })}
                disabled={isUpdating}
              />
              {errors?.fullName?.message && (
                <AuthParagraph text={errors?.fullName?.message} />
              )}
              <label htmlFor="avatarFile">Upload avatar</label>
              <FileInput
                id="avatarFile"
                accept="image/*"
                onChange={(e) => {
                  setAvatar(e.target.files?.[0]);
                }}
                aria-label="Upload your avatar"
              />
            </StyledLogin>
          </div>

          <Button
            $padding="0"
            $backgroundColor="transparent"
            $borderColor="transparent"
            $shadow="none"
            $align="flex-end"
          >
            <UseImages styles={isDirty ? activeImg : inactiveImg} />
          </Button>
        </StyledDetails>
      </form>
    </StyledWrapper>
  );
}

function BirthDate() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();

  const { errors } = formState;
  const navigate = useNavigate();

  function handleBirthDate({ birthDate }: FieldValues) {
    // if (!birthDate) return;
    updateUser(
      { birthDate },
      {
        onSuccess: () => {
          navigate("/details/address");
          reset();
        },
        onError: (error) => {
          toast.error(`Failled to update user: ${error.message}`);
        },
      }
    );
  }

  return (
    <StyledWrapper $columnStart="2 / 3">
      <form onSubmit={handleSubmit(handleBirthDate)}>
        <StyledDetails>
          <div>
            <h2>How old are you</h2>
            <StyledLogin>
              <label htmlFor="birthDate">Your birth date</label>
              <Input
                type="date"
                id="birthDate"
                {...register("birthDate")}
                disabled={isUpdating}
              />
              {errors?.birthDate?.message && (
                <AuthParagraph text={errors?.fullName?.message} />
              )}
            </StyledLogin>
          </div>
          <Button
            $padding="0"
            $backgroundColor="transparent"
            $borderColor="transparent"
            $shadow="none"
            $align="flex-end"
          >
            <Flex>
              skip
              <UseImages styles={activeImg} />
            </Flex>
          </Button>
        </StyledDetails>
      </form>
    </StyledWrapper>
  );
}

function Address() {
  const { handleSubmit, reset } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();

  const navigate = useNavigate();

  function handleAddress({ birthDate }: FieldValues) {
    // if (!birthDate) return;
    updateUser(
      { birthDate },
      {
        onSuccess: () => {
          navigate("/dashboard");
          reset();
        },
        onError: (error) => {
          toast.error(`Failled to update user: ${error.message}`);
        },
      }
    );
  }
  return (
    <StyledWrapper $columnStart="3 / 4">
      <form onSubmit={handleSubmit(handleAddress)}>
        <StyledDetails>
          <div>
            <h2>Almost there...</h2>
            <StyledLogin>
              <label htmlFor="country">Your country</label>
              <Input
                type="text"
                id="country"
                placeholder="country name"
                disabled={isUpdating}
              />
            </StyledLogin>
            <StyledLogin>
              <label htmlFor="street">Your street</label>
              <Input
                type="text"
                id="street"
                placeholder="street name"
                disabled={isUpdating}
              />
            </StyledLogin>
            <StyledLogin>
              <label htmlFor="home">Your home number</label>
              <Input
                type="text"
                id="home"
                placeholder="home number"
                disabled={isUpdating}
              />
            </StyledLogin>
          </div>
          <Button
            $padding="0"
            $backgroundColor="transparent"
            $borderColor="transparent"
            $shadow="none"
            $align="flex-end"
          >
            <Flex>
              skip
              <UseImages styles={activeImg} />
            </Flex>
          </Button>
        </StyledDetails>
      </form>
    </StyledWrapper>
  );
}

Details.AvatarAndUserName = AvatarAndUserName;
Details.BirthDate = BirthDate;
Details.Address = Address;
