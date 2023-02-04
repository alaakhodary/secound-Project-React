import React from "react";

import Backgroundblue from "../../asset/backgroundBlue.png";
import BackgroundblueW from "../../asset/backWhiteBlue.png";

import {
  ButtonShop,
  DivAllBoxDisc,
  DivFlexDetails,
  FirstImg,
  HName,
  Pdescribtion,
  SecoundtImg,
} from "./style";

const BoxDiscount = ({ name, description }) => {
  return (
    <DivAllBoxDisc>
      <FirstImg src={Backgroundblue} alt="Backgroundblue" />
      <SecoundtImg src={BackgroundblueW} alt="BackgroundblueW" />
      <DivFlexDetails>
        <div>
          <HName>{name}</HName>
          <Pdescribtion>{description}</Pdescribtion>
        </div>
        <div>
          <ButtonShop>Shop now</ButtonShop>
        </div>
      </DivFlexDetails>
    </DivAllBoxDisc>
  );
};

export default BoxDiscount;
