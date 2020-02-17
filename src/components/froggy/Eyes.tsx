import React from "react";
import styled from "@emotion/styled";

type Props = {
  theme: any;
};

const Eye = styled("div")`
  height: 12.5%;
  width: 12.5%;
  background-color: ${({ theme }: Props) => theme.colors.frogBody};
  border-radius: 40px 40px 0px 0px;
`;
const EyeLeft = styled(Eye)`
  position: absolute;
  bottom: 45%;
  left: 23%;
  z-index: 2;
  transform: rotate(-30deg);
`;
const EyeRight = styled(Eye)`
  position: absolute;
  bottom: 45%;
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

export const LeftEye = () => {
  return (
    <EyeLeft>
      <BrowLeft />
      <EyeBall>
        <PupilLeft />
      </EyeBall>
    </EyeLeft>
  );
};

export const RightEye = () => {
  return (
    <EyeRight>
      <BrowRight />
      <EyeBall>
        <PupilRight />
      </EyeBall>
    </EyeRight>
  );
};
