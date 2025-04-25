import { createContext, FormEvent, RefObject, useContext, useRef } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { FieldValues, useForm } from "react-hook-form";

import { reactChildren } from "../reusableComponents/types";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import { useLogin } from "./useLogin";
import {
  AuthWrapper,
  FlexCol,
  Input,
  StyledLogin,
} from "../reusableComponents/StyledReusable";
import useStates from "../context/useStates";
import Wrapper from "../ui/Wrapper";
import { MainBtn } from "../ui/Button";
import googleImg from "../../public/devicon_google.png";
import UseImages from "../ui/UseImages";
import AuthParagraph from "../ui/AuthParagraph";
import useSignUp from "./useSignUp";

interface AuthFormProps {
  handleLogin: (e: FormEvent<HTMLFormElement>) => void;
  // handleSignup: SubmitHandler<FieldValues>;
  emailRef: RefObject<HTMLInputElement | null>;
  passwordRef: RefObject<HTMLInputElement | null>;
}

const StyledForm = styled.form``;

const StyledGoogleBtn = styled(MainBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const googleImage = {
  image: googleImg,
  widthHeight: { width: "1.6rem", height: "1.6rem" },
  showBubble: "none",
};

const AuthFormContext = createContext<AuthFormProps>({} as AuthFormProps);

export function AuthForm({ children }: reactChildren) {
  const { move, step } = useStates();
  const { login } = useLogin();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    login({ email, password });
  }

  return (
    <AuthFormContext.Provider value={{ handleLogin, emailRef, passwordRef }}>
      <AuthWrapper $translateX={`translateX(${move * step}rem)`}>
        <Wrapper>{children}</Wrapper>
      </AuthWrapper>
    </AuthFormContext.Provider>
  );
}

function LoginForm() {
  const { handleLogin, emailRef, passwordRef } = useContext(AuthFormContext);
  const { isPending } = useLogin();

  const navigate = useNavigate();
  return (
    <>
      <StyledForm onSubmit={handleLogin}>
        <LoginHeader heading="Start e-venting your life" />
        <LoginInputs
          isPending={isPending}
          emailRef={emailRef}
          passwordRef={passwordRef}
        />
      </StyledForm>
      <AuthParagraph link="/signup" linkText="sign up" />
      <MainBtn onClick={() => navigate("/signup")} disabled={isPending}>
        sign up
      </MainBtn>
      <StyledGoogleBtn disabled={isPending}>
        with <UseImages styles={googleImage} /> Google account
      </StyledGoogleBtn>
    </>
  );
}

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { signup, isPending } = useSignUp();

  const { errors } = formState;

  function handleSignup({ email, password }: FieldValues) {
    signup({ email, password }, { onSettled: () => reset() });
  }

  // Email regex: /\S+@\S+\.\S+/

  return (
    <StyledForm onSubmit={handleSubmit(handleSignup)}>
      <LoginHeader heading="Start e-venting your life" />
      <StyledLogin>
        <label htmlFor="signupEmail">sign up</label>
        <Input
          type="email"
          id="signupEmail"
          placeholder="your email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isPending}
        />
        {errors?.email?.message && (
          <AuthParagraph text={errors?.email?.message} />
        )}
        <Input
          type="password"
          id="password"
          placeholder="your password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isPending}
        />
        {errors?.password?.message && (
          <AuthParagraph text={errors?.password?.message} />
        )}
        <Input
          type="password"
          placeholder="confirm your password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isPending}
        />
        {errors?.passwordConfirm?.message && (
          <AuthParagraph text={errors?.passwordConfirm?.message} />
        )}
        <MainBtn type="submit" disabled={isPending}>
          sign up
        </MainBtn>
        <AuthParagraph link="/login" linkText="sign in" />
      </StyledLogin>
    </StyledForm>
  );
}

const StyledAuthFinish = styled(FlexCol)`
  gap: 14rem;
  max-width: 40rem;
  text-align: center;
`;

function AuthFinish() {
  return (
    <StyledAuthFinish>
      <LoginHeader heading="Only one last step👍" />
      <AuthParagraph
        text="We’ve sent a confirmation email, please check it out
and follow further instructions."
      />
      <h2>You're the best!</h2>
    </StyledAuthFinish>
  );
}

AuthForm.Login = LoginForm;
AuthForm.SignUp = SignupForm;
AuthForm.AuthFinish = AuthFinish;
