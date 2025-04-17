import styled from "styled-components";
import { FlexCol, StyledLink } from "../reusableComponents/StyledReusable";
import Wrapper from "./Wrapper";

const StyledFooter = styled(FlexCol)`
  align-items: flex-end;
`;

const StyledFooterLink = styled(StyledLink)`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Footer() {
  return (
    <Wrapper
      $rowStart="3"
      $columnStart="1 / span 2"
      $backgroundColor="var(--color-footer)"
      $color="var(--color-user)"
      $borderColor="var(--color-footer-stroke)"
      $padding="2rem"
    >
      <StyledFooter>
        <StyledFooterLink to="#">about us</StyledFooterLink>
        <StyledFooterLink to="#">contacts</StyledFooterLink>
        <StyledFooterLink to="#">support us</StyledFooterLink>
      </StyledFooter>
    </Wrapper>
  );
}
