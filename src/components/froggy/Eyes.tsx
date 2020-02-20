import React from "react";
import styled from "@emotion/styled";
import animations from "../animations/AnimationFront";

type Props = {
  theme?: any;
  animation?: string;
};

const Eye = styled("div")<Props>`
  height: 12.5%;
  width: 12.5%;
  background-color: ${({ theme }: Props) => theme.colors.frogBody};
  border-radius: 40px 40px 0px 0px;
  bottom: 45%;
  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationEye" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationEye {
    ${animations.eyes}
  }
`;
const EyeLeft = styled(Eye)`
  position: absolute;
  left: 23%;
  z-index: 2;
  transform: rotate(-30deg);
`;
const EyeRight = styled(Eye)`
  position: absolute;
  right: 23%;
  z-index: 2;
  transform: rotate(30deg);
`;

const EyeBall = styled("div")`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  left: 12.5%;
  top: 12.5%;
`;

const PupilLeft = styled("div")`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: 15%;
  top: 15%;
`;

const PupilRight = styled("div")`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: 15%;
  top: 15%;
`;

const BrowLeft = styled("div")`
  width: 80%;
  height: 30%;
  background-color: ${({ theme }: Props) => theme.colors.frogBody};
  opacity: 14;
  position: absolute;
  z-index: 2;
  top: 21%;
  left: 29%;
  border-radius: 50% 50% 0% 0%;
  transform: rotate(60deg);
`;

const BrowRight = styled("div")`
  width: 80%;
  height: 30%;
  background-color: ${({ theme }: Props) => theme.colors.frogBody};
  opacity: 14;
  position: absolute;
  z-index: 2;
  top: 21%;
  right: 29%;
  border-radius: 50% 50% 0% 0%;
  transform: rotate(-60deg);
`;

export const LeftEye = ({ animation }: Props) => {
  return (
    <EyeLeft animation={animation}>
      <BrowLeft />
      <EyeBall>
        <PupilLeft />
      </EyeBall>
    </EyeLeft>
  );
};

export const RightEye = ({ animation }: Props) => {
  return (
    <EyeRight animation={animation}>
      <BrowRight />
      <EyeBall>
        <PupilRight />
      </EyeBall>
    </EyeRight>
  );
};
