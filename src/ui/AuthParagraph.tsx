import styled from "styled-components";
import { StyledLink } from "../reusableComponents/StyledReusable";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";

interface ParagraphProps {
  link?: string;
  linkText?: string;
  text?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
}

const StyledTextLink = styled.p`
  text-align: center;
  margin-bottom: -2.5rem;

  &:is(:last-child) {
    margin-bottom: 0rem;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

export default function AuthParagraph({
  link = "#",
  linkText,
  text,
}: ParagraphProps) {
  return !text ? (
    <StyledTextLink>
      or{" "}
      <StyledLink to={link} $color="var(--color-events)">
        {linkText}
      </StyledLink>
    </StyledTextLink>
  ) : (
    <StyledParagraph>{text}</StyledParagraph>
  );
}
