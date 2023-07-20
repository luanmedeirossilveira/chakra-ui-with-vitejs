import styled from "@emotion/styled";
import { SVGProps } from "react";

interface BellSVGProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

const BellSVG = ({ width, height, ...props }: BellSVGProps) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m9.75-17.81l-1.42 1.42A8.982 8.982 0 0 1 21 11h2c0-2.93-1.16-5.75-3.25-7.81M1 11h2c0-2.4.96-4.7 2.67-6.39L4.25 3.19A10.96 10.96 0 0 0 1 11Z"></path></svg>
);

const BellIconStyled = styled(BellSVG)`
  @keyframes bell {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  && {
    margin: 0 auto;
    display: block;
    width: ${({ width }) => (width ? width : "1em")};
    height: ${({ height }) => (height ? height : "1em")};
  }

  && path {
    fill: currentColor;
  }

  &&:hover {
    animation: bell 1s linear infinite;
  }
`;

export function BellIcon({ width, height, color }: BellSVGProps = {}) {
  return (
    <BellIconStyled width={width} height={height} color={color} />
  )
}