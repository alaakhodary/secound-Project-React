import React from "react";
import {
  DivRecoDesc,
  DivRecoImage,
  DivRecommended,
  DivRecommendedImage,
  DivRecoPrice,
} from "./style";

const RecommendedItems = ({ Iimage, price, description }) => {
  return (
    <DivRecommended>
      <DivRecommendedImage>
        <DivRecoImage src={Iimage} alt="T-shirtImage" />
      </DivRecommendedImage>
      <DivRecoPrice>{price}</DivRecoPrice>
      <DivRecoDesc>{description}</DivRecoDesc>
    </DivRecommended>
  );
};

export default RecommendedItems;
