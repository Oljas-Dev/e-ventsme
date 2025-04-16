import { keyframes } from "styled-components";

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

const btnAppear = keyframes`
    0% {
        transform: translateX(3rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
export { appear, btnAppear, fadeIn };
