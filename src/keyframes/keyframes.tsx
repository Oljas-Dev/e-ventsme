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

export { appear, btnAppear };
