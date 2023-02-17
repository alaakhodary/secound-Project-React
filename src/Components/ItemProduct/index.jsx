import React from "react";
import {
  DivAllProduct,
  DivFlexPrice,
  DivImgProduct,
  Divlove,
  Flexdetails,
  Imglove,
  ImgProduct,
  Pdesc,
  Pfree,
  PnameProduct,
  Porders,
  Pprice,
  Prate,
  Prevprice,
  Pview,
} from "./style";

const ItemProduct = ({
  productImg,
  name,
  price,
  prevPrice,
  Fstar,
  rate,
  star,
  dot,
  orders,
  free,
  desc,
  love,
}) => {
  return (
    <DivAllProduct>
      <DivImgProduct>
        <ImgProduct src={productImg} alt="productImg" />
      </DivImgProduct>
      <div>
        <PnameProduct>{name}</PnameProduct>
        <DivFlexPrice>
          <Pprice>{price}</Pprice>
          <Prevprice>{prevPrice}</Prevprice>
        </DivFlexPrice>
        <Flexdetails>
          <div>
            <img src={Fstar} alt="Fstar" />
            <img src={Fstar} alt="Fstar" />
            <img src={Fstar} alt="Fstar" />
            <img src={Fstar} alt="Fstar" />
            <img src={star} alt="star" />
          </div>
          <Prate>{rate}</Prate>
          <img src={dot} alt="dot" />
          <Porders>{orders}</Porders>
          <img src={dot} alt="dot" />
          <Pfree>{free}</Pfree>
        </Flexdetails>
        <Pdesc>{desc}</Pdesc>
        <Pview>View details</Pview>
      </div>
      <div>
        <Divlove>
          <Imglove src={love} alt="love" />
        </Divlove>
      </div>
    </DivAllProduct>
  );
};

export default ItemProduct;
