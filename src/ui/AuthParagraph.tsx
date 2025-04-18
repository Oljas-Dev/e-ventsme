import styled from "styled-components";
import { StyledLink } from "../reusableComponents/StyledReusable";

interface ParagraphProps {
  link: string;
  text: string;
}

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: -2.5rem;

  &:is(:last-child) {
    margin-bottom: 0rem;
  }
`;

export default function AuthParagraph({ link, text }: ParagraphProps) {
  return (
    <StyledParagraph>
      or{" "}
      <StyledLink to={link} $color="var(--color-events)">
        {text}
      </StyledLink>
    </StyledParagraph>
  );
}
