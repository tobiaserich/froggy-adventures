const animationHeightBody = 8;
const animationHeightLegs = animationHeightBody + 1;
const animationHeightEyes = 45 + animationHeightBody;
const animationRotationUpperLeg = 34;
const animationRotationLowerLeg = 20;
const animationJump = 0;

const animations = {
  body: ` from {bottom:0} to {bottom:${animationHeightBody}%} `,
  leftUpperLeg: `from {} to { bottom: ${animationHeightLegs}%; transform: rotate(-${animationRotationUpperLeg}deg); height: 35%;}`,
  leftLowerLeg: `from{}to{transform:rotate(-${animationRotationLowerLeg}deg)}`,
  rightUpperLeg: `from {} to { bottom: ${animationHeightLegs}%; transform: rotate(${animationRotationUpperLeg}deg); height: 35%;}`,
  rightLowerLeg: `from{}to{transform:rotate(${animationRotationLowerLeg}deg)}`,
  eyes: `from {} to {bottom: ${animationHeightEyes}%}`,
  container:`` 
};

export default animations;
