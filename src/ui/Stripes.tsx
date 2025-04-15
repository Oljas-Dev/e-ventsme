import styled from "styled-components";

interface StyleProps {
  $bg: string;
  $width: string;
  $left: string;
  $top: string;
}

type StripesProps = {
  arr: { width: string; bg: string; left: string; top: string }[];
};

const Stripe = styled.div<StyleProps>`
  position: absolute;
  top: ${(props) => props.$top || "0"};
  left: ${(props) => props.$left || "0"};
  width: ${(props) => props.$width};
  height: 0.8rem;
  background: ${(props) => props.$bg};
`;

export default function Stripes({ arr }: StripesProps) {
  return arr.map((stripe, i) => (
    <Stripe
      $width={stripe.width}
      $bg={stripe.bg}
      $left={stripe.left}
      $top={stripe.top}
      key={i}
    />
  ));
}
