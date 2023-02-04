import React from "react";

import { ButtonSaved, DivImg, Imgcart, Pdetails, Pprice } from "./style";

const SavedForLater = ({ img, price, details, ImgCart }) => {
  return (
    <div>
      <DivImg>
        <img src={img} alt="img" />
      </DivImg>
      <Pprice>{price}</Pprice>
      <Pdetails>{details}</Pdetails>
      <div>
        <ButtonSaved>
          Move to cart
          <Imgcart src={ImgCart} alt="cart" />
        </ButtonSaved>
      </div>
    </div>
  );
};

export default SavedForLater;
