import styled from "styled-components";

import bubble from "../../public/bubble.png";
import { fadeIn } from "../keyframes/keyframes";
import { ReactElement } from "react";

interface ImageProps {
  styles: {
    image?: string;
    widthHeight?: { width?: string; height?: string };
    padding?: string;
    borderRadius?: string;
    border?: string;
    flexShrink?: string;
    rotate?: string;
    transforms?: string;
    hover?: string;
    antiHover?: string;
    content?: string;
    afterPadding?: string;
    afterLeft?: string;
    showBubble?: string;
  };
  children?: string | ReactElement;
}

interface ImageContainerProps {
  $image?: string;
  $width?: string;
  $height?: string;
  $padding?: string;
  $borderRadius?: string;
  $border?: string;
  $flexShrink?: string;
  $transforms?: string;
  $hover?: string;
  $antiHover?: string;
  $content?: string;
  $afterPadding?: string;
  $afterLeft?: string;
  $showBubble?: string;
}

const ImageContainer = styled.span<ImageContainerProps>`
  display: block;
  font-size: 1.2rem;
  background: url(${(props) => props.$image}) no-repeat 0 0;
  background-size: ${(props) => props.$width} ${(props) => props.$height};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  cursor: pointer;

  transform: ${(props) => props.$transforms || ""};
  transition: all 1s var(--spring-easing);
  border: ${(props) => props.$border || ""};
  border-radius: ${(props) => props.$borderRadius || ""};
  flex-shrink: ${(props) => props.$flexShrink || ""};
  // overflow: hidden;
  position: relative;
  z-index: 10;

  &:hover {
    transform: ${(props) => props.$transforms};
    ${(props) => props.$hover};
  }

  &:hover::after {
    display: ${(props) => props.$showBubble || "block"};
    ${(props) => props.$antiHover};
    animation: ${fadeIn} 1s var(--spring-easing);
  }

  &:after {
    content: "${(props) => props.$content}";
    display: none;
    color: var(--color-footer);

    position: absolute;
    top: -4rem;
    left: ${(props) => props.$afterLeft || "-0.5rem"};
    padding: 0.7rem 0 0 ${(props) => props.$afterPadding || "3rem"};
    width: 8rem;
    height: 5rem;
    background: url(${bubble}) no-repeat 0 0;
    background-size: 8rem 5rem;
    transform-origin: left bottom;
  }
`;

export default function UseImages({ styles, children }: ImageProps) {
  const {
    image,
    widthHeight,
    padding,
    border,
    borderRadius,
    flexShrink,
    transforms,
    hover,
    content,
    afterPadding,
    afterLeft,
    showBubble,
    antiHover,
  } = styles;

  return (
    <ImageContainer
      $image={image}
      $width={widthHeight!.width}
      $height={widthHeight!.height}
      $padding={padding}
      $border={border}
      $borderRadius={borderRadius}
      $flexShrink={flexShrink}
      $transforms={transforms}
      $hover={hover}
      $antiHover={antiHover}
      $content={content}
      $afterPadding={afterPadding}
      $afterLeft={afterLeft}
      $showBubble={showBubble}
    >
      {children}
    </ImageContainer>
  );
}
