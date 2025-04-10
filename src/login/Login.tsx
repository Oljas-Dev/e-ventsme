import { FormEvent, useRef } from "react";
import styled, { keyframes } from "styled-components";

import LoginHeader from "./LoginHeader";
import useStates from "../context/useStates";
import { useLogin } from "../services/useLogin";
import { Input } from "../reusableComponents/StyledReusable";
import { MainBtn } from "../ui/Button";
import Wrapper from "../ui/Wrapper";

interface LoginFormProps {
  $translateX?: string;
}

const appear = keyframes`
    0% {
        transform: translateX(10rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const LoginForm = styled.form<LoginFormProps>`
  display: flex;
  place-content: center;
  margin-top: 4rem;
  transform: ${(props) => props.$translateX};
  transition: transform 1s var(--spring-easing);
  animation: ${appear} 1.5s var(--spring-easing);
`;

const LoginInputs = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    margin-bottom: -1.7rem;
  }
`;

export default function Login() {
  const { move, step } = useStates();
  const { login, isPending } = useLogin();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("submit");

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    login({ email, password });
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      $translateX={`translateX(${move * step}rem)`}
    >
      <Wrapper>
        <LoginHeader />
        <LoginInputs>
          <label htmlFor="email">sign in</label>
          <Input
            type="email"
            id="email"
            placeholder="your email"
            required
            ref={emailRef}
            disabled={isPending}
          />
          <Input
            type="password"
            id="password"
            placeholder="your password"
            required
            ref={passwordRef}
            disabled={isPending}
          />
          <MainBtn type="submit">sign in</MainBtn>
        </LoginInputs>
      </Wrapper>
    </LoginForm>
  );
}
