import React from "react";
import {
  ButtonRemove,
  ButtonSave,
  DivAllCart,
  DivButton,
  DivFlexCart,
  DivGridCart,
  DivgridCart,
  DivImgCart,
  Headingname,
  Hr,
  ImageCart,
  PCart,
  PcartPrice,
  SelectCart,
} from "./style";

const Cart = ({ name, details, price, CartImg }) => {
  return (
    <>
      <DivFlexCart>
        <DivAllCart>
          <DivImgCart>
            <ImageCart src={CartImg} alt="CartImg" />
          </DivImgCart>
          <DivgridCart>
            <Headingname>{name}</Headingname>
            <PCart>{details}</PCart>
            <DivButton>
              <ButtonRemove>Remove</ButtonRemove>
              <ButtonSave>Save for later</ButtonSave>
            </DivButton>
          </DivgridCart>
        </DivAllCart>
        <DivGridCart>
          <PcartPrice>{price}</PcartPrice>
          <SelectCart id="">
            <option value="1">Qty: 9</option>
          </SelectCart>
        </DivGridCart>
      </DivFlexCart>
      <Hr />
    </>
  );
};

export default Cart;
