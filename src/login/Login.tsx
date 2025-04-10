import { FormEvent, useRef } from "react";
import styled, { keyframes } from "styled-components";

import LoginHeader from "./LoginHeader";
import useStates from "../context/useStates";
import { useLogin } from "../services/useLogin";

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

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--color-user);
  padding: 4rem;
  border-radius: 3rem;
  border-top: 2px solid var(--color-user-stroke);
  border-left: 1px solid var(--color-user-stroke);
  box-shadow: var(--shadow);
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

const Button = styled.button`
  background-color: var(--color-user);
  color: var(--color-footer);
  border-top: 2px solid var(--color-user-stroke);
  border-left: 1px solid var(--color-user-stroke);
  border-right: none;
  border-bottom: none;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: transform 1s var(--spring-easing),
    box-shadow 1s var(--spring-easing);

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    box-shadow: var(--active-shadow);
    transform: scale(0.99);
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
      <LoginWrapper>
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
          <Button type="submit">sign in</Button>
        </LoginInputs>
      </LoginWrapper>
    </LoginForm>
  );
}
