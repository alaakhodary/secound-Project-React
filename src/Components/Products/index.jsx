import React from "react";
import { Pprice, Imgproduct, DivProduct, Pproduct } from "./style";

const Products = ({ name, price, imgProduct }) => {
  return (
    <div>
      <DivProduct>
        <Pproduct>{name}</Pproduct>
        <Pprice>{price}</Pprice>
        <div>
          <Imgproduct src={imgProduct} alt="imgProducts" />
        </div>
      </DivProduct>
    </div>
  );
};

export default Products;
