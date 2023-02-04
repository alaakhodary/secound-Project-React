import React from "react";
import { DivFeature, DivImgLock, PdiscFeature, PNameFeature } from "./style";

const PaymentMFeatures = ({ FeaturesImg, name, disc }) => {
  return (
    <DivFeature>
      <DivImgLock>
        <img src={FeaturesImg} alt="FeaturesImg" />
      </DivImgLock>
      <div>
        <PNameFeature>{name}</PNameFeature>
        <PdiscFeature>{disc}</PdiscFeature>
      </div>
    </DivFeature>
  );
};

export default PaymentMFeatures;
