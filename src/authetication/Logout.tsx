import UseImages from "../ui/UseImages";
import logoutImg from "../../public/logout.png";
import styled from "styled-components";
import { useLogout } from "./useLogout";
import { Button } from "../ui/Button";

const StyledLogout = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const logoutImage = {
  image: logoutImg,
  widthHeight: { width: "2.4rem", height: "1.7rem" },
  content: "logout",
  //   afterLeft: "-1rem",
};

export default function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <StyledLogout>
      <Button
        disabled={isPending}
        onClick={logout}
        $padding="0"
        $backgroundColor="transparent"
        $borderColor="transparent"
        $shadow="none"
      >
        <UseImages styles={logoutImage} />
      </Button>
    </StyledLogout>
  );
}
