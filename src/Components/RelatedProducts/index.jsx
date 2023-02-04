import React from "react";
import {
  DivAllProducts,
  DivImgProducts,
  PProducts,
  PProductsSec,
} from "./style";

const RelatedProducts = ({ ImgProduct, name, price }) => {
  return (
    <DivAllProducts>
      <DivImgProducts>
        <img src={ImgProduct} alt="ImgProduct" />
      </DivImgProducts>
      <PProducts>{name}</PProducts>
      <PProductsSec>{price}</PProductsSec>
    </DivAllProducts>
  );
};

export default RelatedProducts;
