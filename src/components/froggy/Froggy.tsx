import React from "react";
import styled from "@emotion/styled";
import animations from "../animations/AnimationFront";

import { LeftEye, RightEye } from "./Eyes";
import { LeftLeg, RightLeg } from "./Legs";
import { LeftArm, RightArm } from "./Arms";

type Props = {
  theme?: any;
  animation?: String;
};

const Button = styled.div`
  width: 50px;
  height: 24px;
`;
const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  position: relative;
`;

const Body = styled("div")<Props>`
  width: 50%;
  height: 50%;
  background-color: ${({ theme }: Props) => theme.colors.frogBody};
  border-radius: 25.5%;
  position: absolute;
  bottom: 0;
  left: 25%;
  right: 25%;
  animation: ${({ animation }: Props) =>
      animation === "yes" ? "animationBody" : "none"}
    1s forwards;
  @keyframes none {
  }
  @keyframes animationBody {
    ${animations.body}
  }
`;

const Belly = styled("div")`
  width: 80%;
  height: 60%;
  background-color: ${({ theme }: Props) => theme.colors.belly};
  border-radius: 30%;
  position: absolute;
  bottom: 10%;
  left: 10%;
  right: 10%;
`;

const Mouth = styled("div")`
  height: 4%;
  width: 40%;
  position: absolute;
  top: 20%;
  left: 30%;
  right: 30%;
  border-top: 1px solid black;
  border-radius: 50% 50% 0% 0%;
`;

const Froggy = () => {
  const [animation, setAnimation] = React.useState("no");

  const handleClick = () => {
    console.log("click");
    animation === "no" ? setAnimation("yes") : setAnimation("no");
  };

  return (
    <Container>
      <Button onClick={() => handleClick()}>Button</Button>
      <LeftArm />

      <LeftLeg animation={animation} />
      <LeftEye animation={animation} />
      <RightArm />
      <RightLeg animation={animation} />
      <RightEye animation={animation} />
      <Body animation={animation}>
        <Mouth />
        <Belly />
      </Body>
    </Container>
  );
};

export default Froggy;
