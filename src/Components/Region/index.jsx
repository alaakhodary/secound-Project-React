import React from "react";
import {
  DivFlag,
  DivFlagImg,
  DivFlagP,
  Flagimg,
  FlagP,
  FlagSubP,
} from "./style";

const Region = ({ FlagImg, name, subname }) => {
  return (
    <DivFlag>
      <DivFlagImg>
        <Flagimg src={FlagImg} alt="FlagImages" />
      </DivFlagImg>
      <DivFlagP>
        <FlagP>{name}</FlagP>
        <FlagSubP>{subname}</FlagSubP>
      </DivFlagP>
    </DivFlag>
  );
};

export default Region;
