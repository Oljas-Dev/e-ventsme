import { RefObject } from "react";

import { Input, StyledLogin } from "../reusableComponents/StyledReusable";
import { MainBtn } from "../ui/Button";

interface LoginProps {
  isPending: boolean;
  emailRef: RefObject<HTMLInputElement | null>;
  passwordRef: RefObject<HTMLInputElement | null>;
}

export default function LoginInputs({
  isPending,
  emailRef,
  passwordRef,
}: LoginProps) {
  return (
    <StyledLogin>
      <label htmlFor="email">sign in</label>
      <Input
        type="email"
        id="email"
        placeholder="your email"
        ref={emailRef}
        required
        disabled={isPending}
      />
      <Input
        type="password"
        id="password"
        placeholder="your password"
        ref={passwordRef}
        required
        disabled={isPending}
      />
      <MainBtn type="submit">sign in</MainBtn>
    </StyledLogin>
  );
}
