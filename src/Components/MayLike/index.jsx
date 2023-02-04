import React from "react";
import { DivAllLikeProduct, DivImgP, DivPName, PName, Pprice } from "./style";

const MayLike = ({ ImgMyLike, name, price }) => {
  return (
    <DivAllLikeProduct>
      <DivImgP>
        <img src={ImgMyLike} alt="ImgMyLike" />
      </DivImgP>
      <DivPName>
        <PName>{name}</PName>
        <Pprice>{price}</Pprice>
      </DivPName>
    </DivAllLikeProduct>
  );
};

export default MayLike;
