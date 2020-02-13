import React from "react";
import styled from "@emotion/styled";

type Props = {
  theme: any;
};

const UpperLegLeft = styled("div")`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  position: absolute;
  bottom: 1%;
  left: 25%;
  border-radius: 50% 50% 0% 45%;
  transform-origin: bottom;
  transform: rotate(-10.5deg);
  z-index: 5;
  background-color: blue;
`;

const LowerLegLeft = styled("div")`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 1%;
  left: 18%;
  border-radius: 50% 50% 45% 45%;
  transform-origin: top;
  transform: rotate(-3deg);
`;

const FootLeft = styled("div")`
  width: 20%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 10%;
  border-radius: 80% 0% 00% 00%;
`;

const UpperLegRight = styled("div")`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  position: absolute;
  bottom: 1%;
  right: 18%;
  border-radius: 50% 50% 45% 0%;
  transform: rotate(10deg);
`;

const LowerLegRight = styled("div")`
  width: 8%;
  height: 38%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 1%;
  right: 16%;
  border-radius: 50% 50% 45% 45%;
  transform: rotate(3deg);
`;

const FootRight = styled("div")`
  width: 20%;
  height: 5%;
  background-color: ${({ theme }: Props) => theme.colors.legs};
  opacity: 1;
  position: absolute;
  bottom: 0;
  right: 10%;
  border-radius: 0% 80% 00% 00%;
`;

export const LeftLeg = () => {
  return (
    <div>
      <UpperLegLeft />
      <LowerLegLeft />
      <FootLeft />
    </div>
  );
};

export const RightLeg = () => {
  return (
    <div>
      <UpperLegRight />
      <LowerLegRight />
      <FootRight />
    </div>
  );
};
