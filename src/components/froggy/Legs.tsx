import React from "react";
import styled from "@emotion/styled";
import animations from "../animations/AnimationFront";

type Props = {
  theme?: any;
  animation?: String;
};

type LegProps = {
  animation: string;
};

const UpperLegLeft = styled("div")<Props>`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  position: absolute;
  bottom: 1%;
  left: 25%;
  border-radius: 50% 50% 0% 45%;
  transform-origin: bottom;
  transform: rotate(-10.5deg);

  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationLeftUpperLeg" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationLeftUpperLeg {
    ${animations.leftUpperLeg}
  }
`;

const LowerLegLeft = styled("div")<Props>`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 1%;
  left: 19.7%;
  border-radius: 50% 50% 45% 45%;
  transform-origin: top;
  transform-origin: bottom;
  transform: rotate(-3deg);
  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationLeftLowerLeg" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationLeftLowerLeg {
    ${animations.leftLowerLeg}
  }
`;

const FootLeft = styled("div")`
  width: 20%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 0;

  left: 8.8%;
  border-radius: 80% 0% 00% 00%;
`;

const UpperLegRight = styled("div")<Props>`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  position: absolute;
  bottom: 1%;

  right: 25%;
  border-radius: 50% 50% 45% 0%;
  transform-origin: bottom;
  transform: rotate(10.5deg);
  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationRightUpperLeg" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationRightUpperLeg {
    ${animations.rightUpperLeg}
  }
`;

const LowerLegRight = styled("div")<Props>`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 1%;

  right: 19.7%;
  border-radius: 50% 50% 45% 45%;
  transform-origin: bottom;
  transform: rotate(3deg);
  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationRightLowerLeg" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationRightLowerLeg {
    ${animations.rightLowerLeg}
  }
`;

const FootRight = styled("div")`
  width: 20%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 0;

  right: 8.8%;
  border-radius: 0% 80% 00% 00%;
`;

export const LeftLeg = ({ animation }: LegProps) => {
  return (
    <div>
      <UpperLegLeft animation={animation} />
      <LowerLegLeft animation={animation} />
      <FootLeft />
    </div>
  );
};


export const RightLeg = ({ animation }: LegProps) => {
  return (
    <div>
      <UpperLegRight animation={animation} />
      <LowerLegRight animation={animation} />
      <FootRight />
    </div>
  );
};
