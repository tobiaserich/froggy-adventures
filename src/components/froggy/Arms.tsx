import React from "react";
import styled from "@emotion/styled";

type Props = {
  theme: any;
};

const ArmLeft = styled("div")`
  width: 8%;
  height: 35.5%;
  background: linear-gradient(
    ${({ theme }: Props) => theme.colors.frogBody} 0%,
    ${({ theme }: Props) => theme.colors.arms} 20%
  );
  position: absolute;
  z-index: 2;
  bottom: -0.3%;
  left: 26%;
  transform-origin: top;
  transform: rotate(-08deg);
  border-radius: 25% 30% 8% 70%;
`;

const HandLeft = styled("div")`
  width: 14%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.arms};
  position: absolute;
  z-index: 2;
  bottom: 0%;
  left: 24.2%;
  border-radius: 80% 5% 0% 0%;

  opacity: 1;

`;

const ArmRight = styled("div")`
  width: 8%;
  height: 35.5%;
  background: linear-gradient(
    ${({ theme }: Props) => theme.colors.frogBody} 0%,
    ${({ theme }: Props) => theme.colors.arms} 20%
  );
  position: absolute;
  z-index: 2;
  bottom: -0.3%;
  right: 26%;
  transform-origin: top;
  transform: rotate(8deg);
  border-radius: 30% 25% 70% 8%;
`;

const HandRight = styled("div")`
  width: 14%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.arms};
  position: absolute;
  z-index: 2;
  bottom: 0%;
  right: 24.2%;
  border-radius: 0% 80% 0% 5%;
`;

export const LeftArm = () => {
  return (
    <div>
      <ArmLeft />
      <HandLeft />
    </div>
  );
};

export const RightArm = () => {
  return (
    <div>
      <ArmRight />
      <HandRight />
    </div>
  );
};
