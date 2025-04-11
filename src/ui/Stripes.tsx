import styled from "styled-components";

interface StripeProps {
  $bg?: string;
}

const Stripe = styled.div<StripeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.$bg};
`;

export default function Stripes() {
  return <Stripe></Stripe>;
}
