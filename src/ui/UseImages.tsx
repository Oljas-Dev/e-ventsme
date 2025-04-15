import styled from "styled-components";

interface ImageProps {
  styles: {
    image?: string;
    widthHeight?: { width: string; height: string };
    padding?: string;
    borderRadius?: string;
    border?: string;
    flexShrink?: string;
    rotate?: string;
    transforms?: string;
    hover?: string;
  };
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
}

const ImageContainer = styled.span<ImageContainerProps>`
  font-size: 1.2rem;
  position: relative;
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
  positon: relative;
  z-index: 10;

  &:hover {
    transform: ${(props) => props.$transforms};
  }
`;

export default function UseImages({ styles }: ImageProps) {
  const {
    image,
    widthHeight,
    padding,
    border,
    borderRadius,
    flexShrink,
    transforms,
    hover,
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
    />
  );
}
