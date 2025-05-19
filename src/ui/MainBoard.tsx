import styled from "styled-components";
import Logout from "../authetication/Logout";
import useDashboard from "../context/dashboardContext";
import useAllData from "../context/useAllData";
import Wrapper from "./Wrapper";
import { Flex } from "../reusableComponents/StyledReusable";

interface LabelProps {
  $fontSize?: string;
}

const EventsContainer = styled(Flex)``;

const Label = styled.div<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.$fontSize || "3rem"};
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;

  cursor: pointer;
  transition: all 1s var(--spring-easing);

  &:hover {
    transform: scale(1.02);
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export default function MainBoard() {
  const { type } = useDashboard();
  const { data, isLoading, error } = useAllData({ type });

  if (error) return <p>Error: {error.message}</p>;

  const isReady = data?.length === 0 || isLoading;

  return (
    <Wrapper
      $columnStart="2"
      $rowStart="1 / span 2"
      $backgroundColor={`${
        !isLoading ? "var(--color-board)" : "var(--color-main)"
      }`}
      $borderColor="var(--color-board-stroke)"
      $padding="1.5rem 2rem"
    >
      <Logout />
      <h3>Let's the e-venting begin</h3>
      <EventsContainer $gap="1.4rem">
        <Label>+</Label>
        {!isReady ? (
          data!.map((item) => (
            <Label key={item.id} $fontSize="1.3rem">
              {item.name}
            </Label>
          ))
        ) : (
          <p>{type + " page is still in development..."}</p>
        )}
      </EventsContainer>
    </Wrapper>
  );
}
