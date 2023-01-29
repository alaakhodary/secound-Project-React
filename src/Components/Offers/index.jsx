import React from "react";
import { Img, DivP, DivSubP, DivWatch, DivImg } from "./style";

const Offers = ({ image, name, offer }) => {
  return (
    <DivWatch>
      <DivImg>
        <Img src={image} alt="images" />
      </DivImg>
      <DivP>{name}</DivP>
      <DivSubP>{offer}</DivSubP>
    </DivWatch>
  );
};

export default Offers;
