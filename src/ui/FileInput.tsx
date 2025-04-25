import styled from "styled-components";
import { btnAppear } from "../keyframes/keyframes";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font-family: inherit;
    background-color: var(--color-user);
    color: var(--color-footer);
    animation: ${btnAppear} 1s var(--spring-easing);

    border-top: 2px solid var(--color-user-stroke);
    border-left: 1px solid var(--color-user-stroke);
    border-right: 1px solid var(--color-footer);
    border-bottom: 1px solid var(--color-footer);
    border-radius: 1.5rem;
    padding: 1.5rem;
    // box-shadow: var(--shadow);
    transition: all 1s var(--spring-easing);
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
    &:active {
      box-shadow: var(--active-shadow);
      transform: scale(0.99);
    }

    &:disabled {
      background-color: var(--color-user-inactive);
    }
  }
`;

export default FileInput;
